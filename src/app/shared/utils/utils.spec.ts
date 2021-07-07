import { isAbsoultePath } from './utils';

describe('Utils', () => {
  describe('#isAbsoultePath', () => {
    it('should return true for absolute paths', () => {
      expect(isAbsoultePath('https://example.com/relative/path')).toBe(true);
    });

    it('should return false for relative paths', () => {
      expect(isAbsoultePath('/relative/path')).toBe(false);
    });
  });
});
