import { Group, IGroup } from './group.model';
import getCategoriesJson from '@testing/fake-api-responses/home/categories/featured/get.json';

describe('Group model', () => {
  const fakekApiResponse = getCategoriesJson;

  it('should have a static method to deserialize json object', () => {
    // Given
    const json = fakekApiResponse[0].listings[0].groups[0];

    const expectedObject: IGroup = {
      id: 1,
      name: 'SQS 106, Asa Sul BLOCO H',
      description: undefined,
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/givapp-938de.appspot.com/o/groups%2F1%2Fphotos%2F1601458454252-1a63e610-0300-11eb-ad5b-d939d7f5f7cf.jpg?alt=media&token=977e8d35-d157-485d-bc9d-8f5e24d8670c',
    };

    // When
    const deserialized = Group.fromJson(json);

    // Then
    expect(deserialized).toEqual(jasmine.objectContaining(expectedObject));
  });

  it('should be able to deserialize a list of json objects', () => {
    // Given
    const json = fakekApiResponse[0].listings[0].groups;

    // When
    const groups = Group.fromJsonListToList(json);

    // Then
    expect(groups).toEqual(
      jasmine.arrayContaining([
        jasmine.objectContaining<Group>({
          id: 1,
          name: 'SQS 106, Asa Sul BLOCO H',
          description: undefined,
          imageUrl:
            'https://firebasestorage.googleapis.com/v0/b/givapp-938de.appspot.com/o/groups%2F1%2Fphotos%2F1601458454252-1a63e610-0300-11eb-ad5b-d939d7f5f7cf.jpg?alt=media&token=977e8d35-d157-485d-bc9d-8f5e24d8670c',
        }),
        jasmine.objectContaining<Group>({
          id: 2,
          name: 'Wiz Everywhere',
          description: undefined,
          imageUrl: undefined,
        }),
      ])
    );
  });
});
