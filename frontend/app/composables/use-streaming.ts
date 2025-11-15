// composables/use-streaming.ts
export const useStreaming = () => {
    const hlsInstance = ref<any>(null);
    const dashInstance = ref<any>(null);
    const streamType = ref<'hls' | 'dash' | 'native'>('native');
    const isStreamReady = ref(false);
    const streamError = ref<string | null>(null);
    const currentBitrate = ref(0);
    const availableQualities = ref<any[]>([]);

    /**
     * Initialize HLS streaming
     */
    const initHLS = async (videoElement: HTMLVideoElement, streamUrl: string) => {
        try {
            // Check if HLS.js is supported
            if (typeof window === 'undefined') return;

            // Dynamic import for HLS.js (you'd need to install: npm install hls.js)
            const Hls = (await import('hls.js')).default;

            if (Hls.isSupported()) {
                const hls = new Hls({
                    enableWorker: true,
                    lowLatencyMode: true,
                    backBufferLength: 90,
                    maxBufferLength: 30,
                    maxMaxBufferLength: 60,
                });

                hls.loadSource(streamUrl);
                hls.attachMedia(videoElement);

                hls.on(Hls.Events.MANIFEST_PARSED, (event: any, data: any) => {
                    console.log('HLS manifest loaded, found', data.levels.length, 'quality levels');
                    availableQualities.value = data.levels.map((level: any, index: number) => ({
                        index,
                        height: level.height,
                        bitrate: level.bitrate,
                        label: `${level.height}p`,
                    }));
                    isStreamReady.value = true;
                });

                hls.on(Hls.Events.LEVEL_SWITCHED, (event: any, data: any) => {
                    const level = hls.levels[data.level];
                    currentBitrate.value = level.bitrate;
                    console.log('Quality switched to:', level.height + 'p');
                });

                hls.on(Hls.Events.ERROR, (event: any, data: any) => {
                    if (data.fatal) {
                        switch (data.type) {
                            case Hls.ErrorTypes.NETWORK_ERROR:
                                console.error('Fatal network error encountered, trying to recover');
                                hls.startLoad();
                                break;
                            case Hls.ErrorTypes.MEDIA_ERROR:
                                console.error('Fatal media error encountered, trying to recover');
                                hls.recoverMediaError();
                                break;
                            default:
                                console.error('Fatal error, cannot recover');
                                streamError.value = 'Stream playback failed';
                                hls.destroy();
                                break;
                        }
                    }
                });

                hlsInstance.value = hls;
                streamType.value = 'hls';
                return hls;
            } else if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
                // Native HLS support (Safari)
                videoElement.src = streamUrl;
                streamType.value = 'native';
                isStreamReady.value = true;
            } else {
                throw new Error('HLS not supported');
            }
        } catch (error) {
            console.error('HLS initialization error:', error);
            streamError.value = 'Failed to initialize HLS streaming';
            throw error;
        }
    };

    /**
     * Initialize DASH streaming
     */
    const initDASH = async (videoElement: HTMLVideoElement, streamUrl: string) => {
        try {
            // Dynamic import for dash.js (you'd need to install: npm install dashjs)
            const dashjs = (await import('dashjs')).default;

            const player = dashjs.MediaPlayer().create();
            player.initialize(videoElement, streamUrl, false);

            player.on('streamInitialized', () => {
                console.log('DASH stream initialized');
                const bitrateInfoList = player.getBitrateInfoListFor('video');
                availableQualities.value = bitrateInfoList.map((info: any, index: number) => ({
                    index,
                    height: info.height,
                    bitrate: info.bitrate,
                    label: `${info.height}p`,
                }));
                isStreamReady.value = true;
            });

            player.on('error', (e: any) => {
                console.error('DASH error:', e);
                streamError.value = 'Stream playback error';
            });

            dashInstance.value = player;
            streamType.value = 'dash';
            return player;
        } catch (error) {
            console.error('DASH initialization error:', error);
            streamError.value = 'Failed to initialize DASH streaming';
            throw error;
        }
    };

    /**
     * Auto-detect and initialize appropriate streaming protocol
     */
    const initStream = async (videoElement: HTMLVideoElement, streamUrl: string) => {
        streamError.value = null;
        isStreamReady.value = false;

        try {
            // Detect stream type by URL extension
            if (streamUrl.includes('.m3u8')) {
                return await initHLS(videoElement, streamUrl);
            } else if (streamUrl.includes('.mpd')) {
                return await initDASH(videoElement, streamUrl);
            } else {
                // Try native playback
                videoElement.src = streamUrl;
                streamType.value = 'native';
                isStreamReady.value = true;
            }
        } catch (error) {
            console.error('Stream initialization failed:', error);
            streamError.value = 'Failed to initialize stream';
            throw error;
        }
    };

    /**
     * Change quality level
     */
    const setQuality = (qualityIndex: number) => {
        if (streamType.value === 'hls' && hlsInstance.value) {
            hlsInstance.value.currentLevel = qualityIndex;
        } else if (streamType.value === 'dash' && dashInstance.value) {
            dashInstance.value.setQualityFor('video', qualityIndex);
        }
    };

    /**
     * Enable/disable auto quality switching
     */
    const setAutoQuality = (enabled: boolean) => {
        if (streamType.value === 'hls' && hlsInstance.value) {
            hlsInstance.value.currentLevel = enabled ? -1 : hlsInstance.value.currentLevel;
        } else if (streamType.value === 'dash' && dashInstance.value) {
            const settings = {
                streaming: {
                    abr: {
                        autoSwitchBitrate: { video: enabled },
                    },
                },
            };
            dashInstance.value.updateSettings(settings);
        }
    };

    /**
     * Get current quality info
     */
    const getCurrentQuality = () => {
        if (streamType.value === 'hls' && hlsInstance.value) {
            const level = hlsInstance.value.levels[hlsInstance.value.currentLevel];
            return {
                height: level?.height,
                bitrate: level?.bitrate,
                label: level ? `${level.height}p` : 'Auto',
            };
        } else if (streamType.value === 'dash' && dashInstance.value) {
            const quality = dashInstance.value.getQualityFor('video');
            const info = dashInstance.value.getBitrateInfoListFor('video')[quality];
            return {
                height: info?.height,
                bitrate: info?.bitrate,
                label: info ? `${info.height}p` : 'Auto',
            };
        }
        return null;
    };

    /**
     * Get streaming stats
     */
    const getStats = () => {
        if (streamType.value === 'hls' && hlsInstance.value) {
            return {
                droppedFrames: hlsInstance.value.media?.getVideoPlaybackQuality?.()?.droppedVideoFrames || 0,
                bufferLength: hlsInstance.value.media?.buffered?.length || 0,
                currentBitrate: currentBitrate.value,
            };
        } else if (streamType.value === 'dash' && dashInstance.value) {
            return {
                droppedFrames: dashInstance.value.getVideoPlaybackQuality()?.droppedVideoFrames || 0,
                bufferLength: dashInstance.value.getBufferLength('video'),
                currentBitrate: currentBitrate.value,
            };
        }
        return null;
    };

    /**
     * Handle low latency for live streams
     */
    const enableLowLatency = () => {
        if (streamType.value === 'hls' && hlsInstance.value) {
            hlsInstance.value.config.lowLatencyMode = true;
            hlsInstance.value.config.maxBufferLength = 10;
        } else if (streamType.value === 'dash' && dashInstance.value) {
            const settings = {
                streaming: {
                    lowLatencyEnabled: true,
                    liveDelay: 3,
                },
            };
            dashInstance.value.updateSettings(settings);
        }
    };

    /**
     * Cleanup
     */
    const cleanup = () => {
        if (hlsInstance.value) {
            hlsInstance.value.destroy();
            hlsInstance.value = null;
        }
        if (dashInstance.value) {
            dashInstance.value.reset();
            dashInstance.value = null;
        }
        isStreamReady.value = false;
        streamError.value = null;
    };

    onUnmounted(() => {
        cleanup();
    });

    return {
        // State
        streamType,
        isStreamReady,
        streamError,
        currentBitrate,
        availableQualities,

        // Methods
        initStream,
        initHLS,
        initDASH,
        setQuality,
        setAutoQuality,
        getCurrentQuality,
        getStats,
        enableLowLatency,
        cleanup,
    };
};