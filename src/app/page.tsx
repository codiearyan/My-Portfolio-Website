/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import OpenSourceSection from "@/components/section/open-source-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";

const BLUR_FADE_DELAY = 0.04;

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-xs text-primary tracking-widest">
        {index}
      </span>
      <h2 className="font-display text-2xl tracking-tight">{title}</h2>
      <div className="flex-1 h-px bg-linear-to-r from-border to-transparent" />
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-16 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between md:items-center">
            <div className="gap-3 flex flex-col order-2 md:order-1">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="flex items-center gap-2 w-fit rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-primary" />
                  </span>
                  <span className="font-mono text-xs text-primary">
                    Building at Wagr Games
                  </span>
                </div>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 2} yOffset={8}>
                <h1 className="font-display text-4xl tracking-tight sm:text-5xl lg:text-6xl">
                  Hi, I&apos;m{" "}
                  <span className="text-gradient-brand">
                    {DATA.name.split(" ")[0]}
                  </span>
                </h1>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <p className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl text-pretty">
                  {DATA.description}
                </p>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 md:size-32 border border-primary/30 rounded-full ring-4 ring-primary/15 shadow-[0_0_60px_-10px] shadow-primary/50">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <SectionHeading index="01" title="About" />
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <SectionHeading index="02" title="Work Experience" />
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <SectionHeading index="03" title="Skills" />
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade
                key={skill.name}
                delay={BLUR_FADE_DELAY * 8 + id * 0.04}
              >
                <div className="border bg-card border-border rounded-xl h-8 w-fit px-3.5 flex items-center gap-2 transition-colors hover:border-primary/40 hover:bg-accent">
                  <img
                    src={skill.iconUrl}
                    alt=""
                    className="size-4 rounded-xs object-contain"
                  />
                  <span className="text-foreground text-sm font-medium">
                    {skill.name}
                  </span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <ProjectsSection />
        </BlurFade>
      </section>
      <section id="open-source">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <SectionHeading index="04" title="Open Source" />
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 10.5}>
            <OpenSourceSection />
          </BlurFade>
        </div>
      </section>
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
