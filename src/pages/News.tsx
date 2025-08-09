import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const News = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <main>
      <Helmet>
        <title>News & Updates — University of Praxis</title>
        <meta name="description" content="Follow the latest updates from @UPraxisOrg and institutional announcements." />
        <link rel="canonical" href="/news" />
      </Helmet>
      <section className="container mx-auto px-6 py-16 md:py-24">
        <header className="mb-10">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold">News & Updates</h1>
          <p className="text-muted-foreground mt-3">Live updates from X and recent announcements.</p>
        </header>
        <div className="grid md:grid-cols-2 gap-8">
          <aside>
            <a className="twitter-timeline" data-theme="dark" data-height="600" href="https://twitter.com/UPraxisOrg?ref_src=twsrc%5Etfw">Tweets by UPraxisOrg</a>
          </aside>
          <section>
            <article className="rounded-lg border bg-card/40 p-6">
              <h2 className="text-xl font-medium mb-2">Announcement</h2>
              <p className="text-muted-foreground">Our first programs are in design. This space will host articles and updates as we build.</p>
            </article>
          </section>
        </div>
      </section>
    </main>
  );
};

export default News;
