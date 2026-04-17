export interface Post {
  title: string;
  description: string;
  slug: string;
  date?: Date;
}

export const posts: Post[] = [
  {
    title: "Hover Mobility",
    description:
      "Engineering an e-bike rental platform — from concept to acqui-hire.",
    slug: "001",
  },
  {
    title: "AI Tutor",
    description:
      "Experimenting and building AI-powered tutor pilots at the BBC.",
    slug: "002",
  },
  {
    title: "Cbeebies Apps",
    description: "Developing interactive children's apps focused on usability, accessibility, and learning outcomes.",
    slug: "003",
  },
];
