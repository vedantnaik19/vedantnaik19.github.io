import Link from "next/link";

import { TypographyH1, TypographyP } from "@/components/typography";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="container mx-auto flex max-w-5xl flex-1 scroll-mt-20 flex-col items-center justify-center gap-6 px-6 py-24 text-center md:py-32"
    >
      <div className="surface-card flex w-full max-w-lg flex-col items-center gap-6 p-8 md:p-10">
        <div className="flex flex-col gap-2">
          <TypographyH1>404</TypographyH1>
          <TypographyP className="text-lg">Page not found</TypographyP>
        </div>
        <TypographyP className="text-muted-foreground max-w-md">
          The page you are looking for doesn&apos;t exist or has been moved.
        </TypographyP>
        <Link href="/" className="cta-link">
          Return home
        </Link>
      </div>
    </main>
  );
}
