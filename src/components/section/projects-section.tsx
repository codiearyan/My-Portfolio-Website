import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
    return (
        <section>
            <div className="flex min-h-0 flex-col gap-y-7">
                <div className="relative flex flex-col items-center justify-center gap-y-4 text-center">
                    <div
                        aria-hidden
                        className="absolute left-1/2 top-1/2 -z-10 h-32 w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
                    />
                    <div className="flex w-full items-center">
                        <div
                            className="h-px flex-1 bg-linear-to-r from-transparent from-5% via-primary/30 via-60% to-border/40"

                        />
                        <div className="z-10 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 shadow-[0_0_30px_-16px] shadow-primary">
                            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-primary">
                                Selected Builds
                            </span>
                        </div>
                        <div
                            className="h-px flex-1 bg-linear-to-l from-transparent from-5% via-primary/30 via-60% to-border/40"

                        />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-3">
                        <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
                            Products, platforms, and AI tools
                        </h2>
                        <p className="max-w-2xl text-balance text-center text-sm leading-7 text-muted-foreground sm:text-base">
                            A tighter look at the shipped work: school ERP systems, AI
                            dashboards, event tooling, and full-stack products with real
                            users.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-[800px] auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2">
                    {DATA.projects.map((project, id) => (
                        <BlurFade
                            key={project.title}
                            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                            className="h-full"
                        >
                            <ProjectCard
                                href={project.href}
                                key={project.title}
                                title={project.title}
                                description={project.description}
                                dates={project.dates}
                                tags={project.technologies}
                                image={project.image}
                                video={project.video}
                                links={project.links}
                            />
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}
