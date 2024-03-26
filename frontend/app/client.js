import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID, // Use NEXT_PUBLIC_PROJECT_ID environment variable
  dataset: 'production',
  apiVersion: '2024-03-25',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // Use NEXT_PUBLIC_SANITY_TOKEN environment variable
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
