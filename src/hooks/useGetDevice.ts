import {useEffect, useState} from 'react';
import {BREAK_POINT, DeviceType, DEVICE_TYPE} from '../constants/platform';

export function useGetDevice() {
  const [currentDevice, setCurrentDevice] = useState<DeviceType>(DEVICE_TYPE.mobile);

  useEffect(() => {
    window.addEventListener('load', detectWindowSize);
    window.addEventListener('resize', detectWindowSize);

    function detectWindowSize() {
      const innerWidth = document.querySelector('html')!.offsetWidth;

      if (innerWidth < BREAK_POINT.MOBILE) return setCurrentDevice(DEVICE_TYPE.mobile);

      if (innerWidth < BREAK_POINT.TABLET) return setCurrentDevice(DEVICE_TYPE.tablet);

      if (innerWidth < BREAK_POINT.LAPTOP) return setCurrentDevice(DEVICE_TYPE.laptop);

      if (innerWidth < BREAK_POINT.DESKTOP) return setCurrentDevice(DEVICE_TYPE.desktop);

      return setCurrentDevice(DEVICE_TYPE.desktop);
    }

    detectWindowSize();

    return () => {
      window.removeEventListener('resize', detectWindowSize);
    };
  }, []);

  return currentDevice;
}
