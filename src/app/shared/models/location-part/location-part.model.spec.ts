import getLocationDetailsJson from '@testing/fake-api-responses/locations/details/get.json';
import { LocationPart } from './location-part.model';

describe('LocationPart model', () => {
  it('should have a static method to deserialize a json object', () => {
    // Arrange / Given
    const json = getLocationDetailsJson.country;

    // Act / When
    const deserialized = LocationPart.fromJson(json);

    // Assert / Then
    expect(deserialized).toEqual(
      jasmine.objectContaining({
        id: json.id,
        name: json.name,
      })
    );
  });

  describe('#isComplete', () => {
    it('should return true when location part has id and name', () => {
      const locationPart = new LocationPart({ id: '123', name: 'Somewhere' });
      expect(locationPart.isComplete).toBe(true);
    });

    it('should return false when location part has id and no name', () => {
      const locationPart = new LocationPart({ id: '123' });
      expect(locationPart.isComplete).toBe(false);
    });

    it('should return false when location part has name and no id', () => {
      const locationPart = new LocationPart({ name: 'Somewhere' });
      expect(locationPart.isComplete).toBe(false);
    });

    it('should return false when location part is empty', () => {
      const locationPart = new LocationPart({});
      expect(locationPart.isComplete).toBe(false);
    });
  });
});
