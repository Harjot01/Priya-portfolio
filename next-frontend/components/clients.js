import { createClient } from "@sanity/client";


export const client = createClient({
  projectId: 'b4bintk8',
  dataset: 'production',
  apiVersion: '2023-06-26',
  useCdn: true,
  token: process.env.SANITY_SECRET_TOKEN
});

