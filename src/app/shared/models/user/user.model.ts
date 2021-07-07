export interface IUser {
  id: number;
  name: string;
  countryCallingCode: string;
  phoneNumber: string;
  imageUrl: string;
  bio: string;
}

export class User implements IUser {
  private _id: number;
  private _name: string;
  private _countryCallingCode: string;
  private _phoneNumber: string;
  private _imageUrl: string;
  private _bio: string;

  public get id(): number {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get countryCallingCode(): string {
    return this._countryCallingCode;
  }

  public get phoneNumber(): string {
    return this._phoneNumber;
  }

  public get imageUrl(): string {
    return this._imageUrl;
  }

  public get bio(): string {
    return this._bio;
  }

  constructor({
    id,
    name,
    countryCallingCode,
    phoneNumber,
    imageUrl,
    bio,
  }: IUser) {
    this._id = id;
    this._name = name;
    this._countryCallingCode = countryCallingCode;
    this._phoneNumber = phoneNumber;
    this._imageUrl = imageUrl;
    this._bio = bio;
  }

  static fromJson(json: any): User {
    return new User({
      id: json.id,
      name: json.name,
      countryCallingCode: json.country_calling_code,
      phoneNumber: json.phone_number,
      imageUrl: json.image_url,
      bio: json.bio,
    });
  }

  static getOneFake(): User {
    return new User({
      id: 4,
      name: 'Touré Holder',
      countryCallingCode: '55',
      phoneNumber: '61981178515',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/givapp-938de.appspot.com/o/users%2F4%2Fphotos%2F1563636245092.jpg?alt=media&token=71023b7c-7a7f-4d6b-aa11-67e29d55d520',
      bio: 'Era meu, mas pode ser seu ;)',
    });
  }
}
