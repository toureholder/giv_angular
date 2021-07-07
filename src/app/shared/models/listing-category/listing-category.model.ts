import { Listing } from '../listing/listing.model';

export interface IListingCategory {
  id: number;
  simpleName: string;
  listings: Listing[];
}

export class ListingCategory implements IListingCategory {
  private _id: number;
  private _simpleName: string;
  private _listings: Listing[];

  constructor({ id, simpleName, listings }: IListingCategory) {
    this._id = id;
    this._simpleName = simpleName;
    this._listings = listings;
  }

  public get id(): number {
    return this._id;
  }

  public get simpleName(): string {
    return this._simpleName;
  }

  public get listings(): Listing[] {
    return this._listings;
  }

  static fromJson(json: any): ListingCategory {
    const listings = Listing.fromJsonListtoList(json.listings);
    return new ListingCategory({
      id: json.id,
      simpleName: json.simple_name,
      listings,
    });
  }

  static fromJsonListToList(json: any[]) {
    return json.map((obj) => ListingCategory.fromJson(obj));
  }

  static getOneFake({
    numberOfListings,
  }: {
    numberOfListings: number;
  }): ListingCategory {
    const listings = Listing.getFakeList(numberOfListings);

    return new ListingCategory({
      id: 1,
      simpleName: 'Fake Category',
      listings,
    });
  }
}
