import { cn } from "@/lib/utils";
import { DATA } from "@/data/resume";

type Contribution = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type ContributionsResponse = {
  total: Record<string, number>;
  contributions: Contribution[];
};

const LEVEL_STYLES = [
  "bg-foreground/[0.07] dark:bg-foreground/[0.06]",
  "bg-primary/30",
  "bg-primary/50",
  "bg-primary/75",
  "bg-primary",
] as const;

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

async function getContributions(username: string) {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    return (await res.json()) as ContributionsResponse;
  } catch {
    return null;
  }
}

/**
 * Splits the flat day list into Sunday-aligned week columns, padding the first
 * week with nulls so every column renders exactly seven rows.
 */
function toWeeks(days: Contribution[]) {
  const weeks: (Contribution | null)[][] = [];
  const lead = new Date(`${days[0].date}T00:00:00Z`).getUTCDay();
  let current: (Contribution | null)[] = Array(lead).fill(null);

  for (const day of days) {
    current.push(day);
    if (current.length === 7) {
      weeks.push(current);
      current = [];
    }
  }
  if (current.length > 0) {
    weeks.push([...current, ...Array(7 - current.length).fill(null)]);
  }
  return weeks;
}

function getMonthLabels(weeks: (Contribution | null)[][]) {
  const labels: { label: string; week: number; span: number }[] = [];

  weeks.forEach((week, index) => {
    const firstDay = week.find(Boolean);
    if (!firstDay) return;
    const month = new Date(`${firstDay.date}T00:00:00Z`).getUTCMonth();
    const previous = labels.at(-1);
    if (previous?.label === MONTHS[month]) {
      previous.span += 1;
      return;
    }
    labels.push({ label: MONTHS[month], week: index, span: 1 });
  });

  return labels.filter((label) => label.span >= 3);
}

function getStreaks(days: Contribution[]) {
  let longest = 0;
  let running = 0;

  for (const day of days) {
    running = day.count > 0 ? running + 1 : 0;
    longest = Math.max(longest, running);
  }

  let current = 0;
  for (let i = days.length - 1; i >= 0; i--) {
    if (days[i].count > 0) {
      current += 1;
      continue;
    }
    // An empty final day is still an active streak — the day isn't over yet.
    if (i === days.length - 1) continue;
    break;
  }

  return { current, longest };
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <span>
      <span className="text-foreground">{value}</span> {label}
    </span>
  );
}

export default async function GithubContributions() {
  const data = await getContributions(DATA.githubUsername);
  if (!data?.contributions?.length) return null;

  const days = data.contributions;
  const weeks = toWeeks(days);
  const monthLabels = getMonthLabels(weeks);
  const { current, longest } = getStreaks(days);
  const total = Object.values(data.total)[0] ?? 0;

  return (
    <div className="rounded-xl border bg-card/40 p-4 sm:p-5 backdrop-blur-sm">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <div className="flex items-center gap-2.5">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          <span className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
            Contributions
          </span>
        </div>
        <div className="flex items-center gap-2.5 font-mono text-[11px] text-muted-foreground">
          <Stat label="last year" value={total.toLocaleString()} />
          <span className="text-border">/</span>
          <Stat label="streak" value={`${current}d`} />
          <span className="text-border">/</span>
          <Stat label="best" value={`${longest}d`} />
        </div>
      </div>

      <div className="no-scrollbar mt-5 -mx-1 overflow-x-auto px-1 pb-1">
        <div
          className="inline-flex w-max flex-col gap-1"
          style={{ "--cell": "8px" } as React.CSSProperties}
        >
          <div
            className="grid gap-[3px]"
            style={{
              gridTemplateColumns: `repeat(${weeks.length}, var(--cell))`,
            }}
          >
            {monthLabels.map((month) => (
              <span
                key={`${month.label}-${month.week}`}
                className="font-mono text-[10px] text-muted-foreground"
                style={{
                  gridColumnStart: month.week + 1,
                  gridColumnEnd: `span ${month.span}`,
                }}
              >
                {month.label}
              </span>
            ))}
          </div>

          <div
            className="grid grid-flow-col gap-[3px]"
            style={{
              gridTemplateRows: "repeat(7, var(--cell))",
              gridAutoColumns: "var(--cell)",
            }}
          >
            {weeks.flat().map((day, index) =>
              day ? (
                <div
                  key={day.date}
                  title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`}
                  className={cn(
                    "rounded-[2px] transition-colors",
                    LEVEL_STYLES[day.level]
                  )}
                />
              ) : (
                <div key={`pad-${index}`} />
              )
            )}
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <a
          href={`https://github.com/${DATA.githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[11px] text-muted-foreground transition-colors hover:text-foreground"
        >
          @{DATA.githubUsername}
        </a>
        <div className="flex items-center gap-1.5">
          <span className="font-mono text-[10px] text-muted-foreground">
            Less
          </span>
          {LEVEL_STYLES.map((style, level) => (
            <div key={level} className={cn("size-2.5 rounded-[2px]", style)} />
          ))}
          <span className="font-mono text-[10px] text-muted-foreground">
            More
          </span>
        </div>
      </div>
    </div>
  );
}
