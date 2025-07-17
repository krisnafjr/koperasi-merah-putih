import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: '6tz83m1f',     // Ganti dengan projectId kamu
  dataset: 'production',          // Ganti jika dataset kamu bukan "production"
  apiVersion: '2023-01-01',
  useCdn: true,
});
