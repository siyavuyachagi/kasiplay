// composables/use-streaming-web-rtc.ts
export const useStreamingWebRTC = () => {
    const peerConnection = ref<RTCPeerConnection | null>(null);
    const remoteStream = ref<MediaStream | null>(null);
    const connectionState = ref<RTCPeerConnectionState>('new');
    const iceConnectionState = ref<RTCIceConnectionState>('new');
    const signalingState = ref<RTCSignalingState>('stable');
    const isConnected = ref(false);
    const connectionError = ref<string | null>(null);
    const stats = ref({
        bytesReceived: 0,
        packetsLost: 0,
        jitter: 0,
        roundTripTime: 0,
        frameRate: 0,
        resolution: { width: 0, height: 0 },
    });

    // WebRTC configuration
    const rtcConfig: RTCConfiguration = {
        iceServers: [
            { urls: 'stun:stun.l.google.com:19302' },
            { urls: 'stun:stun1.l.google.com:19302' },
            // Add TURN servers for production
            // {
            //   urls: 'turn:your-turn-server.com:3478',
            //   username: 'username',
            //   credential: 'password',
            // },
        ],
        iceCandidatePoolSize: 10,
    };

    /**
     * Initialize WebRTC peer connection
     */
    const initConnection = () => {
        try {
            peerConnection.value = new RTCPeerConnection(rtcConfig);

            // Connection state change
            peerConnection.value.onconnectionstatechange = () => {
                if (peerConnection.value) {
                    connectionState.value = peerConnection.value.connectionState;
                    console.log('Connection state:', connectionState.value);

                    if (connectionState.value === 'connected') {
                        isConnected.value = true;
                        connectionError.value = null;
                    } else if (
                        connectionState.value === 'failed' ||
                        connectionState.value === 'disconnected'
                    ) {
                        isConnected.value = false;
                        connectionError.value = 'Connection lost';
                    }
                }
            };

            // ICE connection state change
            peerConnection.value.oniceconnectionstatechange = () => {
                if (peerConnection.value) {
                    iceConnectionState.value = peerConnection.value.iceConnectionState;
                    console.log('ICE connection state:', iceConnectionState.value);
                }
            };

            // Signaling state change
            peerConnection.value.onsignalingstatechange = () => {
                if (peerConnection.value) {
                    signalingState.value = peerConnection.value.signalingState;
                    console.log('Signaling state:', signalingState.value);
                }
            };

            // Handle incoming stream
            peerConnection.value.ontrack = (event: RTCTrackEvent) => {
                console.log('Received remote track:', event.track.kind);
                if (!remoteStream.value) {
                    remoteStream.value = new MediaStream();
                }
                remoteStream.value.addTrack(event.track);
            };

            // Handle ICE candidates
            peerConnection.value.onicecandidate = (event: RTCPeerConnectionIceEvent) => {
                if (event.candidate) {
                    console.log('New ICE candidate:', event.candidate);
                    // Send candidate to signaling server
                    sendToSignalingServer({
                        type: 'ice-candidate',
                        candidate: event.candidate,
                    });
                }
            };

            return peerConnection.value;
        } catch (error) {
            console.error('Error initializing WebRTC:', error);
            connectionError.value = 'Failed to initialize connection';
            throw error;
        }
    };

    /**
     * Connect to video element
     */
    const connectToVideo = (videoElement: HTMLVideoElement) => {
        if (remoteStream.value) {
            videoElement.srcObject = remoteStream.value;
        }
    };

    /**
     * Create offer (viewer side)
     */
    const createOffer = async () => {
        if (!peerConnection.value) {
            throw new Error('Peer connection not initialized');
        }

        try {
            const offer = await peerConnection.value.createOffer({
                offerToReceiveVideo: true,
                offerToReceiveAudio: true,
            });

            await peerConnection.value.setLocalDescription(offer);

            // Send offer to signaling server
            sendToSignalingServer({
                type: 'offer',
                sdp: offer,
            });

            return offer;
        } catch (error) {
            console.error('Error creating offer:', error);
            connectionError.value = 'Failed to create offer';
            throw error;
        }
    };

    /**
     * Handle answer (viewer side)
     */
    const handleAnswer = async (answer: RTCSessionDescriptionInit) => {
        if (!peerConnection.value) {
            throw new Error('Peer connection not initialized');
        }

        try {
            await peerConnection.value.setRemoteDescription(
                new RTCSessionDescription(answer)
            );
        } catch (error) {
            console.error('Error handling answer:', error);
            connectionError.value = 'Failed to handle answer';
            throw error;
        }
    };

    /**
     * Add ICE candidate
     */
    const addIceCandidate = async (candidate: RTCIceCandidateInit) => {
        if (!peerConnection.value) {
            throw new Error('Peer connection not initialized');
        }

        try {
            await peerConnection.value.addIceCandidate(new RTCIceCandidate(candidate));
        } catch (error) {
            console.error('Error adding ICE candidate:', error);
        }
    };

    /**
     * Send to signaling server (implement based on your backend)
     */
    const sendToSignalingServer = async (message: any) => {
        // Implement WebSocket or HTTP signaling
        console.log('Sending to signaling server:', message);

        // Example WebSocket implementation:
        // if (signalingSocket.value) {
        //   signalingSocket.value.send(JSON.stringify(message));
        // }

        // Example HTTP implementation:
        // await $fetch('/api/signaling', {
        //   method: 'POST',
        //   body: message,
        // });
    };

    /**
     * Get connection statistics
     */
    const getConnectionStats = async () => {
        if (!peerConnection.value) return;

        try {
            const statsReport = await peerConnection.value.getStats();

            statsReport.forEach((report) => {
                if (report.type === 'inbound-rtp' && report.kind === 'video') {
                    stats.value.bytesReceived = report.bytesReceived || 0;
                    stats.value.packetsLost = report.packetsLost || 0;
                    stats.value.jitter = report.jitter || 0;
                    stats.value.frameRate = report.framesPerSecond || 0;
                }

                if (report.type === 'candidate-pair' && report.state === 'succeeded') {
                    stats.value.roundTripTime = report.currentRoundTripTime || 0;
                }

                if (report.type === 'track' && report.kind === 'video') {
                    stats.value.resolution = {
                        width: report.frameWidth || 0,
                        height: report.frameHeight || 0,
                    };
                }
            });

            return stats.value;
        } catch (error) {
            console.error('Error getting stats:', error);
        }
    };

    /**
     * Monitor connection quality
     */
    const startStatsMonitoring = (interval = 1000) => {
        const statsInterval = setInterval(async () => {
            await getConnectionStats();
        }, interval);

        onUnmounted(() => {
            clearInterval(statsInterval);
        });

        return statsInterval;
    };

    /**
     * Cleanup
     */
    const cleanup = () => {
        if (peerConnection.value) {
            peerConnection.value.close();
            peerConnection.value = null;
        }
        if (remoteStream.value) {
            remoteStream.value.getTracks().forEach((track) => track.stop());
            remoteStream.value = null;
        }
        isConnected.value = false;
        connectionError.value = null;
    };

    onUnmounted(() => {
        cleanup();
    });

    return {
        // State
        peerConnection,
        remoteStream,
        connectionState,
        iceConnectionState,
        signalingState,
        isConnected,
        connectionError,
        stats,

        // Methods
        initConnection,
        connectToVideo,
        createOffer,
        handleAnswer,
        addIceCandidate,
        getConnectionStats,
        startStatsMonitoring,
        cleanup,
    };
};