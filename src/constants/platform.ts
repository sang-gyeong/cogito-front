export enum DeviceType {
  mobile = 'MOBILE',
  tablet = 'TABLET',
  laptop = 'LAPTOP',
  desktop = 'DESKTOP',
}

export const BREAK_POINT = {
  MOBILE: 576,
  TABLET: 768,
  LAPTOP: 992,
  DESKTOP: 1200,
} as const;

export const DEVICE_TYPE = {
  mobile: DeviceType.mobile,
  tablet: DeviceType.tablet,
  laptop: DeviceType.laptop,
  desktop: DeviceType.desktop,
} as const;
