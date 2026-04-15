import { Cover } from "@/components/cover";
import { Separator } from "@/components/ui/separator";
import { posts } from "@/lib/posts";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRightIcon, Smartphone, Globe, ArrowRight } from "lucide-react";
import {
  TypographyH2,
  TypographyH4,
  TypographyLead,
  TypographyList,
  TypographyMuted,
  TypographyP,
} from "@/components/typography";

const post = posts.find((p) => p.slug === "001");

export const metadata: Metadata = {
  title: post?.title,
  description: post?.description,
};

export default async function Page() {
  if (!post) notFound();

  return (
    <main className="container mx-auto flex w-full flex-1 flex-col items-center justify-center gap-12 pb-24">
      <Cover
        left={
          <span>
            A Smarter Way to <span className="text-hover-green">Move</span>{" "}
            <span className="hidden md:inline">Around Cities</span>
          </span>
        }
        right={
          <Image
            alt="Hover Mobility Cover Image"
            src="/assets/001/cover.webp"
            className="h-full w-full object-cover"
            height={895}
            width={720}
            loading="eager"
          />
        }
      />

      <article className="flex w-full max-w-5xl flex-col gap-12 px-6">
        {/* Header */}
        <header className="flex flex-col gap-2">
          <TypographyMuted>
            {post.date.toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </TypographyMuted>

          <TypographyH2>{post.title}</TypographyH2>
          <TypographyLead>{post.description}</TypographyLead>

          <div className="mt-4 flex flex-wrap gap-6">
            <a
              href="https://play.google.com/store/apps/details?id=co.auter.hover&hl=en_GB"
              target="_blank"
              className="nav-link"
              rel="noopener noreferrer"
            >
              <Smartphone size={16} /> App <ArrowUpRightIcon size={14} />
            </a>
            <a
              href="https://www.hover-mobility.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              <Globe size={16} /> Website <ArrowUpRightIcon size={14} />
            </a>
          </div>
        </header>

        <Separator />

        {/* Overview */}
        <section>
          <TypographyH4>Overview</TypographyH4>
          <TypographyP>
            Hover Mobility is an e-bike rental platform built to solve first-
            and last-mile connectivity challenges in Indian university campuses,
            which are often located on the outskirts of cities and lack reliable
            public or private transportation. Founded in 2019 by a team of
            three, we designed and deployed a campus-focused mobility solution
            that enabled students to seamlessly rent and use electric bikes
            through a mobile application.
          </TypographyP>
        </section>

        <section>
          <TypographyH4>Timeline</TypographyH4>
          <TypographyP>2020 - 2021</TypographyP>
        </section>
        <section>
          <TypographyH4>My Role</TypographyH4>
          <TypographyP>
            As a Software Engineering Co-founder, I led the end-to-end technical
            development of the platform:
          </TypographyP>
          <TypographyList>
            <li>
              Designed and architected the full system (mobile, backend, and
              IoT)
            </li>
            <li>
              Built the mobile application and backend services Integrated IoT
              systems with bike hardware Collaborated with external hardware
              vendors
            </li>
            <li>
              {" "}
              Mentored engineering and design interns Managed production
              systems, scaling, and monitoring
            </li>
          </TypographyList>
        </section>
      </article>
    </main>
  );
}
