import getFeaturedCategoriesJson from '@testing/fake-api-responses/home/categories/featured/get.json';
import { ListingImage } from '../listing-image/listing-image.model';
import { Listing } from './listing.model';

describe('Listing model', () => {
  it('featuredImage should be image with lowest position', () => {
    // Arrange / Given
    const model = Listing.getOneFake({});

    // Act / When
    const featuredImage = model.featuredImage;

    // Assert / Then
    expect(featuredImage?.position).toBe(0);
  });

  it('should order its images by position when constructed', () => {
    // Arrange / Given
    const unorderedImages = [
      new ListingImage({ url: 'https://picsum.photos/300', position: 3 }),
      new ListingImage({ url: 'https://picsum.photos/100', position: 1 }),
      new ListingImage({ url: 'https://picsum.photos/200', position: 2 }),
      new ListingImage({ url: 'https://picsum.photos/101', position: 0 }),
    ];

    // Act / When
    const newListing = Listing.getOneFake({ listingImages: unorderedImages });

    // Assert / Then
    expect(newListing.listingImages[0].position).toEqual(0);
    expect(newListing.listingImages[1].position).toEqual(1);
    expect(newListing.listingImages[2].position).toEqual(2);
    expect(newListing.listingImages[3].position).toEqual(3);
  });

  it('should have a static method to deserialize a json object', () => {
    // Arrange / Given
    const json = getFeaturedCategoriesJson[0].listings[0];
    const firstListingImageJson = json.listing_images[0];

    // Act / When
    const deserialized = Listing.fromJson(json);

    // Assert / Then
    expect(deserialized).toEqual(
      jasmine.objectContaining({
        id: json.id,
        title: json.title,
        description: json.description,
        listingImages: jasmine.arrayContaining([
          jasmine.objectContaining({
            url: firstListingImageJson.url,
            position: firstListingImageJson.position,
          }),
        ]),
      })
    );
  });

  it('should have a static method to deserialize a list of json objects', () => {
    // Arrange / Given
    const json = getFeaturedCategoriesJson[0].listings;
    const firstListingJson = json[0];
    const firstListingImageJson = firstListingJson.listing_images[0];

    // Act / When
    const listings = Listing.fromJsonListtoList(json);

    // Assert / Then
    expect(listings).toEqual(
      jasmine.arrayContaining([
        jasmine.objectContaining({
          id: firstListingJson.id,
          title: firstListingJson.title,
          description: firstListingJson.description,
          listingImages: jasmine.arrayContaining([
            jasmine.objectContaining({
              url: firstListingImageJson.url,
              position: firstListingImageJson.position,
            }),
          ]),
        }),
      ])
    );
  });

  it('shoukd have a static method to generate a fake list with n items', () => {
    // Arrange / Given
    const numberOfItems = 10;

    // Act / When
    const items: Listing[] = Listing.getFakeList(numberOfItems);

    // Assert / Then
    expect(items.length).toBe(numberOfItems);
  });
});
