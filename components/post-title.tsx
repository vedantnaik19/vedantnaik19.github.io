import { TypographyH2, TypographyLarge } from "./typography";

interface PostTitleProps {
  title: string;
  description?: string;
}

export function PostTitle({ title, description }: PostTitleProps) {
  return (
    <div className="flex flex-col gap-3">
      <TypographyH2 className="max-w-3xl text-3xl leading-tight md:text-5xl">
        {title}
      </TypographyH2>
      {description && (
        <TypographyLarge className="max-w-2xl text-base md:text-xl">
          {description}
        </TypographyLarge>
      )}
    </div>
  );
}
