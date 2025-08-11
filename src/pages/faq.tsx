import { Helmet } from "react-helmet-async";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqs = [
    {
        q: "Is the University of Praxis accredited?",
        a: "We are actively pursuing accreditation and working with transfer partners. Our focus is on real-world skills and recognized achievements."
    },
    {
        q: "What makes UPraxis different from other universities?",
        a: "We combine rigorous academics with hands-on projects, require interdisciplinary learning, and connect you directly with industry leaders and startups."
    },
    {
        q: "Who can apply to UPraxis?",
        a: "Anyone who completes the Praxis Public Network High School with a 7.0+ score, or holds a valid high school diploma and English exam, is eligible to apply."
    },
    {
        q: "What is the tuition cost?",
        a: "Tuition is $700 per credit hour, which includes all coursework, teaching, and student activities."
    },
    {
        q: "Are there international student spots?",
        a: "Yes, up to 15% of each cohort may be international students. These spots are highly competitive."
    },
    {
        q: "Where is the campus located?",
        a: "Our primary campus is in partnership with Praxis Nation. We also offer hybrid and international experiences."
    },
    {
        q: "When do applications open?",
        a: "Applications for the Spring 2025 cohort open September 1, 2025. See the Admissions page for details."
    },
    {
        q: "How can I get more information or ask questions?",
        a: "You can contact us directly via the Contact page or follow us on X (@UPraxisOrg) for updates."
    }
];

const FAQ = () => (
    <main>
        <Helmet>
            <title>FAQ — University of Praxis</title>
            <meta name="description" content="Frequently asked questions about the University of Praxis, admissions, programs, and more." />
            <link rel="canonical" href="/faq" />
        </Helmet>
        <section className="container mx-auto px-6 py-16 md:py-24">
            <header className="mb-12 text-center">
                <h1 className="font-serif text-5xl font-semibold">Frequently Asked Questions</h1>
                <p className="text-muted-foreground mt-3 text-lg">Find answers to common questions about UPraxis.</p>
            </header>
            <Accordion type="multiple" className="max-w-3xl mx-auto space-y-4">
                {faqs.map((item, i) => (
                    <AccordionItem key={i} value={`faq-${i}`}>
                        <AccordionTrigger>{item.q}</AccordionTrigger>
                        <AccordionContent>{item.a}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
            <div className="mt-12 text-center">
                <Button asChild variant="brand" size="lg">
                    <Link to="/contact">Still have questions? Contact Us</Link>
                </Button>
            </div>
        </section>
    </main>
);

export default FAQ;