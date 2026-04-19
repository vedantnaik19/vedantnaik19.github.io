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
      "Engineering an e-bike rental platform, from concept to acqui-hire.",
    slug: "001",
    category: "Project",
    timeline: "2020 — 2021",
    date: new Date("2026-04-19"),
    heroImage: "/assets/001/cover.webp",
  },
  {
    title: "Multimodal AI Tutor",
    description:
      "A real-time multimodal AI tutor that sees, listens, and guides students through problems using parallel perception and reasoning.",
    slug: "002",
    category: "Project",
    timeline: "Nov 2025 — Dec 2025",
    date: new Date("2026-04-19"),
    heroImage: "/assets/002/cover.webp",
  },
  {
    title: "Cbeebies Apps",
    description:
      "Developing interactive children's apps focused on usability, accessibility, and learning outcomes.",
    slug: "003",
    category: "Project",
    timeline: "2021 — 2023",
    date: new Date("2026-04-19"),
    heroImage:
      "https://placehold.co/600x300?text=Work%20In%20Progress&font=geist",
  },
];
