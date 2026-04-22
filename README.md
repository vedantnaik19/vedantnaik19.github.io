# Vedant Naik | Portfolio

Personal portfolio and technical blog built with a focus on clean design and performance.

## 🌐 Live Site

Check out the live portfolio here: **[https://vedantnaik19.github.io](https://vedantnaik19.github.io/)**

## 🛠 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Content:** [MDX](https://nextjs.org/docs/app/guides/mdx)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [Shadcn UI](https://ui.shadcn.com/)
- **Deployment:** [GitHub Pages](https://pages.github.com/) via GitHub Actions

## 🏗 Key Features

- **Dynamic MDX Routing:** Projects & Writing are authored in pure Markdown (`/content/*.mdx`) and dynamically rendered via a single `[slug]` route for better maintainability.
- **Optimized for Reading:** Custom typography system built using Tailwind utility classes and mapped to MDX elements.
- **Static Generation:** Fully pre-rendered at build time (SSG) for maximum performance and SEO.

## 📁 Project Structure

```text
├── app/              # Next.js App Router (Layouts, Pages, Components)
├── components/       # Reusable UI components
├── content/          # Projects & Writing content (MDX files)
├── lib/              # Shared utilities
├── public/           # Static assets (images, diagrams)
└── next.config.ts    # Next.js configuration
```

## 🤝 Community & Collaboration

This project is open-source and I would love for you to get involved!

- **Fork & Use:** Feel free to fork this repo and use it as a template for your own portfolio.
- **Contribute:** Found a bug? Have a design suggestion? Check out the [Contributing Guide](./CONTRIBUTING.md).

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
