export interface Post {
  title: string;
  description: string;
  slug: string;
  category: "Case Study" | "Project" | "Blog";
  timeline: string;
  heroImage: string;
  date?: Date;
}

export const posts: Post[] = [
  {
    title: "Hover Mobility",
    description:
      "Engineering an e-bike rental platform, from concept to acqui-hire",
    slug: "001",
    category: "Project",
    timeline: "2020 — 2021",
    date: new Date("2026-04-19"),
    heroImage: "/assets/001/cover.webp",
  },
  {
    title: "Multimodal AI Tutor",
    description:
      "A real-time multimodal AI tutor that sees, listens, and guides students through problems using parallel perception and reasoning",
    slug: "002",
    category: "Project",
    timeline: "Nov 2025 — Dec 2025",
    date: new Date("2026-04-19"),
    heroImage: "/assets/002/cover.webp",
  },
  {
    title: "FilmArtsy",
    description:
      "A social media platform designed specifically for film industry professionals",
    slug: "003",
    category: "Project",
    timeline: "2019 — 2020",
    date: new Date("2026-04-20"),
    heroImage: "/assets/003/cover.webp",
  },
];
