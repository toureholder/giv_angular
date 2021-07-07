export interface IGroup {
  id: number;
  name: string;
  description?: string;
  imageUrl?: string;
}

export class Group implements IGroup {
  private _id: number;
  private _name: string;
  private _description?: string;
  private _imageUrl?: string;

  public get id(): number {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get description(): string | undefined {
    return this._description;
  }

  public get imageUrl(): string | undefined {
    return this._imageUrl;
  }

  constructor({ id, name, description, imageUrl }: IGroup) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._imageUrl = imageUrl;
  }

  static fromJson(json: any): Group {
    return new Group({
      id: json.id,
      name: json.name,
      description: json.description || undefined,
      imageUrl: json.image_url || undefined,
    });
  }

  static fromJsonListToList(json: any[]): Group[] {
    return json.map((obj) => Group.fromJson(obj));
  }
}
