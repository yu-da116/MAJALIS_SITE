// 環境変数の型定義とバリデーション
export const config = {
  microcms: {
    serviceDomain: import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN as string,
    apiKey: import.meta.env.VITE_MICROCMS_API_KEY as string,
  },
} as const;

// 環境変数のバリデーション
export function validateConfig() {
  const { microcms } = config;
  
  if (!microcms.serviceDomain) {
    throw new Error('VITE_MICROCMS_SERVICE_DOMAIN is not set');
  }
  
  if (!microcms.apiKey) {
    throw new Error('VITE_MICROCMS_API_KEY is not set');
  }
}
