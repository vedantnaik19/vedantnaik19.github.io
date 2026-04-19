# Vedant Naik | Portfolio

Personal portfolio and technical blog built with a focus on clean typography, performance, and interactive case studies.

## 🌐 Live Site

Check out the live portfolio here: **[https://vedantnaik19.github.io](https://vedantnaik19.github.io/)**

## 🛠 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Content:** [MDX](https://mdxjs.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [Shadcn UI](https://ui.shadcn.com/)
- **Deployment:** [GitHub Pages](https://pages.github.com/) via GitHub Actions

## 🏗 Key Features

- **Dynamic MDX Routing:** Projects & blogs are authored in pure Markdown (`/content/*.mdx`) and dynamically rendered via a single `[slug]` route for better maintainability.
- **Optimized for Reading:** Custom typography system built using Tailwind utility classes and mapped to MDX elements.
- **Static Generation:** Fully pre-rendered at build time (SSG) for maximum performance and SEO.

## 📁 Project Structure

```text
├── app/              # Next.js App Router (Layouts, Pages, Components)
├── components/       # Reusable UI components
├── content/          # Projects & blogs content (MDX files)
├── lib/              # Shared utilities
├── public/           # Static assets (images, diagrams)
└── next.config.ts    # Next.js configuration
```

## 🚀 Getting Started

First, install the dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
