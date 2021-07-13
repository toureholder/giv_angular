export const isAbsoulteUri = (path: string): boolean => {
  var pattern = new RegExp('^(?:[a-z]+:)?//', 'i');
  return pattern.test(path);
};

export const isFalsyOrEmpty = (s: string | undefined | null): boolean => {
  return !s || s?.trim() == '';
};

export const pickDefined = (obj: any): any => {
  Object.keys(obj).forEach(
    (key) => (obj[key] === undefined || obj[key] === null) && delete obj[key]
  );
  return obj;
};
