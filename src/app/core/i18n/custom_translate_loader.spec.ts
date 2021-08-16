import { CustomTranslateLoader } from './custom_translate_loader';

describe('CustomTranslateLoader', () => {
  describe('#getTranslation', () => {
    it('should return translation', () => {
      // Given
      const service = new CustomTranslateLoader();

      // When
      service.getTranslation('en').subscribe((val) => {
        // Then
        expect(val).toEqual(
          jasmine.objectContaining({
            common_description: 'Description',
          })
        );
      });
    });
  });
});
