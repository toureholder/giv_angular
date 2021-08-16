import { LocationFilter } from './location-filter.model';

describe('LocationFilter', () => {
  describe('#serialize', () => {
    it('should serialize itself', () => {
      // Given
      const filter: LocationFilter = new LocationFilter({
        cityId: '123',
        stateId: '234',
        countryId: '345',
        isHardFilter: true,
      });

      // When
      const output = filter.serialize();

      // Then
      expect(output).toEqual({
        city_id: '123',
        state_id: '234',
        country_id: '345',
        is_hard_filter: true,
      });
    });

    it('should not include undefined properties', () => {
      // Given
      const filter: LocationFilter = new LocationFilter({
        cityId: undefined,
        stateId: '234',
        countryId: '345',
        isHardFilter: false,
      });

      // When
      const output = filter.serialize();

      // Then
      expect(output).toEqual({
        state_id: '234',
        country_id: '345',
        is_hard_filter: false,
      });
    });
  });

  it('should have a static method to generate a fake instance', () => {
    const fake = LocationFilter.fake();
    expect(fake).toBeInstanceOf(LocationFilter);
    expect(fake.isHardFilter).toBeTrue();
  });
});
