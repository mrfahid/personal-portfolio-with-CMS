import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'k21eb9nx',
  dataset: 'production',
  apiVersion: '2024-03-26',
  useCdn: true,
  token: 'sks4zFleQyEQgbDPOiD6s2CdDy34hJfaxarGe1MA4AmobSiEcLsPA2mgkWkLTuCIhBZQVsl149SnVhOqobl63jQAotMrttLnwPH1jPVVAhI3WmuSMYGgqT5VWfpMPpoxNuepuiy4r4VljIMFD8wtNQQt9zuI1tnKgL3ChoWJwKOpR7bz2CJG',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source).url();
