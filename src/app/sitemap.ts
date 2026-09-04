import type { MetadataRoute } from "next";

const SITE_URL = "https://www.flolabsinnovations.com";

const routes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/ai-robotics", changeFrequency: "monthly", priority: 0.8 },
  { path: "/ai-travel", changeFrequency: "monthly", priority: 0.8 },
  { path: "/animal-vocalization", changeFrequency: "monthly", priority: 0.8 },
  { path: "/caipo", changeFrequency: "monthly", priority: 0.8 },
  { path: "/education", changeFrequency: "monthly", priority: 0.8 },
  { path: "/healthcare", changeFrequency: "monthly", priority: 0.8 },
  { path: "/moodchanger-pets", changeFrequency: "monthly", priority: 0.8 },
  { path: "/moodchanger-people", changeFrequency: "monthly", priority: 0.8 },
  { path: "/space", changeFrequency: "monthly", priority: 0.8 },
  { path: "/travel", changeFrequency: "monthly", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
