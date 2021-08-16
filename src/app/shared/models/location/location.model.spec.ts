import getLocationDetailsJson from '@testing/fake-api-responses/locations/details/get.json';
import { City, Country, State } from '../location-part/location-part.model';
import { Location } from './location.model';

describe('Location model', () => {
  describe('#fromJson', () => {
    it('should deserialize a json object', () => {
      // Arrange / Given
      const json = getLocationDetailsJson;

      // Act / When
      const deserialized = Location.fromJson(json);

      // Assert / Then
      expect(deserialized.country).toEqual(
        jasmine.objectContaining({
          id: json.country.id,
          name: json.country.name,
        })
      );

      expect(deserialized.state).toEqual(
        jasmine.objectContaining({
          id: json.state.id,
          name: json.state.name,
        })
      );

      expect(deserialized.city).toEqual(
        jasmine.objectContaining({
          id: json.city.id,
          name: json.city.name,
        })
      );
    });

    it('should be able to deserialize json objects with null location parts', () => {
      // Arrange / Given
      const json = {
        country: null,
        state: null,
        city: null,
      };

      // Act / When
      const deserialized = Location.fromJson(json);

      // Assert / Then
      expect(deserialized.country).toBeUndefined();
      expect(deserialized.state).toBeUndefined();
      expect(deserialized.city).toBeUndefined();
    });
  });

  it('should have a static method to generate a an example listing', () => {
    // Act / When
    expect(Location.example()).toBeInstanceOf(Location);
  });

  describe('#get medium name', () => {
    const cityName = 'Brasília';
    const stateName = 'DF';
    const countryName = 'Brasil';
    const city = new City({ id: '123', name: cityName });
    const state = new State({ id: '123', name: stateName });
    const country = new Country({ id: '123', name: countryName });

    it('should return city and state name when all location parts are defined', () => {
      // Given
      const location = new Location({ city, state, country });

      // Then
      expect(location.mediumName).toEqual(`${cityName}, ${stateName}`);
    });

    it('should return city and state name when only city and state are defined', () => {
      // Given
      const location = new Location({ city, state });

      // Then
      expect(location.mediumName).toEqual(`${cityName}, ${stateName}`);
    });

    it('should return state and country name when only state and country are defined', () => {
      // Given
      const location = new Location({ state, country });

      // Then
      expect(location.mediumName).toEqual(`${stateName}, ${countryName}`);
    });

    it('should return country name when only country is defined', () => {
      // Given
      const location = new Location({ country });

      // Then
      expect(location.mediumName).toEqual(`${countryName}`);
    });

    it('should return an empty string when no location parts are defined', () => {
      // Given
      const location = new Location({});

      // Then
      expect(location.mediumName).toEqual('');
    });
  });
});
