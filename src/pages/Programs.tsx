import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";

const Programs = () => {
  return (
    <main>
      <Helmet>
        <title>Programs — University of Praxis</title>
        <meta name="description" content="Academic tracks, alternative model, and application process at UPraxis." />
        <link rel="canonical" href="/programs" />
      </Helmet>
      <section className="container mx-auto px-6 py-16 md:py-24">
        <header className="mb-10">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold">Programs</h1>
          <p className="text-muted-foreground mt-3 max-w-3xl">Explore tracks, our alternative model, and the path to apply.</p>
        </header>

        <section id="tracks" className="mt-10">
          <h2 className="font-serif text-3xl font-semibold mb-4">Academic Tracks</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Engineering Praxis", desc: "Build systems and infrastructure with mentorship and real projects." },
              { title: "Civic Leadership", desc: "Practice governance, policy, and institution design." },
              { title: "Creative Arts & Media", desc: "Make cultural works that shape the future." },
            ].map((t) => (
              <article key={t.title} className="rounded-lg border bg-card/40 p-6">
                <h3 className="text-xl font-medium mb-2">{t.title}</h3>
                <p className="text-muted-foreground">{t.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="model" className="mt-16">
          <h2 className="font-serif text-3xl font-semibold mb-4">Alternative Education Model</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Mastery-based progress with portfolio evaluations</li>
            <li>Apprenticeships and studio practice</li>
            <li>Interdisciplinary seminars</li>
            <li>Public demonstrations and critique</li>
          </ul>
        </section>

        <section id="apply" className="mt-16">
          <h2 className="font-serif text-3xl font-semibold mb-4">Apply</h2>
          <p className="text-muted-foreground mb-6">Interested in joining a future cohort? Begin the conversation.</p>
          <Button variant="brand" size="lg" asChild>
            <a href="/contact">Apply Now</a>
          </Button>
        </section>
      </section>
    </main>
  );
};

export default Programs;
