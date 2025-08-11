import React from "react";
import { Helmet } from "react-helmet-async";
import { FaTwitter, FaLinkedin, FaXTwitter } from "react-icons/fa6";

type SocialKey = "twitter" | "linkedin" | "x";

interface Leader {
  name: string;
  title: string;
  photo: string;
  socials: Partial<Record<SocialKey, string>>;
}

const leaders: Leader[] = [
  {
    name: "Kayla A",
    title: "Founder & President",
    photo: "fac-kaylaa.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/kalebarora",
      x: "https://x.com/kaylamchicanery",
    },
  },
  {
    name: "Matt Robertson",
    title: "Dean of Business",
    photo: "/fac-mattr.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/heymattroberson/",
    },
  },
  {
    name: "Khamenma OG",
    title: "Dean of Engineering",
    photo: "/fac-khamemao.jpg",
    socials: {
      x: "https://twitter.com/khamemaog",
    },
  },
  {
    name: "K.T. Dash",
    title: "Dean of Liberal Arts",
    photo: "fac-ktdash.png",
    socials: {
    },
  },
  {
    name: "Jenni Jones",
    title: "Head of IT",
    photo: "fac-jennij.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/jenni-jones-b4a243355/"
    },
    },
];

const socialIconMap: Record<SocialKey, React.ComponentType<{ className?: string }>> = {
  twitter: FaTwitter,
  linkedin: FaLinkedin,
  x: FaXTwitter,
};

const About: React.FC = () => {
  return (
      <main>
        <Helmet>
          <title>About — University of Praxis</title>
          <meta
              name="description"
              content="History, principles, and leadership of the University of Praxis."
          />
          <link rel="canonical" href="/about" />
        </Helmet>

        <section className="container mx-auto px-6 py-16 md:py-24">
          <header className="mb-10">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold">About</h1>
            <p className="text-muted-foreground mt-3 max-w-3xl">
              We are building a university for the future: rigorous, applied, and principled.
              Our founding principles unite scholarship with practical action.
            </p>
          </header>

          <article className="space-y-3">
            <h2 className="text-2xl font-medium">History &amp; Principles</h2>
            <p className="text-muted-foreground">
              University of Praxis (UPraxis) emerged from the conviction that education must
              directly engage with the world. We prioritize excellence, responsibility,
              apprenticeship, and the courage to build.
            </p>
          </article>

          <section className="mt-16">
            <h2 className="font-serif text-3xl font-semibold mb-6">Leadership</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {leaders.map(({ name, title, photo, socials }) => (
                  <div
                      key={name}
                      className="rounded-lg border p-6 bg-card/40 flex flex-col items-center"
                  >
                    <img
                        src={photo}
                        alt={`Photo of ${name}`}
                        className="aspect-square w-40 rounded-md object-cover border"
                    />
                    <h3 className="mt-4 text-xl font-medium">{name}</h3>
                    <p className="text-muted-foreground">{title}</p>
                    <div className="mt-3 flex space-x-4 text-xl text-muted-foreground">
                      {socials &&
                          Object.entries(socials).map(([key, url]) => {
                            if (!["twitter", "linkedin", "x"].includes(key)) return null;
                            const Icon = socialIconMap[key as SocialKey];
                            if (!Icon) return null;
                            return (
                                <a
                                    key={key}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${name}'s ${key} profile`}
                                    className="hover:text-brand transition"
                                >
                                  <Icon />
                                </a>
                            );
                          })}
                    </div>
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
              ].map(({ year, text }) => (
                  <li key={year} className="mb-8">
                    <div className="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-brand" />
                    <p className="text-sm text-muted-foreground">{year}</p>
                    <p className="font-medium">{text}</p>
                  </li>
              ))}
            </ol>
          </section>
        </section>
      </main>
  );
};

export default About;
