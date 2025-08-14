import { Helmet } from "react-helmet-async";
import heroImage from "../../public/hero-upraxis.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>University of Praxis — Built for the Future</title>
        <meta name="description" content="Explore the University of Praxis. Built for the Future with bold ideas, practical action, and a new model of higher education." />
        <link rel="canonical" href="/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "University of Praxis",
            url: "/",
            sameAs: [
              "upraxis.org",
            ],
            logo: "/src/assets/logo-upraxis.png",
            description: "Built for the Future. A revolutionary model of higher education.",
          })}
        </script>
      </Helmet>
      <header className="sr-only">
        <h1>University of Praxis</h1>
      </header>
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            className="relative min-h-[68vh] md:min-h-[78vh] flex items-center"
            style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            aria-label="Hero background"
          >
            <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
            <div className="relative z-10 container mx-auto px-6 py-24 md:py-32">
              <p className="text-sm tracking-widest text-muted-foreground mb-4">Built for the Future</p>
              <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight font-semibold animate-enter">
                University of Praxis
              </h2>
              <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground animate-fade-in">
                Education is broken. We are building a revolutionary institution for innovators, activists, and visionaries.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild variant="hero" size="lg" className="text-white">
                  <Link to="/about">About Us</Link>
                </Button>
                <Button asChild variant="brand" size="lg">
                  <Link to="/admissions">Apply Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="container mx-auto px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <article>
              <h3 className="font-serif text-3xl md:text-4xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground text-lg">
                UPraxis exists to transform higher education by uniting theory with real-world action. In partnership with Praxis Nation, we are creating a comprehensive education system grounded in responsibility, competence, and purpose.
              </p>
            </article>
            <aside className="rounded-lg border bg-card/40 p-6 shadow-[var(--shadow-elegant)]">
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Partnership</p>
              <h4 className="text-xl font-medium mb-3">Praxis</h4>
              <p className="text-muted-foreground">The worlds first Digital Nation. And our home.</p>
              <div className="mt-6">
                <Button asChild variant="outline">
                  <a href="https://x.com/praxisnation" target="_blank" rel="noreferrer">Follow Updates</a>
                </Button>
              </div>
            </aside>
          </div>
        </section>

        {/* Why Praxis */}
        <section className="bg-muted/10 py-16 md:py-24 border-t border-b">
          <div className="container mx-auto px-6">
            <h3 className="font-serif text-3xl md:text-4xl font-semibold mb-10">Why Praxis?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Applied Learning",
                  desc: "Learn by building. Projects, apprenticeships, and action over theory alone."
                },
                {
                  title: "OM Requirement",
                  desc: "Take 10 credits in a discipline far from your major, e.g., if you are studying Computer Science, take Philosophy or Sociology."
                },
                {
                  title: "Modernized Liberal Arts",
                  desc: "Gain a broad view of different fields to grow in general knowledge and critical thinking."
                },
              ].map((f) => (
                  <article key={f.title} className="rounded-lg border bg-card/40 p-6 hover:shadow-[var(--shadow-glow)] transition-shadow">
                    <h4 className="text-xl font-medium mb-2">{f.title}</h4>
                    <p className="text-muted-foreground">{f.desc}</p>
                  </article>
              ))}
            </div>
          </div>
        </section>


        {/* News preview */}
        <section className="container mx-auto px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <h3 className="font-serif text-3xl md:text-4xl font-semibold mb-4">News & Updates</h3>
            <p className="text-muted-foreground mb-6">Stay up to date with announcements and progress. Follow us on X or read our latest updates.</p>
            <div className="flex gap-4">
              <Button asChild variant="outline">
                <a href="https://x.com/UPraxisOrg" target="_blank" rel="noreferrer">Visit @UPraxisOrg</a>
              </Button>
              <Button asChild variant="ghost">
                <Link to="/news">Read More</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;
