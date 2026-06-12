import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  return (
    <div className="border rounded-xl p-10 relative">
      <div className="absolute -top-4 border border-primary/30 bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-primary-foreground text-sm font-medium">
          Contact
        </span>
      </div>
      <div className="absolute inset-x-0 top-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          color="var(--primary)"
          maxOpacity={0.3}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="font-display text-3xl tracking-tight sm:text-5xl">
          Let&apos;s build something
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          Have an idea, a role, or just want to talk shop? The fastest way to
          reach me is a DM on X{" "}
          <Link
            href={DATA.contact.social.X.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            @codiearyan
          </Link>
          , or drop me a line at{" "}
          <Link
            href={`mailto:${DATA.contact.email}`}
            className="text-primary hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            {DATA.contact.email}
          </Link>
          . I read everything and reply fast.
        </p>
      </div>
    </div>
  );
}
