import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="relative min-h-[100svh] bg-ink text-paper flex items-end pb-[clamp(48px,9vh,90px)] overflow-hidden" id="top">
        <div className="absolute -top-[10%] -right-[5%] w-[55vw] h-[55vw] max-w-[640px] max-h-[640px] pointer-events-none bg-[radial-gradient(circle,rgba(232,161,58,.18),transparent_62%)]" />
        <svg
          className="terrain absolute inset-0 w-full h-full opacity-90"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <path d="M-50 700 C 200 640, 380 760, 600 690 S 1050 620, 1250 700 1500 660 1500 660" />
          <path d="M-50 770 C 240 700, 420 820, 640 740 S 1080 690, 1300 760 1500 730 1500 730" />
          <path className="ridge" d="M-50 560 C 260 500, 460 600, 700 540 S 1120 470, 1340 560 1500 520 1500 520" />
          <path className="ridge" d="M-50 620 C 220 580, 440 670, 680 600 S 1100 540, 1320 620 1500 590 1500 590" />
          <path d="M-50 840 C 260 780, 480 880, 720 810 S 1120 760, 1360 830 1500 800 1500 800" />
        </svg>
        <div className="relative z-2 w-full max-w-[1100px] mx-auto px-5 sm:px-10">
          <span className="eyebrow font-mono text-[0.72rem] tracking-[0.22em] uppercase text-sage inline-flex items-center gap-[0.6em] mb-[22px]">
            19.07°N, 72.87°E → 42.36°N, 71.06°W
          </span>
          <h1 className="font-display font-extrabold leading-[1.02] tracking-tight text-[clamp(2.7rem,9vw,6.2rem)] max-w-[14ch]">
            Building systems,
            <br />
            chasing <span className="text-amber">trailheads</span>.
          </h1>
          <p className="font-serif text-[clamp(1.05rem,2.3vw,1.5rem)] leading-[1.45] max-w-[46ch] mt-6 text-mist">
            Senior Software Engineer at Charles River Development (State Street), building the trading and
            portfolio-optimization microservices behind Manager Workbench — with hiking boots, a badminton
            racket, and a stoppage-time obsession filling the gaps in between.
          </p>
          <div className="flex flex-wrap gap-3.5 mt-[34px]">
            <a
              className="font-mono text-[0.78rem] tracking-[0.1em] uppercase px-[22px] py-3.5 rounded-sm inline-flex items-center gap-[0.6em] transition-transform hover:-translate-y-0.5 bg-amber text-ink font-medium"
              href="#journey"
            >
              Follow the route ↓
            </a>
            <a
              className="font-mono text-[0.78rem] tracking-[0.1em] uppercase px-[22px] py-3.5 rounded-sm inline-flex items-center gap-[0.6em] transition-colors border border-sage text-paper hover:bg-sage hover:text-ink"
              href="#contact"
            >
              Say hello
            </a>
          </div>
        </div>
        <div className="scrollcue absolute bottom-[26px] left-1/2 -translate-x-1/2 z-2 font-mono text-[0.66rem] tracking-[0.2em] uppercase text-sage flex flex-col items-center gap-2">
          <span className="dot w-[5px] h-[5px] rounded-full bg-amber" />
          <span>Scroll</span>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="bg-paper py-[clamp(70px,12vh,130px)]" id="journey">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-10">
          <Reveal className="max-w-[62ch] mb-[clamp(40px,6vh,70px)]">
            <span className="eyebrow font-mono text-[0.72rem] tracking-[0.22em] uppercase text-moss inline-flex items-center gap-[0.6em]">
              The route so far
            </span>
            <h2 className="font-display font-extrabold leading-[1.02] tracking-tight text-[clamp(2rem,5vw,3.4rem)] mt-[18px]">
              Every trail has a starting point.
            </h2>
            <p className="mt-[18px] text-moss text-[clamp(1.05rem,1.6vw,1.25rem)]">
              Mine began in Mumbai and climbed through Boston. Here&apos;s how the elevation changed.
            </p>
          </Reveal>

          <div className="trail relative mt-2.5 md:max-w-[880px] md:mx-auto">
            {[
              {
                yr: "2012 – 2016",
                title: "The foundation",
                place: "Mumbai, India · University of Mumbai",
                body: "A Computer Engineering degree, plus internships at CRISIL and Schneider Electric — building web pages for banking clients and testing distributed control systems before I knew either field had a name.",
              },
              {
                yr: "2016 – 2018",
                title: "The climb",
                place: "Boston, MA · Northeastern University",
                body: "A Master's in Computer Science, TA'ing Algorithms & Data along the way, then a co-op at ERT shipping full-stack features for a clinical-trials platform — React, Redux, and a first real taste of a regulated, compliance-heavy domain.",
              },
              {
                yr: "2019 — now",
                title: "The work",
                place: "Burlington, MA · Charles River Development (State Street)",
                body: "7+ years building Manager Workbench — the platform portfolio managers use to construct, analyze, and optimize multi-asset portfolios. gRPC microservices for real-time trade simulation, ETL pipelines for compliance and risk, and a re-architected data service that cut response time 15% under live trading load. Now a Senior Software Engineer, mentoring others along the way.",
              },
            ].map((stop) => (
              <Reveal key={stop.title} className="stop relative pl-12 pb-[clamp(40px,6vh,64px)] last:pb-0 md:w-1/2 md:pl-0 md:[&:nth-child(odd)]:pr-12 md:[&:nth-child(odd)]:text-right md:[&:nth-child(even)]:ml-[50%] md:[&:nth-child(even)]:pl-12 md:[&:nth-child(even)]:pr-0 md:[&:nth-child(even)]:text-left">
                <span className="marker" />
                <span className="font-mono text-[0.78rem] tracking-[0.12em] text-moss">{stop.yr}</span>
                <h3 className="font-display font-extrabold leading-[1.02] tracking-tight text-[clamp(1.4rem,3vw,2rem)] mt-2 mb-1">
                  {stop.title}
                </h3>
                <span className="font-mono text-[0.74rem] tracking-[0.1em] uppercase text-clay">{stop.place}</span>
                <p className="mt-3.5 max-w-[54ch] text-pine md:ml-auto md:[&:nth-child(even)]:ml-0">{stop.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOBBIES */}
      <section className="bg-pine text-paper py-[clamp(70px,12vh,130px)]" id="hobbies">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-10">
          <Reveal className="max-w-[62ch] mb-[clamp(40px,6vh,70px)]">
            <span className="eyebrow font-mono text-[0.72rem] tracking-[0.22em] uppercase text-sage inline-flex items-center gap-[0.6em]">
              Off the clock
            </span>
            <h2 className="font-display font-extrabold leading-[1.02] tracking-tight text-[clamp(2rem,5vw,3.4rem)] mt-[18px] text-paper">
              What I do when the laptop closes.
            </h2>
            <p className="mt-[18px] text-sage text-[clamp(1.05rem,1.6vw,1.25rem)]">
              Three things that keep me moving — uphill, across a court, and on the edge of my seat.
            </p>
          </Reveal>

          <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
            <Reveal>
              <article className="relative bg-ink border border-sage/22 rounded-sm p-7 pt-7 pb-6 overflow-hidden min-h-[300px] flex flex-col transition-all hover:-translate-y-1.5 hover:border-amber">
                <svg className="absolute top-0 right-0 w-[140px] h-[140px] opacity-50" viewBox="0 0 140 140" aria-hidden="true">
                  <g fill="none" stroke="var(--amber)" strokeWidth="1.4">
                    <path d="M10 120 L50 50 L70 80 L95 30 L135 120 Z" />
                    <path d="M40 120 C 60 100, 80 100, 100 120" opacity=".5" />
                  </g>
                </svg>
                <span className="font-mono text-[0.72rem] tracking-[0.18em] text-amber">01</span>
                <span className="font-mono text-[0.68rem] tracking-[0.1em] uppercase text-sage mb-1.5 mt-3.5">Elevation gain</span>
                <h3 className="text-[1.6rem] font-display font-extrabold mt-1 mb-2.5 text-paper">Hiking</h3>
                <p className="text-[0.98rem] text-mist mt-auto">
                  Weekends mean a trailhead and a climb. There&apos;s a quiet that only shows up a few miles in — and a view that always earns the effort.
                </p>
              </article>
            </Reveal>

            <Reveal>
              <article className="relative bg-ink border border-sage/22 rounded-sm p-7 pt-7 pb-6 overflow-hidden min-h-[300px] flex flex-col transition-all hover:-translate-y-1.5 hover:border-amber">
                <svg className="absolute top-0 right-0 w-[140px] h-[140px] opacity-50" viewBox="0 0 140 140" aria-hidden="true">
                  <g fill="none" stroke="var(--amber)" strokeWidth="1.4">
                    <path d="M5 130 C 50 130, 70 30, 130 10" strokeDasharray="4 5" />
                    <circle cx="130" cy="10" r="6" fill="var(--amber)" stroke="none" />
                  </g>
                </svg>
                <span className="font-mono text-[0.72rem] tracking-[0.18em] text-amber">02</span>
                <span className="font-mono text-[0.68rem] tracking-[0.1em] uppercase text-sage mb-1.5 mt-3.5">Reaction time</span>
                <h3 className="text-[1.6rem] font-display font-extrabold mt-1 mb-2.5 text-paper">Badminton</h3>
                <p className="text-[0.98rem] text-mist mt-auto">
                  Fast, tactical, and more brutal than it looks. It&apos;s reflexes and footwork — the perfect counterweight to a day spent sitting at a keyboard.
                </p>
              </article>
            </Reveal>

            <Reveal>
              <article className="relative bg-ink border border-sage/22 rounded-sm p-7 pt-7 pb-6 overflow-hidden min-h-[300px] flex flex-col transition-all hover:-translate-y-1.5 hover:border-amber">
                <svg className="absolute top-0 right-0 w-[140px] h-[140px] opacity-50" viewBox="0 0 140 140" aria-hidden="true">
                  <g fill="none" stroke="var(--amber)" strokeWidth="1.4">
                    <path d="M0 110 Q 70 -10, 140 110" strokeDasharray="3 6" />
                    <circle cx="70" cy="40" r="7" fill="none" />
                    <path d="M63 40 h14 M70 33 v14" />
                  </g>
                </svg>
                <span className="font-mono text-[0.72rem] tracking-[0.18em] text-amber">03</span>
                <span className="font-mono text-[0.68rem] tracking-[0.1em] uppercase text-sage mb-1.5 mt-3.5">Ninety minutes</span>
                <h3 className="text-[1.6rem] font-display font-extrabold mt-1 mb-2.5 text-paper">Watching soccer</h3>
                <p className="text-[0.98rem] text-mist mt-auto">
                  The drama, the tactics, the late winners that make a whole week worth it. Give me a tense match and I&apos;m fully invested until the final whistle.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CURRENTLY */}
      <section className="bg-amber text-ink">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-10 flex flex-wrap gap-6 sm:gap-14 items-baseline py-[clamp(36px,6vh,60px)]">
          <span className="font-mono text-[0.72rem] tracking-[0.2em] uppercase">Currently</span>
          <h2 className="font-display font-extrabold leading-[1.02] tracking-tight text-[clamp(1.5rem,3.4vw,2.4rem)] max-w-[24ch] flex-1 basis-[320px]">
            Exploring Senior Software Engineer roles in fintech and at product-driven tech companies — distributed systems, trading infrastructure, or anywhere speed and reliability are non-negotiable.
          </h2>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-ink text-paper text-center py-[clamp(70px,12vh,130px)]" id="contact">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-10">
          <span className="eyebrow font-mono text-[0.72rem] tracking-[0.22em] uppercase text-sage inline-flex items-center justify-center gap-[0.6em]">
            The summit
          </span>
          <h2 className="font-display font-extrabold leading-[1.02] tracking-tight text-[clamp(2.2rem,6vw,4rem)] my-[18px]">
            Let&apos;s connect.
          </h2>
          <p className="max-w-[48ch] mx-auto text-mist">
            Whether it&apos;s about backend systems, a hiking recommendation, or who&apos;s winning this weekend — my inbox is open.
          </p>
          <div className="flex flex-wrap gap-3.5 justify-center mt-[34px]">
            <a
              className="font-mono text-[0.78rem] tracking-[0.1em] uppercase px-[22px] py-3.5 rounded-sm inline-flex items-center gap-[0.6em] transition-transform hover:-translate-y-0.5 bg-amber text-ink font-medium"
              href="mailto:debshubham@gmail.com"
            >
              Email me
            </a>
            <a
              className="font-mono text-[0.78rem] tracking-[0.1em] uppercase px-[22px] py-3.5 rounded-sm inline-flex items-center gap-[0.6em] transition-colors border border-sage text-paper hover:bg-sage hover:text-ink"
              href="https://www.linkedin.com/in/shubham-deb"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-ink text-sage border-t border-sage/18">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-10 flex flex-wrap gap-3 justify-between items-center py-[26px] font-mono text-[0.72rem] tracking-[0.08em]">
          <span>© 2026 Shubham Deb — built with intent.</span>
          <span>42.36°N, 71.06°W</span>
        </div>
      </footer>
    </>
  );
}
