import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Define your Sanity client configuration
const clientConfig = {
  projectId: 'k21eb9nx',
  dataset: 'production',
  apiVersion: '2024-05-07',
  useCdn: false,
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
