import { Country, State, City } from '../location-part/location-part.model';
import getLocationDetailsJson from '@testing/fake-api-responses/locations/details/get.json';

export interface ILocation {
  country?: Country;
  state?: State;
  city?: City;
}

export class Location implements ILocation {
  private _country?: Country;
  private _state?: State;
  private _city?: City;

  constructor({ country, state, city }: ILocation) {
    this._country = country;
    this._state = state;
    this._city = city;
  }

  public get country(): Country | undefined {
    return this._country;
  }

  public get state(): State | undefined {
    return this._state;
  }

  public get city(): City | undefined {
    return this._city;
  }

  public get mediumName(): string | undefined {
    const array: (string | undefined)[] = [];

    if (this._city?.isComplete) array.push(this._city.name);
    if (this._state?.isComplete) array.push(this._state.name);
    if (this._country?.isComplete && array.length < 2)
      array.push(this._country.name);

    return array.join(', ');
  }

  /* Static methods */

  static fromJson(json: any): Location {
    const country = json.country
      ? new Country({ id: json.country.id, name: json.country.name })
      : undefined;
    const state = json.state
      ? new State({ id: json.state.id, name: json.state.name })
      : undefined;
    const city = json.city
      ? new City({ id: json.city.id, name: json.city.name })
      : undefined;

    return new Location({
      country,
      state,
      city,
    });
  }

  static example(): Location {
    const exampleJson = getLocationDetailsJson;
    return Location.fromJson(exampleJson);
  }
}
