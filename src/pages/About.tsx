import { Helmet } from "react-helmet-async";

const leaders = [
  { name: "A. Founder", title: "Founder & Chancellor" },
  { name: "B. Provost", title: "Provost" },
  { name: "C. Dean", title: "Dean of Programs" },
];

const About = () => {
  return (
    <main>
      <Helmet>
        <title>About — University of Praxis</title>
        <meta name="description" content="History, principles, and leadership of the University of Praxis." />
        <link rel="canonical" href="/about" />
      </Helmet>
      <section className="container mx-auto px-6 py-16 md:py-24">
        <header className="mb-10">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold">About</h1>
          <p className="text-muted-foreground mt-3 max-w-3xl">We are building a university for the future: rigorous, applied, and principled. Our founding principles unite scholarship with practical action.</p>
        </header>

        <article className="space-y-3">
          <h2 className="text-2xl font-medium">History & Principles</h2>
          <p className="text-muted-foreground">University of Praxis (UPraxis) emerged from the conviction that education must directly engage with the world. We prioritize excellence, responsibility, apprenticeship, and the courage to build.</p>
        </article>

        <section className="mt-16">
          <h2 className="font-serif text-3xl font-semibold mb-6">Leadership</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {leaders.map((p) => (
              <div key={p.name} className="rounded-lg border p-6 bg-card/40">
                <div className="aspect-square w-full rounded-md bg-muted/20 border flex items-center justify-center text-sm text-muted-foreground">Photo</div>
                <h3 className="mt-4 text-xl font-medium">{p.name}</h3>
                <p className="text-muted-foreground">{p.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-serif text-3xl font-semibold mb-6">Milestones</h2>
          <ol className="relative border-l pl-6">
            {[
              { year: "2024", text: "Concept founded and alliance with Praxis Nation." },
              { year: "2025", text: "Program design and pilot cohorts." },
              { year: "2026", text: "Public launch and first graduating class." },
            ].map((m) => (
              <li key={m.year} className="mb-8">
                <div className="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-brand" />
                <p className="text-sm text-muted-foreground">{m.year}</p>
                <p className="font-medium">{m.text}</p>
              </li>
            ))}
          </ol>
        </section>
      </section>
    </main>
  );
};

export default About;
