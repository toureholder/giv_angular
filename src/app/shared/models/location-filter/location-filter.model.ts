import { pickDefined } from '@shared/utils/utils';

export interface ILocationFilter {
  cityId?: string;
  stateId?: string;
  countryId?: string;
  isHardFilter?: boolean;
}

export class LocationFilter {
  private _cityId?: string;
  private _stateId?: string;
  private _countryId?: string;
  private _isHardFilter: boolean;

  constructor({ cityId, stateId, countryId, isHardFilter }: ILocationFilter) {
    this._cityId = cityId;
    this._stateId = stateId;
    this._countryId = countryId;
    this._isHardFilter = isHardFilter || false;
  }

  public get cityId(): string | undefined {
    return this._cityId;
  }
  public get stateId(): string | undefined {
    return this._stateId;
  }
  public get countryId(): string | undefined {
    return this._countryId;
  }
  public get isHardFilter(): boolean | undefined {
    return this._isHardFilter;
  }

  serialize(): { [key: string]: any } {
    return pickDefined({
      city_id: this._cityId,
      state_id: this._stateId,
      country_id: this._countryId,
      is_hard_filter: this._isHardFilter,
    });
  }

  static fake(): LocationFilter {
    return new LocationFilter({
      cityId: 'string',
      stateId: 'string',
      countryId: 'string',
      isHardFilter: true,
    });
  }
}
