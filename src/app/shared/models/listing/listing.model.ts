import { ImageData } from '@shared/components/image-div/image-div.component';
import getCategoriesJson from '@testing/fake-api-responses/home/categories/featured/get.json';
import { ListingImage } from '../listing-image/listing-image.model';
import { User } from '../user/user.model';

export interface IListing {
  id: number;
  title: string;
  description: string;
  countryId?: string;
  stateId?: string;
  cityId?: string;
  listingImages: ListingImage[];
  user: User;
  isMailable?: boolean;
}

export class Listing implements IListing {
  private _id: number;
  private _title: string;
  private _description: string;
  private _countryId?: string;
  private _stateId?: string;
  private _cityId?: string;
  private _listingImages: ListingImage[];
  private _user: User;
  private _isMailable?: boolean;

  constructor({
    id,
    title,
    description,
    countryId,
    stateId,
    cityId,
    listingImages,
    user,
    isMailable,
  }: IListing) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._countryId = countryId;
    this._stateId = stateId;
    this._cityId = cityId;
    this._listingImages = this.sortByPostion(listingImages);
    this._user = user;
    this._isMailable = isMailable || false;
  }

  public get id(): number {
    return this._id;
  }

  public get title(): string {
    return this._title;
  }

  public get description(): string {
    return this._description;
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

  public get listingImages(): ListingImage[] {
    return this._listingImages;
  }

  public get user(): User {
    return this._user;
  }

  public get isMailable(): boolean | undefined {
    return this._isMailable;
  }

  get featuredImage(): ListingImage | undefined {
    return this.listingImages.length === 0
      ? undefined
      : this.sortByPostion(this.listingImages)[0];
  }

  public toImageData(): ImageData {
    return {
      imageUrl: this.featuredImage?.url,
      imageAlt: this.title,
      link: '/listing/' + this.id,
    };
  }

  static fromJsonListtoList(json: any[]): Listing[] {
    return json.map((obj) => Listing.fromJson(obj));
  }

  static fromJson(json: any) {
    const listingImages = ListingImage.fromJsonListToList(json.listing_images);
    const user = User.fromJson(json.user);
    const countryId = json.geonames_country_id || undefined;
    const stateId = json.geonames_state_id || undefined;
    const cityId = json.geonames_city_id || undefined;

    return new Listing({
      id: json.id,
      title: json.title,
      description: json.description,
      countryId,
      stateId,
      cityId,
      listingImages,
      user,
      isMailable: json.is_mailable,
    });
  }

  static example(options?: { isMailable: boolean }): Listing {
    const exampleJson = getCategoriesJson[0].listings[0];
    const copy = JSON.parse(JSON.stringify(exampleJson));
    copy['is_mailable'] = options?.isMailable;
    return Listing.fromJson(copy);
  }

  static exampleList(): Listing[] {
    const exampleJson = getCategoriesJson[0].listings;
    const copy = JSON.parse(JSON.stringify(exampleJson));
    return Listing.fromJsonListtoList(copy);
  }

  static getOneFake({
    id,
    title,
    description,
    countryId,
    stateId,
    cityId,
    listingImages,
    user,
  }: {
    id?: number;
    title?: string;
    description?: string;
    countryId?: string | undefined;
    stateId?: string | undefined;
    cityId?: string | undefined;
    listingImages?: ListingImage[];
    user?: User;
  }): Listing {
    return new Listing({
      id: id || 1,
      title: title || 'Fake Listing',
      description:
        description ||
        'Lorem ipsum dolor sit amet consectetur adispiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      cityId: cityId || '6324222',
      stateId: stateId || '3463504',
      countryId: countryId || '3469034',
      listingImages: listingImages || ListingImage.getFakeList(),
      user: user || User.getOneFake(),
    });
  }

  static getFakeList(count?: number): Listing[] {
    count = count || 1;
    const list: Listing[] = [];

    for (let index = 0; index < count; index++) {
      list.push(Listing.getOneFake({}));
    }

    return list;
  }

  static listToImageDataList(listings?: Listing[]): ImageData[] {
    return listings?.map((listing: Listing) => listing.toImageData()) || [];
  }

  private sortByPostion(images: ListingImage[]): ListingImage[] {
    return images.sort((a, b) => a.position - b.position);
  }
}
