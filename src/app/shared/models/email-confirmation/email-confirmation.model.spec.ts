import json from '@testing/fake-api-responses/email-confirmations/post.json';
import { User } from '../user/user.model';
import { EmailConfirmation } from './email-confirmation.model';

describe('EmailConfirmation', () => {
  describe('#fromJson', () => {
    it('should create instance from json', () => {
      expect(EmailConfirmation.fromJson(json)).toEqual(
        jasmine.objectContaining({
          message: json.message,
          user: User.fromJson(json.user),
        })
      );
    });
  });

  describe('#example', () => {
    it('should return an EmailConfirmation instance ', () => {
      expect(EmailConfirmation.example()).toBeInstanceOf(EmailConfirmation);
    });
  });
});
