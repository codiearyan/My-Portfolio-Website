"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="h-32 w-full bg-muted" />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={1280}
      height={800}
      sizes="(max-width: 640px) 100vw, 400px"
      className="h-32 w-full object-cover object-top"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "group relative isolate flex h-full flex-col overflow-hidden rounded-[18px] border border-border/80 bg-card shadow-[0_1px_0_rgba(255,255,255,0.04)_inset] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 hover:shadow-[0_18px_50px_-30px] hover:shadow-primary/50",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
      />
      <Link
        href={href || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="relative m-2 block shrink-0 overflow-hidden rounded-[14px] border border-white/5 bg-muted"
      >
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="h-32 w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.035]"
          />
        ) : image ? (
          <div className="transition-transform duration-500 group-hover:scale-[1.03]">
            <ProjectImage src={image} alt={title} />
          </div>
        ) : (
          <div className="h-32 w-full bg-muted" />
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
        {links && links.length > 0 && (
          <div className="absolute right-2 top-2 flex gap-1.5">
            {links.map((link) => (
              <span
                key={link.type}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-black/75 text-white shadow-lg backdrop-blur-md transition-transform duration-200 group-hover:scale-105"
                aria-hidden
              >
                {link.icon}
              </span>
            ))}
          </div>
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-2 px-4 pb-3 pt-1">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="flex items-center gap-1.5 truncate font-semibold text-[15px] tracking-tight">
              {title}
              <ArrowUpRight
                className="h-3.5 w-3.5 flex-none text-primary opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                aria-hidden
              />
            </h3>
            <time className="mt-0.5 block text-[10px] uppercase tracking-[0.16em] text-muted-foreground/70 tabular-nums">
              {dates}
            </time>
          </div>
        </div>
        <p className="line-clamp-2 text-pretty text-xs leading-relaxed text-muted-foreground">
          {description}
        </p>
        <div className="mt-auto flex items-end justify-between gap-2 pt-1">
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {tags.slice(0, 3).map((tag) => (
                <Badge
                  key={tag}
                  className="h-5 w-fit rounded-md border border-border/60 bg-muted/40 px-1.5 text-[10px] font-medium text-muted-foreground"
                  variant="outline"
                >
                  {tag}
                </Badge>
              ))}
              {tags.length > 3 && (
                <span className="text-[10px] text-muted-foreground/60 self-center">
                  +{tags.length - 3}
                </span>
              )}
            </div>
          )}
          {links && links.length > 0 && (
            <div className="flex flex-none gap-1">
              {links.map((link) => (
                <Link
                  href={link.href}
                  key={link.type}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${title} ${link.type}`}
                  className="flex h-6 w-6 items-center justify-center rounded-md border border-border/60 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
