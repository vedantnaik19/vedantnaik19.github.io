import Link from "next/link";

import { TypographyH1, TypographyP } from "@/components/typography";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="container mx-auto flex max-w-5xl flex-1 flex-col items-center justify-center gap-6 px-6 py-24 text-center md:py-32">
      <div className="flex flex-col gap-2">
        <TypographyH1>404</TypographyH1>
        <TypographyP className="text-lg">Page not found</TypographyP>
      </div>
      <TypographyP className="text-muted-foreground max-w-md">
        The page you are looking for doesn&apos;t exist or has been moved.
      </TypographyP>
      <Button className="mt-4" render={<Link href="/">Return Home</Link>} nativeButton={false} />
    </main>
  );
}
