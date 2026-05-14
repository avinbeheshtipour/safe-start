const API_BASE_URL = "http://127.0.0.1:8000";

export interface ApiItem {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  location: string;
  tags: string[];
  urgent: boolean;
}

async function request<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`);

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json();
}

export function getCategories(): Promise<string[]> {
  return request<string[]>("/categories");
}

export function getResources(): Promise<ApiItem[]> {
  return request<ApiItem[]>("/resources");
}

export function getResourcesByCategory(category: string): Promise<ApiItem[]> {
  return request<ApiItem[]>(`/resources/${category}`);
}

export function getPosts(): Promise<ApiItem[]> {
  return request<ApiItem[]>("/posts");
}

export function getRecommendedPosts(): Promise<ApiItem[]> {
  return request<ApiItem[]>("/posts/recommended");
}
