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
];
