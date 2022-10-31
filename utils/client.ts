import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: '9r14nxh7',
  dataset: 'production',
  apiVersion: '2022-10-19',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
