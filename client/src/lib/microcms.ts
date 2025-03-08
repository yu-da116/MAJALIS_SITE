import { createClient } from 'microcms-js-sdk';
import { config, validateConfig } from './config';

// 環境変数のバリデーション
validateConfig();

export const client = createClient({
  serviceDomain: config.microcms.serviceDomain,
  apiKey: config.microcms.apiKey,
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