// composables/useMediaPlayer.ts
export const useMediaPlayer = () => {
    const playerRef = ref<HTMLVideoElement | null>(null);
    const isPlaying = ref(false);
    const isPaused = ref(true);
    const isLoading = ref(false);
    const isMuted = ref(false);
    const isFullscreen = ref(false);
    const currentTime = ref(0);
    const duration = ref(0);
    const volume = ref(1);
    const playbackRate = ref(1);
    const quality = ref('auto');
    const hasError = ref(false);
    const errorMessage = ref('');

    // Available qualities
    const qualities = ['auto', '1080p', '720p', '480p', '360p'];
    const playbackRates = [0.5, 0.75, 1, 1.25, 1.5, 2];

    // Initialize player
    const initPlayer = (videoElement: HTMLVideoElement) => {
        playerRef.value = videoElement;

        // Event listeners
        videoElement.addEventListener('play', () => {
            isPlaying.value = true;
            isPaused.value = false;
        });

        videoElement.addEventListener('pause', () => {
            isPlaying.value = false;
            isPaused.value = true;
        });

        videoElement.addEventListener('timeupdate', () => {
            currentTime.value = videoElement.currentTime;
        });

        videoElement.addEventListener('durationchange', () => {
            duration.value = videoElement.duration;
        });

        videoElement.addEventListener('volumechange', () => {
            volume.value = videoElement.volume;
            isMuted.value = videoElement.muted;
        });

        videoElement.addEventListener('waiting', () => {
            isLoading.value = true;
        });

        videoElement.addEventListener('canplay', () => {
            isLoading.value = false;
        });

        videoElement.addEventListener('error', (e) => {
            hasError.value = true;
            errorMessage.value = 'Failed to load video stream';
            console.error('Video error:', e);
        });

        // Fullscreen change events
        document.addEventListener('fullscreenchange', () => {
            isFullscreen.value = !!document.fullscreenElement;
        });
    };

    // Play/Pause toggle
    const togglePlay = async () => {
        if (!playerRef.value) return;

        try {
            if (isPlaying.value) {
                await playerRef.value.pause();
            } else {
                await playerRef.value.play();
            }
        } catch (error) {
            console.error('Playback error:', error);
        }
    };

    // Seek to time
    const seek = (time: number) => {
        if (!playerRef.value) return;
        playerRef.value.currentTime = time;
    };

    // Skip forward/backward
    const skip = (seconds: number) => {
        if (!playerRef.value) return;
        playerRef.value.currentTime += seconds;
    };

    // Volume control
    const setVolume = (value: number) => {
        if (!playerRef.value) return;
        playerRef.value.volume = Math.max(0, Math.min(1, value));
    };

    // Mute toggle
    const toggleMute = () => {
        if (!playerRef.value) return;
        playerRef.value.muted = !playerRef.value.muted;
    };

    // Playback rate
    const setPlaybackRate = (rate: number) => {
        if (!playerRef.value) return;
        playerRef.value.playbackRate = rate;
        playbackRate.value = rate;
    };

    // Quality change
    const setQuality = (newQuality: string) => {
        quality.value = newQuality;
        // In production, this would switch to a different stream URL
        console.log('Quality changed to:', newQuality);
    };

    // Fullscreen toggle
    const toggleFullscreen = async () => {
        if (!playerRef.value) return;

        try {
            if (!document.fullscreenElement) {
                await playerRef.value.requestFullscreen();
            } else {
                await document.exitFullscreen();
            }
        } catch (error) {
            console.error('Fullscreen error:', error);
        }
    };

    // Picture-in-Picture
    const togglePiP = async () => {
        if (!playerRef.value) return;

        try {
            if (document.pictureInPictureElement) {
                await document.exitPictureInPicture();
            } else {
                await playerRef.value.requestPictureInPicture();
            }
        } catch (error) {
            console.error('PiP error:', error);
        }
    };

    // Format time (seconds to MM:SS)
    const formatTime = (seconds: number) => {
        if (!seconds || isNaN(seconds)) return '00:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    // Cleanup
    const cleanup = () => {
        if (playerRef.value) {
            playerRef.value.pause();
            playerRef.value.src = '';
            playerRef.value = null;
        }
    };

    onUnmounted(() => {
        cleanup();
    });

    return {
        // Refs
        playerRef,
        isPlaying,
        isPaused,
        isLoading,
        isMuted,
        isFullscreen,
        currentTime,
        duration,
        volume,
        playbackRate,
        quality,
        hasError,
        errorMessage,
        qualities,
        playbackRates,

        // Methods
        initPlayer,
        togglePlay,
        seek,
        skip,
        setVolume,
        toggleMute,
        setPlaybackRate,
        setQuality,
        toggleFullscreen,
        togglePiP,
        formatTime,
        cleanup,
    };
};