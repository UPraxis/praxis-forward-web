import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Admissions = () => {
    return (
        <>
            <Helmet>
                <title>Admissions — University of Praxis</title>
                <meta
                    name="description"
                    content="Apply to the University of Praxis. Join a revolutionary model of higher education that unites theory with real-world action."
                />
                <link rel="canonical" href="/admissions" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: "Admissions - University of Praxis",
                        url: "/admissions",
                        isPartOf: {
                            "@type": "WebSite",
                            name: "University of Praxis",
                            url: "/",
                        },
                        description:
                            "Apply to join the University of Praxis and become part of the future of higher education.",
                    })}
                </script>
            </Helmet>

            <header className="sr-only">
                <h1>Admissions - University of Praxis</h1>
            </header>

            <main>
                {/* Hero */}
                <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
                    <div className="relative min-h-[50vh] flex items-center">
                        <div className="container mx-auto px-6 py-24 md:py-32">
                            <p className="text-sm tracking-widest text-muted-foreground mb-4">
                                Join the Future
                            </p>
                            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight font-semibold animate-enter">
                                Admissions
                            </h2>
                            <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground animate-fade-in">
                                Ready to transform your education? Join innovators, activists,
                                and visionaries building the future.
                            </p>
                            <div className="mt-10">
                                <Button asChild variant="brand" size="lg">
                                    <a href="#application" className="scroll-smooth">
                                        Start Application
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Eligibility & Admission Criteria */}
                <section className="container mx-auto px-6 py-16 md:py-24">
                    <h3 className="font-serif text-3xl md:text-4xl font-semibold mb-10">
                        Eligibility & Admission Criteria
                    </h3>
                    <div className="space-y-8 max-w-4xl text-muted-foreground">
                        <p>
                            All students who complete the High School section of Praxis Public
                            Network with at least a <strong>7.0 score</strong>, or who hold a
                            valid high school diploma <em>and</em> a valid English exam are
                            eligible to apply to the University of Praxis.
                        </p>
                        <p>
                            Students who complete their high school and are not admitted are
                            advised to take courses at Praxis Community Institute for a year
                            before applying as transfer students.
                        </p>
                        <p>
                            We admit a maximum of <strong>15%</strong> international students,
                            making these spots highly competitive. International applicants are
                            encouraged to take <strong>AP, IB, or AICE exams</strong> to
                            demonstrate knowledge across subjects.
                        </p>
                        <p>
                            All applicants must submit a valid English proficiency exam to
                            demonstrate language competence.
                        </p>
                        <p>
                            Admitted students will be referred to the <strong>Honors Collective</strong> for
                            further evaluation. Historically, admitted students have
                            demonstrated scores around <strong>9.5+</strong>, alongside a strong
                            thesis and defense.
                        </p>
                    </div>
                </section>

                {/* Application Process */}
                <section className="container mx-auto px-6 py-16 md:py-24">
                    <h3 className="font-serif text-3xl md:text-4xl font-semibold mb-10">
                        Application Process
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Submit Application",
                                desc: "Complete our application form with your personal statement, academic history, and any other required or relevant documents.",
                            },
                            {
                                step: "02",
                                title: "Application Review",
                                desc: "Our admissions team reviews your application and if they wish to move forward you will be invited to an interview.",
                            },
                            {
                                step: "03",
                                title: "Interview & Decision",
                                desc: "Selected candidates participate in a conversation about their experiences and receive admission decision within 2 weeks.",
                            },
                        ].map((item) => (
                            <article
                                key={item.step}
                                className="rounded-lg border bg-card/40 p-6 hover:shadow-[var(--shadow-glow)] transition-shadow"
                            >
                                <div className="text-2xl font-serif font-semibold text-muted-foreground mb-2">
                                    {item.step}
                                </div>
                                <h4 className="text-xl font-medium mb-3">{item.title}</h4>
                                <p className="text-muted-foreground">{item.desc}</p>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Cohorts & Deadlines */}
                {/* Cohorts & Deadlines */}
                <section className="container mx-auto px-6 py-16 md:py-24">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Left column: Upcoming Cohorts */}
                        <div>
                            <h3 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                                Upcoming Cohorts
                            </h3>
                            <div className="space-y-6">
                                <div className="rounded-lg border bg-card/40 p-6">
                                    <div className="flex justify-between items-start mb-3">
                                        <h4 className="text-xl font-medium">Spring 2025 Cohort</h4>
                                        <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
              Soon
            </span>
                                    </div>
                                    <p className="text-muted-foreground mb-4">
                                        Join our inaugural cohort of 300 students in a transformative
                                        learning experience.
                                    </p>
                                    <div className="space-y-2 text-sm text-muted-foreground">
                                        <p>Applications Open: September 1, 2024</p>
                                        <p>Program Starts: January 1, 2025</p>
                                    </div>
                                </div>

                                <div className="rounded-lg border bg-card/20 p-6 opacity-80">
                                    <div className="flex justify-between items-start mb-3">
                                        <h4 className="text-xl font-medium">Fall 2026 Cohort</h4>
                                        <span className="text-sm bg-muted text-muted-foreground px-2 py-1 rounded">
              Upcoming
            </span>
                                    </div>
                                    <p className="text-muted-foreground mb-4">
                                        Our second cohort will build on the success of the first, expanding
                                        our community and impact.
                                    </p>
                                    <div className="space-y-2 text-sm text-muted-foreground">
                                        <p>Application Deadline: May 1, 2026</p>
                                        <p>Decision Notifications: June 1, 2026</p>
                                        <p>Program Starts: August 30, 2026</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right column: Tuition & Support */}
                        <div>
                            <h3 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                                Tuition & Support
                            </h3>
                            <div className="rounded-lg border bg-card/40 p-6 shadow-[var(--shadow-elegant)]">
                                <h4 className="text-xl font-medium mb-4">Investment in Your Future</h4>
                                <div className="space-y-4">
                                    <div>
                                        <p className="font-medium">Tuition: $700/credit hour</p>
                                        <p className="text-sm text-muted-foreground">
                                            Includes all coursework, teaching, and student activities
                                        </p>
                                    </div>
                                    <div>
                                        <p className="font-medium">Student Government</p>
                                        <p className="text-sm text-muted-foreground">
                                            Funded by student fees, this body manages student activities and
                                            events, ensuring a vibrant campus life.
                                        </p>
                                    </div>
                                    <div>
                                        <p className="font-medium">Career Services</p>
                                        <p className="text-sm text-muted-foreground">
                                            A dedicated team of to help you with internships, job placements,
                                            and career development, connecting you with industry leaders.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Application CTA */}
                <section id="application" className="bg-muted/10 py-16 md:py-24 border-t border-b">
                    <div className="container mx-auto px-6 text-center">
                        <h3 className="font-serif text-3xl md:text-4xl font-semibold mb-6">Ready to Apply?</h3>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Join the next generation of builders, thinkers, and leaders. Your education should prepare you for the world as it will be, not as it was.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild variant="brand" size="lg">
                                <a href="" target="_blank" rel="noreferrer">Application Opening Soon</a>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <Link to="/contact">Questions? Contact Us</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* FAQ Preview */}
                <section className="container mx-auto px-6 py-16 md:py-24">
                    <div className="max-w-3xl">
                        <h3 className="font-serif text-3xl md:text-4xl font-semibold mb-6">Common Questions</h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-medium mb-2">Is UPraxis accredited?</h4>
                                <p className="text-muted-foreground">We are pursuing accreditation and working with transfer partners. Our focus is on real-world skills and recognized achievements.</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-medium mb-2">What makes UPraxis different?</h4>
                                <p className="text-muted-foreground">We combine rigorous academics with hands-on projects, require interdisciplinary learning, and connect you directly with industry leaders and startups.</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-medium mb-2">Where is the campus located?</h4>
                                <p className="text-muted-foreground">Our primary campus is in partnership with Praxis Nation. We also offer hybrid learning options and international experiences.</p>
                            </div>
                        </div>
                        <div className="mt-8">
                            <Button asChild variant="ghost">
                                <Link to="/faq">View All FAQs</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Admissions;