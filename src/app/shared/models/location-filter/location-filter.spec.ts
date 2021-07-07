import { LocationFilter } from './location-filter.model';

describe('LocationFilter', () => {
  it('should have an instance method to serialize itself', () => {
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

  it('should have a static method to generate a fake instance', () => {
    expect(LocationFilter.fake()).toBeInstanceOf(LocationFilter);
  });
});
