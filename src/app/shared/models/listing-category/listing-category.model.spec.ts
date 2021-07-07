import { ListingCategory } from './listing-category.model';
import getCategoriesJson from '@testing/fake-api-responses/home/categories/featured/get.json';
import { ListingImage } from '../listing-image/listing-image.model';
import { Listing } from '../listing/listing.model';

describe('ListingCategory model', () => {
  const fakekApiResponse = getCategoriesJson;

  it('should be able to deserialize a json object', () => {
    // Arrange / Given
    const json = fakekApiResponse[0];

    // Act / When
    const deserialized = ListingCategory.fromJson(json);

    // Assert / Then
    const firstListingJson = json.listings[0];
    const firstListingImageJson = firstListingJson.listing_images[0];

    const firstlistingImage = jasmine.objectContaining<ListingImage>({
      url: firstListingImageJson.url,
      position: firstListingImageJson.position,
    });

    const firstlistingImageList = jasmine.arrayContaining([firstlistingImage]);

    const firstListing = jasmine.objectContaining<Listing>({
      id: firstListingJson.id,
      title: firstListingJson.title,
      description: firstListingJson.description,
      listingImages: firstlistingImageList,
    });

    expect(deserialized).toEqual(
      jasmine.objectContaining<ListingCategory>({
        id: json.id,
        simpleName: json.simple_name,
        listings: jasmine.arrayContaining([firstListing]),
      })
    );
  });

  it('should be able to deserialize a list of json objects', () => {
    // Arrange / Given
    const json = fakekApiResponse;

    // Act / When
    const deserialized = ListingCategory.fromJsonListToList(json);

    // Assert / Then
    const firstCategoryJson = fakekApiResponse[0];
    const firstListingJson = firstCategoryJson.listings[0];
    const firstListingImageJson = firstListingJson.listing_images[0];

    // Assert / Then
    const firstlistingImage = jasmine.objectContaining<ListingImage>({
      url: firstListingImageJson.url,
      position: firstListingImageJson.position,
    });

    const firstlistingImageList = jasmine.arrayContaining([firstlistingImage]);

    const firstListing = jasmine.objectContaining<Listing>({
      id: firstListingJson.id,
      title: firstListingJson.title,
      description: firstListingJson.description,
      listingImages: firstlistingImageList,
    });

    const firstCategory = jasmine.objectContaining<ListingCategory>({
      id: firstCategoryJson.id,
      simpleName: firstCategoryJson.simple_name,
      listings: jasmine.arrayContaining([firstListing]),
    });

    const categories = jasmine.arrayContaining([firstCategory]);

    expect(deserialized).toEqual(categories);
  });

  it('should be able to generate fake category with n fake listings', () => {
    // Arrange / Given
    const numberOfListings = 10;

    // Act / When
    const category = ListingCategory.getOneFake({
      numberOfListings,
    });

    // Assert / Then
    expect(category.listings.length).toBe(numberOfListings);
  });
});
