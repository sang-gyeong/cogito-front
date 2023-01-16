export const getCookie = function (cookie: string, name: string): string | null {
  if (!cookie) {
    return null;
  }
  const value = cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');

  return value ? value[2] : null;
};
