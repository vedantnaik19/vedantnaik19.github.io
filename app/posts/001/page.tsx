import { Cover } from "@/components/cover";
import {
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyLarge,
  TypographyMuted,
  TypographyP,
  TypographySmall,
} from "@/components/typography";
import { Post, posts } from "@/lib/posts";
import { ArrowUpRightIcon, Globe, Smartphone } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

const post = posts.find((p) => p.slug === "001");

export const metadata: Metadata = {
  title: post?.title,
  description: post?.description,
};

// --- Static Data ---
const postMeta = [
  { label: "Timeline", value: "2020 — 2021" },
  { label: "Role", value: "Co-founder & Engineer" },
  { label: "Tech Stack", value: "Flutter, React, Node.js, AWS" },
];

const howItWorksSteps = [
  {
    step: "1",
    title: "Locate a Bike",
    desc: "Find nearby bikes on the map.",
    src: "/assets/001/how-it-works/locate.webp",
  },
  {
    step: "2",
    title: "Unlock & Ride",
    desc: "Scan the QR code to unlock and start the ride.",
    src: "/assets/001/how-it-works/start.webp",
  },
  {
    step: "3",
    title: "Park & End",
    desc: "Dock at a designated station and end the ride.",
    src: "/assets/001/how-it-works/end.webp",
  },
];

const outcomeImages = [1, 2, 3, 4];

// --- Components ---

function PostHeader({ post }: { post: Post }) {
  return (
    <header className="mx-auto flex w-full max-w-prose flex-col gap-6">
      <div className="flex flex-col gap-2">
        {post.date && (
          <TypographyMuted>
            {post.date.toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </TypographyMuted>
        )}
        <TypographyH2>{post.title}</TypographyH2>
        <TypographyLarge className="max-w-2xl">
          {post.description}
        </TypographyLarge>
      </div>

      <div className="flex flex-wrap gap-4">
        <a
          href="https://play.google.com/store/apps/details?id=co.auter.hover&hl=en_GB"
          target="_blank"
          className="nav-link group flex items-center gap-2 text-sm font-medium"
          rel="noopener noreferrer"
        >
          <Smartphone size={16} aria-hidden="true" /> App{" "}
          <ArrowUpRightIcon size={14} aria-hidden="true" />
        </a>
        <a
          href="https://www.hover-mobility.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link group flex items-center gap-2 text-sm font-medium"
        >
          <Globe size={16} aria-hidden="true" /> Website{" "}
          <ArrowUpRightIcon size={14} aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}

function PostMetaList() {
  return (
    <section className="mx-auto grid w-full max-w-prose grid-cols-2 gap-6 border-y py-6 md:grid-cols-3">
      {postMeta.map((item) => (
        <div key={item.label} className="flex flex-col gap-1">
          <TypographyMuted as="small">{item.label}</TypographyMuted>
          <TypographySmall>{item.value}</TypographySmall>
        </div>
      ))}
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="flex w-full flex-col gap-8">
      <div className="mx-auto flex w-full max-w-prose flex-col">
        <TypographyH3>How It Works</TypographyH3>
      </div>

      <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3">
        {howItWorksSteps.map((step) => (
          <div key={step.title} className="flex flex-col gap-4">
            <div className="relative aspect-1/2 max-h-96 w-full overflow-hidden">
              <Image
                src={step.src}
                alt={`${step.title} screen`}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
              <TypographyMuted className="text-xs font-semibold tracking-wider uppercase">
                Step {step.step}
              </TypographyMuted>
              <p className="text-foreground text-base font-semibold tracking-tight">
                {step.title}
              </p>
              <TypographyMuted className="text-sm leading-relaxed">
                {step.desc}
              </TypographyMuted>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TechnicalChallenges() {
  return (
    <section className="flex w-full flex-col gap-8">
      <div className="mx-auto flex w-full max-w-prose flex-col gap-8">
        <TypographyH3>Technical Challenges</TypographyH3>

        <div className="flex flex-col gap-6">
          <TypographyH4>Unreliable Connectivity</TypographyH4>
          <TypographyP>
            The biggest technical hurdle was handling lock/unlock operations in
            areas with poor or no internet connectivity. Traditional cloud-only
            approaches failed frequently, leading to stranded users and locked
            bikes.
          </TypographyP>

          <TypographyP>
            While REST APIs were used for primary communication, a Bluetooth Low
            Energy (BLE) fallback mechanism was introduced. The app generated
            short-lived offline tokens when connected, allowing users to
            securely lock and unlock bikes via BLE even in dead zones. Once
            connectivity was restored, the app synced the ride state back to the
            server. The flow worked as follows:
          </TypographyP>
        </div>
      </div>

      <div className="flex w-full flex-col gap-2">
        <div className="relative aspect-4/1 w-full overflow-hidden">
          <Image
            src="/assets/001/reliable-connection-light.svg"
            alt="Reliable Connection Diagram"
            fill
            className="object-contain p-8 dark:hidden"
          />
          <Image
            src="/assets/001/reliable-connection-dark.svg"
            alt="Reliable Connection Diagram"
            fill
            className="hidden object-contain p-8 dark:block"
          />
        </div>
        <TypographyMuted className="text-center text-sm italic">
          Figure: Offline BLE Fallback Mechanism for Unreliable Networks
        </TypographyMuted>
      </div>

      <div className="mx-auto flex w-full max-w-prose flex-col gap-4">
        <TypographyH4>Other Hurdles</TypographyH4>
        <ul className="text-foreground/80 ml-6 list-disc space-y-2 leading-relaxed">
          <li>
            <strong>Dynamic Pricing:</strong> As the system scaled to multiple
            campuses, the pricing logic was decoupled from the core application,
            enabling location-specific dynamic pricing configurations.
          </li>
          <li>
            <strong>Fraud Prevention:</strong> To combat payment abuse, a
            security deposit system tightly integrated with Razorpay was
            implemented, restricting ride durations based on deposit limits.
          </li>
          <li>
            <strong>UX Design:</strong> Without a dedicated designer, UI flows
            were iteratively refined by studying industry leaders, eventually
            leading to comprehensive onboarding tutorials that reduced user
            friction.
          </li>
        </ul>
      </div>
    </section>
  );
}

// --- Main Page Component ---
export default function Page() {
  if (!post) notFound();

  return (
    <main className="container mx-auto flex w-full max-w-5xl flex-1 flex-col gap-16 pb-24">
      <div className="w-full">
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
      </div>

      <article className="flex w-full flex-col gap-16 px-6">
        <PostHeader post={post} />
        <PostMetaList />

        <div className="flex w-full flex-col gap-16">
          {/* Overview & Role */}
          <section className="mx-auto flex w-full max-w-prose flex-col gap-6">
            <TypographyH3>Overview</TypographyH3>
            <div className="flex flex-col gap-4">
              <TypographyP>
                Hover Mobility is a dock-based e-bike rental platform designed
                to solve first- and last-mile connectivity on Indian university
                campuses. Founded in 2019, two friends and I built a
                mobile-first solution that enabled students to seamlessly
                locate, rent, and ride electric bikes, making it easier to
                navigate expansive, often disconnected campus environments.
              </TypographyP>
              <TypographyP>
                As a technical Co-founder, leading the end-to-end engineering
                involved designing the system architecture across mobile,
                backend, and IoT layers. The core application was developed
                using Flutter and Node.js. Scaling operations also required
                managing the AWS infrastructure and mentoring an incredible team
                of interns.
              </TypographyP>
            </div>
          </section>

          <HowItWorks />

          {/* System Architecture */}
          <section className="flex w-full flex-col gap-6">
            <div className="mx-auto flex w-full max-w-prose flex-col gap-6">
              <TypographyH3>System Architecture</TypographyH3>
              <TypographyP>
                Given a lean team, the architecture prioritized simplicity and
                fault tolerance. An event-driven model was adopted with a
                Node.js backend serving as the single source of truth,
                emphasizing idempotent operations to handle the notoriously
                unreliable campus networks.
              </TypographyP>
            </div>

            <div className="flex flex-col gap-2">
              <div className="relative aspect-8/3 w-full overflow-hidden">
                <Image
                  src="/assets/001/system-architecture-light.svg"
                  alt="System Architecture Diagram"
                  fill
                  className="object-contain p-6 dark:hidden"
                />
                <Image
                  src="/assets/001/system-architecture-dark.svg"
                  alt="System Architecture Diagram"
                  fill
                  className="hidden object-contain p-6 dark:block"
                />
              </div>
              <TypographyMuted className="text-center text-sm italic">
                Figure: High-level System Architecture
              </TypographyMuted>
            </div>
          </section>

          <TechnicalChallenges />

          {/* Outcomes & Learnings */}
          <section className="flex w-full flex-col gap-8">
            <div className="mx-auto flex w-full max-w-prose flex-col gap-6">
              <TypographyH3>Outcomes & Learnings</TypographyH3>

              <TypographyP>
                Hover Mobility was successfully deployed across two university
                campuses, validating the approach under real-world hardware and
                network constraints. Operating this system highlighted that
                simplicity is critical in early-stage products and that
                offline-first design is a necessity, not a luxury, for physical
                infrastructure.
              </TypographyP>
              <TypographyP>
                The project ultimately resulted in an acqui-hire opportunity for
                the founding team.
              </TypographyP>
            </div>

            <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4">
              {outcomeImages.map((num) => (
                <div
                  key={num}
                  className="relative aspect-square overflow-hidden"
                >
                  <Image
                    src={`/assets/001/outcome/${num}.${num === 2 ? "png" : "jpeg"}`}
                    alt={`Deployment photo ${num}`}
                    fill
                    className="object-cover opacity-95 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
