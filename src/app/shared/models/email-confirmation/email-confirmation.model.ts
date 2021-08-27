import { User } from '../user/user.model';
import emailConfirmationsJson from '@testing/fake-api-responses/email-confirmations/post.json';
export interface IEmailConfirmation {
  message: string;
  user: User;
}
export class EmailConfirmation implements IEmailConfirmation {
  private _message: string;
  private _user: User;

  constructor({ message, user }: IEmailConfirmation) {
    this._message = message;
    this._user = user;
  }

  public get message(): string {
    return this._message;
  }

  public get user(): User {
    return this._user;
  }

  static fromJson(json: any): EmailConfirmation {
    return new EmailConfirmation({
      message: json.message,
      user: User.fromJson(json.user),
    });
  }

  static example(): EmailConfirmation {
    const json = emailConfirmationsJson;
    return EmailConfirmation.fromJson(json);
  }
}
