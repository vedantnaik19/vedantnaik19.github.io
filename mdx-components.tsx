import type { MDXComponents } from "mdx/types";

import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyH5,
  TypographyH6,
  TypographyP,
} from "@/components/typography";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <TypographyH1
        className="mx-auto mt-12 mb-4 w-full max-w-3xl"
        {...props}
      />
    ),
    h2: (props) => (
      <TypographyH2
        className="mx-auto mt-10 mb-4 w-full max-w-3xl"
        {...props}
      />
    ),
    h3: (props) => (
      <TypographyH3 className="mx-auto mt-8 mb-4 w-full max-w-3xl" {...props} />
    ),
    h4: (props) => (
      <TypographyH4 className="mx-auto mt-6 mb-4 w-full max-w-3xl" {...props} />
    ),
    h5: (props) => (
      <TypographyH5 className="mx-auto mb-2 w-full max-w-3xl" {...props} />
    ),
    h6: (props) => (
      <TypographyH6 className="mx-auto mb-2 w-full max-w-3xl" {...props} />
    ),
    p: (props) => (
      <TypographyP className="mx-auto mb-6 w-full max-w-3xl" {...props} />
    ),
    blockquote: (props) => (
      <blockquote
        className="text-muted-foreground mx-auto w-full my-6 max-w-3xl border-l pl-6 italic *:m-0"
        {...props}
      />
    ),
    ul: (props) => (
      <ul
        className="text-foreground/80 mx-auto mb-6 w-full max-w-3xl list-disc space-y-1 pl-5 leading-relaxed"
        {...props}
      />
    ),
    li: (props) => <li {...props} />,
    strong: (props) => (
      <strong className="text-foreground/80 font-semibold" {...props} />
    ),
    ...components,
  };
}
