import { CalendarDays } from "lucide-react";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";

const CTAS = [
  {
    label: "Book a call",
    href: DATA.calUrl,
    icon: CalendarDays,
    variant: "default" as const,
  },
  {
    label: "Message on",
    href: DATA.contact.social.X.url,
    icon: Icons.x,
    iconAfter: true,
    variant: "outline" as const,
  },
  {
    label: "LinkedIn",
    href: DATA.contact.social.LinkedIn.url,
    icon: Icons.linkedin,
    variant: "outline" as const,
  },
];

export default function HeroCtas() {
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {CTAS.map(({ label, href, icon: Icon, iconAfter, variant }) => (
        <Button
          key={label}
          asChild
          variant={variant}
          className="h-10 gap-2 rounded-full px-5"
        >
          <a href={href} target="_blank" rel="noopener noreferrer">
            {!iconAfter && <Icon className="size-4" />}
            {label}
            {iconAfter && <Icon className="size-3.5" />}
          </a>
        </Button>
      ))}
    </div>
  );
}
