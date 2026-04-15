interface Post {
  title: string;
  description: string;
  date: Date;
  slug: string;
}

export const posts: Post[] = [
  {
    title: "Hover Mobility",
    description: "Engineering an E-Bike Rental Platform - From Design to Scale",
    date: new Date("2026-04-15"),
    slug: "001",
  },
];
