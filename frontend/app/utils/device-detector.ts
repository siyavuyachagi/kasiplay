// utils/device-detector.ts

/**
 * Device types that can be detected
 */
export type DeviceType = 'Mobile' | 'Tablet' | 'Desktop';

/**
 * Device detection configuration
 */
interface DeviceDetectorConfig {
  mobileMaxWidth: number;
  tabletMaxWidth: number;
}

/**
 * Default configuration for device detection breakpoints
 */
const DEFAULT_CONFIG: DeviceDetectorConfig = {
  mobileMaxWidth: 768,
  tabletMaxWidth: 1024,
};

/**
 * Regular expressions for detecting mobile devices via user agent
 */
const MOBILE_USER_AGENTS = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

/**
 * Regular expressions for detecting tablet devices via user agent
 */
const TABLET_USER_AGENTS = /iPad|Android(?=.*Tablet)|Tablet/i;

/**
 * Detects the current device type based on user agent and screen dimensions
 * @param config - Optional configuration for breakpoints
 * @returns The detected device type
 */
export function detectDevice(config: Partial<DeviceDetectorConfig> = {}): DeviceType {
  const finalConfig = { ...DEFAULT_CONFIG, ...config };
  
  // Check if we're in a browser environment
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return 'Desktop'; // Default for SSR/Node.js environments
  }

  const userAgent = navigator.userAgent;
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  // First check user agent for tablets (more specific than mobile check)
  if (TABLET_USER_AGENTS.test(userAgent)) {
    return 'Tablet';
  }

  // Then check for mobile devices
  if (MOBILE_USER_AGENTS.test(userAgent)) {
    return 'Mobile';
  }

  // Fallback to screen width detection
  if (screenWidth <= finalConfig.mobileMaxWidth) {
    return 'Mobile';
  }
  
  if (screenWidth <= finalConfig.tabletMaxWidth) {
    return 'Tablet';
  }

  return 'Desktop';
}

/**
 * Reactive device detector that updates when window is resized
 * @param config - Optional configuration for breakpoints
 * @param callback - Callback function called when device type changes
 * @returns Object with current device type and cleanup function
 */
export function createDeviceDetector(
  config: Partial<DeviceDetectorConfig> = {},
  callback?: (deviceType: DeviceType) => void
) {
  let currentDevice = detectDevice(config);
  
  const handleResize = () => {
    const newDevice = detectDevice(config);
    if (newDevice !== currentDevice) {
      currentDevice = newDevice;
      callback?.(newDevice);
    }
  };

  // Add resize listener if in browser environment
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', handleResize);
  }

  return {
    get deviceType(): DeviceType {
      return currentDevice;
    },
    cleanup: () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    }
  };
}

/**
 * Type guard functions for checking specific device types
 */
export const isMobile = (deviceType?: DeviceType): boolean => {
  return (deviceType || detectDevice()) === 'Mobile';
};

export const isTablet = (deviceType?: DeviceType): boolean => {
  return (deviceType || detectDevice()) === 'Tablet';
};

export const isDesktop = (deviceType?: DeviceType): boolean => {
  return (deviceType || detectDevice()) === 'Desktop';
};

/**
 * Helper function to check if device is mobile or tablet (touch devices)
 */
export const isTouchDevice = (deviceType?: DeviceType): boolean => {
  const device = deviceType || detectDevice();
  return device === 'Mobile' || device === 'Tablet';
};

/**
 * Get device-specific CSS classes
 * @param deviceType - Optional device type, will detect if not provided
 * @returns Object with boolean flags for each device type
 */
export function getDeviceClasses(deviceType?: DeviceType) {
  const device = deviceType || detectDevice();
  
  return {
    'is-mobile': device === 'Mobile',
    'is-tablet': device === 'Tablet',
    'is-desktop': device === 'Desktop',
    'is-touch': device === 'Mobile' || device === 'Tablet',
  };
}