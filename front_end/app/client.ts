import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Define your Sanity client configuration
const clientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: false,
  token:"skPg002lOHSZhI34DybPfBUu4ce1qp3BQZwxqbRuhtVorUD14jcOkUshNhTBcawFqzoNRLjcZs0lxuu3phAYoBAOjE9Sn7fHievfBpMYmwnQAneK2ina8EESVOoxVM5KrztFEhn5nW0H7opJl0wZFhi912zVgLBiREv35X2owhvlxYPLv3RF",
};

// Create the Sanity client instance
const client = createClient(clientConfig);

// Function to generate the image URL
const urlFor = (source: SanityImageSource | undefined) => {
  const builder = imageUrlBuilder(client);

  try {
    if (!source) {
      throw new Error('Image source is undefined.');
    }
    
    return builder.image(source).url();
  } catch (error) {
    console.error('Error generating image URL:', error);
    // Return a default image URL or handle the error as needed
    return 'https://example.com/default-image.png';
  }
};

export { client, urlFor };
