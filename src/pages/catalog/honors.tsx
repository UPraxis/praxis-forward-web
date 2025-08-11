import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Honors = () => {
    return (
        <main className="container mx-auto px-6 py-16 md:py-24 max-w-4xl">
            <Helmet>
                <title>Honors Collective — University of Praxis</title>
                <meta
                    name="description"
                    content="Information about the invitation-only Honors Collective program at the University of Praxis."
                />
                <link rel="canonical" href="/catalog/honors" />
            </Helmet>

            <header className="mb-12">
                <h1 className="font-serif text-4xl font-semibold mb-4">Honors Collective</h1>
                <p className="text-muted-foreground leading-relaxed">
                    The Honors Collective is an exclusive, invitation-only community within the University of Praxis that recognizes and supports students who have demonstrated exceptional academic achievement and leadership potential during high school.
                    Approximately 15-20% of students earn Honors status based on rigorous criteria.
                    Admissions to the Honors Collective are by major and begin in the second year of study.
                </p>
            </header>

            <section className="mb-12 space-y-6">
                <h2 className="font-serif text-2xl font-semibold">Benefits of Membership</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li><strong>Advanced Seminars:</strong> Participate in small, discussion-based seminars led by esteemed faculty to deepen your understanding beyond standard coursework.</li>
                    <li><strong>Research Opportunities:</strong> Gain early access to faculty-led research projects and independent study options tailored to your academic interests.</li>
                    <li><strong>Priority Registration:</strong> Enjoy early course registration to secure spots in high-demand classes and electives.</li>
                    <li><strong>Dedicated Mentorship:</strong> Receive one-on-one mentorship from faculty advisors and senior Honors students to guide your academic and professional development.</li>
                    <li><strong>Exclusive Events:</strong> Attend workshops, guest lectures, and social events designed to foster intellectual growth and community among Honors members.</li>
                    <li><strong>Leadership and Service:</strong> Opportunities to lead Honors initiatives, participate in community service projects, and build a strong campus presence.</li>
                    <li><strong>Recognition:</strong> Honors designation on your transcript and diploma, highlighting your commitment to academic excellence.</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="font-serif text-2xl font-semibold">Admission Criteria and Process</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                    Admission to the Honors Collective is competitive and based on a combination of high school academic performance, recommendation letters, and demonstrated commitment to intellectual growth. Students typically receive invitations at the end of their first year and begin participation in their second year, tailored by major.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                    Students admitted to the Honors Collective are expected to maintain a high GPA, actively engage in Honors programming, and contribute positively to the community.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="font-serif text-2xl font-semibold">Join the Community</h2>
                <p className="text-muted-foreground leading-relaxed">
                    Being part of the Honors Collective opens doors to a vibrant community of passionate scholars dedicated to academic excellence, collaboration, and lifelong learning. If you’re invited, we encourage you to embrace this opportunity to challenge yourself and grow.
                </p>
            </section>

            <Button asChild variant="outline" size="lg" className="mt-8">
                <Link to="/catalog">Back to Catalog Home</Link>
            </Button>
        </main>
    );
};

export default Honors;
