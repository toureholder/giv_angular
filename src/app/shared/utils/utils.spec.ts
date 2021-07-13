import { isAbsoulteUri, isFalsyOrEmpty, pickDefined } from './utils';

describe('Utils', () => {
  describe('#isAbsoulteUri', () => {
    it('should return true for absolute paths', () => {
      expect(isAbsoulteUri('https://example.com/relative/path')).toBe(true);
    });

    it('should return false for relative paths', () => {
      expect(isAbsoulteUri('/relative/path')).toBe(false);
    });
  });

  describe('#isFalsyOrEmpty', () => {
    it('should return true for undefined', () => {
      let s: string | undefined | null;
      expect(isFalsyOrEmpty(s)).toBe(true);
    });

    it('should return true for null', () => {
      let s: string | undefined | null = null;
      expect(isFalsyOrEmpty(s)).toBe(true);
    });

    it('should return true for empty string', () => {
      let s: string | undefined | null = '';
      expect(isFalsyOrEmpty(s)).toBe(true);
    });

    it('should return true for string with empty spaces', () => {
      let s: string | undefined | null = '   ';
      expect(isFalsyOrEmpty(s)).toBe(true);
    });

    it('should return false for non-empty string', () => {
      let s: string | undefined | null = 'I am not empty';
      expect(isFalsyOrEmpty(s)).toBe(false);
    });
  });

  describe('#pickDefined', () => {
    it('should remove fields with undefined and null values', () => {
      const original = {
        foo: 'string',
        bar: 0,
        baz: false,
        qux: undefined,
        quz: null,
      };

      expect(pickDefined(original)).toEqual({
        foo: 'string',
        bar: 0,
        baz: false,
      });
    });
  });
});
