/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function OpenSourceSection() {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-muted-foreground text-sm">
        Projects I&apos;ve contributed to in the open.
      </p>
      <div className="flex flex-col gap-6">
        {DATA.openSource.map((item, index) => (
          <BlurFade key={item.repo} delay={BLUR_FADE_DELAY + index * 0.05}>
            <Link
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-x-3 justify-between group"
            >
              <div className="flex items-start gap-x-3 flex-1 min-w-0">
                <img
                  src={item.logoUrl}
                  alt={item.repo}
                  className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none bg-background"
                />
                <div className="flex-1 min-w-0 flex flex-col gap-1">
                  <div className="font-semibold leading-none flex items-center gap-2 font-mono text-sm">
                    {item.repo}
                    <ArrowUpRight
                      className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                      aria-hidden
                    />
                  </div>
                  <div className="font-sans text-sm text-muted-foreground">
                    {item.description}
                  </div>
                </div>
              </div>
              <Badge
                variant="outline"
                className="text-[11px] font-medium border border-border h-6 w-fit px-2 flex-none"
              >
                {item.language}
              </Badge>
            </Link>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
