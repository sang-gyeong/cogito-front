export const dateFormatter = (_date: string): string => {
  const regex = /^(\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)$/;
  const result = _date.replace(regex, '$1-$2-$3 $4:$5:$6');
  // const date = new Date(result);

  return result;
};
