export interface Post {
  title: string;
  description: string;
  slug: string;
  category: "Case Study" | "Project" | "Blog";
  timeline: string;
  heroImage: string;
}

export const posts: Post[] = [
  {
    title: "Hover Mobility",
    description:
      "Engineering an e-bike rental platform, from concept to acqui-hire",
    slug: "001",
    category: "Project",
    timeline: "Jul 2020 — Sep 2021",
    heroImage: "/assets/001/cover.webp",
  },
  {
    title: "Multimodal AI Tutor",
    description:
      "A real-time AI tutor using vision, speech, and parallel reasoning",
    slug: "002",
    category: "Project",
    timeline: "Nov 2025 — Dec 2025",
    heroImage: "/assets/002/cover.webp",
  },
  {
    title: "FilmArtsy",
    description:
      "A professional network for film crews, creators, and collaborators",
    slug: "003",
    category: "Project",
    timeline: "May 2019 — Jun 2020",
    heroImage: "/assets/003/cover.webp",
  },
];

export function getPost(slug: string): Post {
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    throw new Error(`Post not found: ${slug}`);
  }

  return post;
}
