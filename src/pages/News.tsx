import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: (element?: HTMLElement) => void;
      };
    };
  }
}

const News: React.FC = () => {
  const twitterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadTwitterScript = () => {
      if (!document.querySelector('script[src="https://platform.twitter.com/widgets.js"]')) {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.onload = () => {
          if (window.twttr && window.twttr.widgets && twitterRef.current) {
            window.twttr.widgets.load(twitterRef.current);
          }
        };
        document.body.appendChild(script);
      } else {
        if (window.twttr && window.twttr.widgets && twitterRef.current) {
          window.twttr.widgets.load(twitterRef.current);
        }
      }
    };

    loadTwitterScript();
  }, []);

  return (
      <main>
        <title>News & Blog — University of Praxis</title>
        <meta
            name="description"
            content="Follow the latest updates, articles, and announcements from the University of Praxis."
        />
        <link rel="canonical" href="/news" />

        <section className="container mx-auto px-6 py-16 md:py-24">
          <header className="mb-12 text-center">
            <h1 className="font-serif text-5xl font-semibold">News & Blog</h1>
            <p className="text-muted-foreground mt-3 text-lg">Follow us for updates and stories.</p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Fountain Ink Link */}
            <div className="rounded-lg border border-gray-700 bg-card/40 p-6 text-center">
              <h2 className="text-2xl font-semibold mb-4">Read on Fountain Ink</h2>
              <p className="text-muted-foreground mb-6">
                Long-form stories, articles, and insights from the University of Praxis.
              </p>
              <a
                  href="https://fountain.ink/u/upraxisorg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 rounded-lg bg-primary text-black hover:bg-primary/90 transition-colors"
              >
                Visit Fountain Ink
              </a>
            </div>

            <div className="rounded-lg border border-gray-700 bg-card/40 p-6 text-center">
              <h2 className="text-2xl font-semibold mb-4">Check Our X</h2>
              <p className="text-muted-foreground mb-6">
                Short updates, announcements, and news from the University of Praxis.
              </p>
              <a
                  href="https://x.com/upraxisorg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 rounded-lg bg-primary text-black hover:bg-primary/90 transition-colors"
              >
                Visit X/Twitter
              </a>
            </div>
          </div>
        </section>
      </main>
  );
};

export default News;
