export const throttle = (callback: () => void, timer: number) => {
  let waiting = true;

  return () => {
    if (waiting) {
      callback();
      waiting = false;
      setTimeout(() => {
        waiting = true;
      }, timer);
    }
  };
};
