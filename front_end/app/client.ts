import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId: 'k21eb9nx',
  dataset: 'production',
  apiVersion: '2024-03-26',
  useCdn: false,
  token: 'sks4zFleQyEQgbDPOiD6s2CdDy34hJfaxarGe1MA4AmobSiEcLsPA2mgkWkLTuCIhBZQVsl149SnVhOqobl63jQAotMrttLnwPH1jPVVAhI3WmuSMYGgqT5VWfpMPpoxNuepuiy4r4VljIMFD8wtNQQt9zuI1tnKgL3ChoWJwKOpR7bz2CJG',
});

export const urlFor = (source: SanityImageSource | undefined) => {
  if (!source) {
    // Handle error or return a default image URL
    return 'https://example.com/default-image.png';
  }

  const builder = imageUrlBuilder(client);
  return builder.image(source).url();
};
