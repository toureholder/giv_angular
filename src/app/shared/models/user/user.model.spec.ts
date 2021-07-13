import userJson from '@testing/fake-api-responses/me/get.json';
import { User } from './user.model';

describe('User model', () => {
  it('should have a static method to deserialize json object', () => {
    // Arrange / Given
    const json = userJson;

    // Act / When
    const user = User.fromJson(json);

    // Assert / Then
    expect(user.name).toEqual(json.name);
    expect(user.countryCallingCode).toEqual(json.country_calling_code);
    expect(user.phoneNumber).toEqual(json.phone_number);
    expect(user.imageUrl).toEqual(json.image_url);
    expect(user.bio).toEqual(json.bio);
    expect(user.createdAt).toEqual(new Date(json.created_at));
  });

  it('should have a static method to generate a fake instance', () => {
    expect(User.getOneFake()).toBeInstanceOf(User);
  });

  it('should have a static method to generate a an example', () => {
    // Act / When
    expect(User.example()).toBeInstanceOf(User);
  });
});
