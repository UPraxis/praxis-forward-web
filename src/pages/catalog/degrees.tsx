import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Degrees = () => {
    return (
        <main className="container mx-auto px-6 py-16 md:py-24">
            <Helmet>
                <title>Degree Requirements — University of Praxis</title>
                <meta
                    name="description"
                    content="Overview of degree requirements and structure for the Bachelor of Arts in Liberal Arts at the University of Praxis."
                />
                <link rel="canonical" href="/catalog/degrees" />
            </Helmet>

            <header className="mb-12">
                <h1 className="font-serif text-4xl font-semibold mb-4">Degree Requirements</h1>
                <p className="text-muted-foreground max-w-3xl leading-relaxed">
                    The University of Praxis is a four-year Liberal Arts university designed to nurture critical thinking, community responsibility, and broad-based knowledge.
                    The Bachelor of Arts degree consists of the following components:
                </p>
            </header>

            <Card className="bg-card/40">
                <CardHeader>
                    <CardTitle>Bachelor of Arts in Liberal Arts</CardTitle>
                    <CardDescription>
                        Degree completion requires 120 credits distributed across General Education, Major requirements, electives, and practicum.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        <AccordionItem value="gened">
                            <AccordionTrigger>General Education Requirements (45 Credits)</AccordionTrigger>
                            <AccordionContent>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-lg font-medium mb-2">English Core (11 Credits)</h3>
                                        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                                            <li>Writing Requirement (Choose 4 Credits)</li>
                                            <li>Literature Requirement (Choose 4 Credits)</li>
                                            <li>Communications Requirement (Choose 3 Credits)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium mb-2">Math Core (10 Credits)</h3>
                                        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                                            <li>Lower Math Requirement (Choose 4 Credits)</li>
                                            <li>Upper Math Requirement (Choose 4 Credits)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium mb-2">Social Core (14 Credits)</h3>
                                        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                                            <li>Civics Requirement (Choose 3 Credits)</li>
                                            <li>History Requirement (Choose 3 Credits)</li>
                                            <li>Ethics Requirement (Choose 2 Credits)</li>
                                            <li>Economics Requirement (Choose 2 Credits)</li>
                                            <li>Fine Arts Requirements (Choose 2 Credits)</li>
                                            <li>Debate Requirements (Choose 2 Credits)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium mb-2">Sciences Core (10 Credits)</h3>
                                        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                                            <li>Natural Sciences Requirement (Choose 4 Credits)</li>
                                            <li>Physical Sciences Requirement (Choose 4 Credits)</li>
                                            <li>Laboratory Requirement (Choose 2 Credits)</li>
                                        </ul>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="major-reqs">
                            <AccordionTrigger>Major Requirements (40 Credits)</AccordionTrigger>
                            <AccordionContent>
                                <p className="text-muted-foreground">
                                    Major requirements vary by discipline. Students begin these courses during their second semester of their sophomore year.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="major-electives">
                            <AccordionTrigger>Major Electives (15 Credits)</AccordionTrigger>
                            <AccordionContent>
                                <p className="text-muted-foreground">
                                    Major electives allow students to deepen knowledge in their field. These courses are typically taken during the senior year.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="practicum">
                            <AccordionTrigger>Practicum Section (10 Credits)</AccordionTrigger>
                            <AccordionContent>
                                <p className="text-muted-foreground">
                                    This section connects academic knowledge to practical skills through internships, research projects, teaching assistantships, or capstone courses. Usually completed in the final semester.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="outer-electives">
                            <AccordionTrigger>Electives Outside the Major (10 Credits)</AccordionTrigger>
                            <AccordionContent>
                                <p className="text-muted-foreground">
                                    Students take 10 credits in disciplines outside their major to encourage interdisciplinary learning. For example, Computer Science majors may choose Sociology or Philosophy courses.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
            </Card>

            <Button asChild variant="outline" size="lg" className="mt-12">
                <Link to="/catalog">Back to Catalog Home</Link>
            </Button>
        </main>
    );
};

export default Degrees;
