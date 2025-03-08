import { createClient } from 'microcms-js-sdk';

if (!import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN || !import.meta.env.VITE_MICROCMS_API_KEY) {
  throw new Error('MicroCMS credentials are not set');
}

export const client = createClient({
  serviceDomain: import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.VITE_MICROCMS_API_KEY,
});

export type Blog = {
  id: string;
  title: string;
  content: string;
  eyecatch?: {
    url: string;
    height: number;
    width: number;
  };
  category: {
    id: string;
    name: string;
  };
  publishedAt: string;
  revisedAt: string;
  createdAt: string;
};

export type BlogResponse = {
  contents: Blog[];
  totalCount: number;
  offset: number;
  limit: number;
};

export async function getBlogs(queries?: any) {
  return await client.get<BlogResponse>({ endpoint: 'blogs', queries });
}

export async function getBlogDetail(contentId: string, queries?: any) {
  return await client.get<Blog>({
    endpoint: 'blogs',
    contentId,
    queries,
  });
}

export async function getCategories() {
  return await client.get({
    endpoint: 'categories',
  });
}
