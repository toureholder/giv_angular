export function isAbsoultePath(path: string): boolean {
  var pattern = new RegExp('^(?:[a-z]+:)?//', 'i');
  return pattern.test(path);
}
