export interface IListingImage {
  url: string;
  position: number;
}

export class ListingImage implements IListingImage {
  private _url: string;
  private _position: number;

  constructor({ url, position }: IListingImage) {
    this._url = url;
    this._position = position;
  }

  public get url(): string {
    return this._url;
  }

  public get position(): number {
    return this._position;
  }

  static fromJsonListToList(json: any[]): ListingImage[] {
    return json.map((obj) => ListingImage.fromJson(obj));
  }

  static fromJson(json: JsonData): ListingImage {
    return new ListingImage({ url: json.url, position: json.position });
  }

  static getFakeList(count?: number): ListingImage[] {
    count = count || 1;
    const list: ListingImage[] = [];

    for (let index = 0; index < count; index++) {
      list.push(
        new ListingImage({
          url: `https://picsum.photos/20${index}`,
          position: index,
        })
      );
    }

    return list;
  }
}

interface JsonData {
  url: string;
  position: number;
}
