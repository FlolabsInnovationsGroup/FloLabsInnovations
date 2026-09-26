/**
 * Strapi API Client
 * Handles all communication with the Strapi backend on Railway
 */

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

interface StrapiImage {
  id: number;
  documentId: string;
  url: string;
  alternativeText?: string;
  width: number;
  height: number;
  formats?: any;
}

export interface FocusArea {
  id: number;
  documentId: string;
  title: string;
  description: string;
  link: string;
  coverImage?: StrapiImage;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Technology {
  id: number;
  documentId: string;
  name: string;
  icon: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface AboutProject {
  id: number;
  documentId: string;
  title: string;
  description: string;
  image?: StrapiImage;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

/**
 * Generic fetch function for Strapi API
 */
async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (STRAPI_TOKEN) {
    headers['Authorization'] = `Bearer ${STRAPI_TOKEN}`;
  }

  try {
    const res = await fetch(`${STRAPI_URL}/api${endpoint}`, {
      headers,
      next: { revalidate: 3600 }, // Cache for 1 hour
      ...options,
    });

    if (!res.ok) {
      throw new Error(`Strapi API error: ${res.status} ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error('Error fetching from Strapi:', error);
    throw error;
  }
}

/**
 * Get full Strapi URL for images
 */
export function getStrapiMediaUrl(url: string | undefined): string {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
}

/**
 * Fetch all Focus Areas
 */
export async function getFocusAreas(): Promise<StrapiResponse<FocusArea[]>> {
  return fetchAPI('/focus-areas?populate=coverImage');
}

/**
 * Fetch all Technologies
 */
export async function getTechnologies(): Promise<StrapiResponse<Technology[]>> {
  return fetchAPI('/technologies');
}

/**
 * Fetch all About Projects
 */
export async function getAboutProjects(): Promise<StrapiResponse<AboutProject[]>> {
  return fetchAPI('/about-projects?populate=image');
}
