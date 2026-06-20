import Sidebar from "@/components/Sidebar";
import Reveal from "@/components/Reveal";
import TrailPreview from "@/components/TrailPreview";
import TrailProgress from "@/components/TrailProgress";
import GrandView from "@/components/GrandView";

const EXPERIENCE = [
  {
    yr: "2019 — Present",
    role: "Senior Software Engineer",
    place: "Charles River Development (State Street) · Burlington, MA",
    body: "7+ years building Manager Workbench — the platform portfolio managers use to construct, analyze, and optimize multi-asset portfolios. gRPC microservices for real-time trade simulation, ETL pipelines for compliance and risk, and a re-architected data service that cut response time 15% under live trading load. Now mentoring others on the team.",
    tags: ["gRPC", "Java", "Python", "Kafka", "SQL"],
  },
  {
    yr: "2016 — 2018",
    role: "Co-op, Full-Stack Engineer",
    place: "ERT · Boston, MA",
    body: "Master's in Computer Science at Northeastern, TA'ing Algorithms & Data along the way, then a co-op shipping full-stack features for a clinical-trials platform — a first real taste of a regulated, compliance-heavy domain.",
    tags: ["React", "Redux", "Node.js"],
  },
  {
    yr: "2012 — 2016",
    role: "Intern, Software Engineer",
    place: "CRISIL & Schneider Electric · Mumbai, India",
    body: "Computer Engineering degree at University of Mumbai, with internships building web pages for banking clients and testing distributed control systems — before I knew either field had a name.",
    tags: ["HTML/CSS", "JavaScript", "C++"],
  },
];

const HOBBIES = [
  {
    num: "01",
    tag: "Elevation gain",
    title: "Hiking",
    body: "Weekends mean a trailhead and a climb. There's a quiet that only shows up a few miles in — and a view that always earns the effort.",
  },
  {
    num: "02",
    tag: "Reaction time",
    title: "Badminton",
    body: "Fast, tactical, and more brutal than it looks. It's reflexes and footwork — the perfect counterweight to a day spent sitting at a keyboard.",
  },
  {
    num: "03",
    tag: "Ninety minutes",
    title: "Watching soccer",
    body: "The drama, the tactics, the late winners that make a whole week worth it. Give me a tense match and I'm fully invested until the final whistle.",
  },
];

function SectionHead({ index, title }: { index: string; title: string }) {
  return (
    <div className="sticky top-0 z-10 -mx-2 mb-4 flex items-center gap-4 bg-ink/85 px-2 py-4 backdrop-blur-sm sm:relative sm:bg-transparent sm:backdrop-blur-none">
      <h2 className="section-head flex items-center gap-3 font-mono text-sm font-medium tracking-wide text-paper">
        <span className="text-amber">{index}.</span> {title}
      </h2>
      <span className="h-px flex-1 bg-line hidden sm:block" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-[1400px] lg:flex">
      <div className="sticky top-0 z-40 flex items-center gap-4 bg-ink/90 px-6 py-3 backdrop-blur-sm lg:hidden">
        <TrailProgress vertical={false} />
      </div>

      <Sidebar />

      <main className="lg:ml-[min(50vw,400px)] flex-1 px-6 sm:px-10 lg:px-24 py-16 lg:py-24 space-y-28 lg:space-y-36">
        <Reveal>
          <TrailPreview />
        </Reveal>

        <section id="about">
          <SectionHead index="01" title="Trailhead" />
          <Reveal>
            <div className="max-w-[60ch] space-y-4 text-mist leading-relaxed">
              <p>
                I&apos;m a backend engineer who likes systems that have to be right under pressure — trading
                infrastructure, compliance pipelines, anything where speed and correctness aren&apos;t optional.
              </p>
              <p>
                Currently a Senior Software Engineer at Charles River Development (State Street), where I work on
                the gRPC microservices and ETL pipelines behind Manager Workbench — the platform portfolio
                managers use to construct, analyze, and optimize multi-asset portfolios.
              </p>
              <p>
                Outside of work, I&apos;m usually headed toward a trailhead, on a badminton court, or watching
                whichever match has the most riding on it this weekend.
              </p>
            </div>
          </Reveal>
        </section>

        <section id="experience">
          <SectionHead index="02" title="The climb" />
          <div className="space-y-12">
            {EXPERIENCE.map((job) => (
              <Reveal key={job.role}>
                <div className="grid gap-1 sm:grid-cols-[140px_1fr] sm:gap-6">
                  <span className="font-mono text-xs uppercase tracking-[0.1em] text-sage">{job.yr}</span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-paper">{job.role}</h3>
                    <p className="font-mono text-xs uppercase tracking-[0.08em] text-clay mt-1">
                      {job.place}
                    </p>
                    <p className="mt-3 max-w-[58ch] text-mist leading-relaxed">{job.body}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-sage/30 px-3 py-1 font-mono text-xs text-sage"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="hobbies">
          <SectionHead index="03" title="Ridge line" />
          <div className="space-y-6">
            {HOBBIES.map((h) => (
              <Reveal key={h.title}>
                <div className="group rounded-md border border-sage/15 p-6 transition-colors hover:border-amber/50 hover:bg-pine/40">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-amber">{h.num}</span>
                    <span className="font-mono text-xs uppercase tracking-[0.1em] text-sage">{h.tag}</span>
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold text-paper">{h.title}</h3>
                  <p className="mt-2 max-w-[58ch] text-mist leading-relaxed">{h.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className="relative overflow-hidden pb-[200px]">
          <GrandView />
          <SectionHead index="04" title="Summit" />
          <Reveal>
            <div className="relative max-w-[56ch]">
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-amber">
                The grand view
              </p>
              <p className="text-mist leading-relaxed">
                I&apos;m exploring Senior Software Engineer roles in fintech and at product-driven tech
                companies — distributed systems, trading infrastructure, or anywhere speed and reliability are
                non-negotiable. Whether it&apos;s about backend systems, a hiking recommendation, or who&apos;s
                winning this weekend, my inbox is open.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:debshubham@gmail.com"
                  className="inline-flex items-center gap-2 rounded-sm bg-amber px-6 py-3 font-mono text-xs uppercase tracking-[0.1em] text-ink transition-transform hover:-translate-y-0.5"
                >
                  Email me
                </a>
                <a
                  href="https://www.linkedin.com/in/shubham-deb"
                  className="inline-flex items-center gap-2 rounded-sm border border-sage px-6 py-3 font-mono text-xs uppercase tracking-[0.1em] text-paper transition-colors hover:bg-sage hover:text-ink"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        <footer className="border-t border-line pt-8 font-mono text-xs tracking-[0.08em] text-sage">
          <p>© 2026 Shubham Deb — built with intent.</p>
        </footer>
      </main>
    </div>
  );
}
