export const getLocalStorageItem = (key: string, defaultValue: string) => {
  const localStorage = globalThis?.localStorage;

  if (!localStorage) {
    return defaultValue;
  }

  return localStorage.getItem(key) ?? defaultValue;
};

export const setLocalStorageItem = (key: string, value: string) => {
  const localStorage = globalThis?.localStorage;

  if (!localStorage) {
    return;
  }

  return localStorage.setItem(key, value);
};

export const getSessionStorageItem = (key: string) => {
  const sessionStorage = globalThis?.sessionStorage;

  if (!sessionStorage) {
    return undefined;
  }

  return sessionStorage.getItem(key);
};

export const setSessionStorageItem = (key: string, value: string) => {
  const sessionStorage = globalThis?.sessionStorage;

  if (!sessionStorage) {
    return;
  }

  return sessionStorage.setItem(key, value);
};
