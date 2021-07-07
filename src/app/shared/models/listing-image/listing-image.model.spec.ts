import { ListingImage, IListingImage } from './listing-image.model';
import getCategoriesJson from '@testing/fake-api-responses/home/categories/featured/get.json';

describe('ListingImage model', () => {
  const fakekApiResponse = getCategoriesJson;

  it('should be able to deserialize a json object', () => {
    const json = fakekApiResponse[0].listings[0].listing_images[0];

    const expectedObject: IListingImage = {
      url: json.url,
      position: json.position,
    };

    expect(ListingImage.fromJson(json)).toEqual(
      jasmine.objectContaining(expectedObject)
    );
  });

  it('should be able to deserialize a list of json objects', () => {
    // Arrange / Given
    const json = [
      {
        id: 1509,
        url: 'https://firebasestorage.googleapis.com/v0/b/givapp-938de.appspot.com/o/listings%2F1553453812765-965a93e0-3260-11e9-82d7-a107cbf683db.jpg?alt=media&token=7a65012f-27d0-48c2-9e40-66f4c20001e0',
        position: 1,
      },
      {
        id: 1508,
        url: 'https://firebasestorage.googleapis.com/v0/b/givapp-938de.appspot.com/o/listings%2F1553453812763-965a45c0-3260-11e9-894b-9fb5fdfea21c.jpg?alt=media&token=58f131c4-c04a-4928-a046-e8587443da42',
        position: 0,
      },
    ];

    // Act / When
    const listingImages = ListingImage.fromJsonListToList(json);

    // Assert / Then
    expect(listingImages).toEqual(
      jasmine.arrayContaining([
        jasmine.objectContaining({
          url: 'https://firebasestorage.googleapis.com/v0/b/givapp-938de.appspot.com/o/listings%2F1553453812765-965a93e0-3260-11e9-82d7-a107cbf683db.jpg?alt=media&token=7a65012f-27d0-48c2-9e40-66f4c20001e0',
          position: 1,
        }),
        jasmine.objectContaining({
          url: 'https://firebasestorage.googleapis.com/v0/b/givapp-938de.appspot.com/o/listings%2F1553453812763-965a45c0-3260-11e9-894b-9fb5fdfea21c.jpg?alt=media&token=58f131c4-c04a-4928-a046-e8587443da42',
          position: 0,
        }),
      ])
    );
  });

  it('shoukd be able to generate a fake list with n items', () => {
    // Arrange / Given
    const numberOfItems = 10;

    // Act / When
    const items: ListingImage[] = ListingImage.getFakeList(numberOfItems);

    // Assert / Then
    expect(items.length).toBe(numberOfItems);
  });
});
