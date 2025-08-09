import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";

const Catalog = () => {
  return (
    <main>
      <Helmet>
        <title>Catalog — University of Praxis</title>
        <meta name="description" content="Degree requirements, housing, honors, admissions, and course listings at the University of Praxis." />
        <link rel="canonical" href="/catalog" />
      </Helmet>

      <section className="container mx-auto px-6 py-16 md:py-24">
        <header className="mb-10">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold">University Catalog</h1>
          <p className="text-muted-foreground mt-3 max-w-3xl">Explore degree structure, housing, Honors Collective, admissions, and the current course listings.</p>
        </header>

        {/* Degree Structure */}
        <section aria-labelledby="degree-structure">
          <h2 id="degree-structure" className="font-serif text-3xl font-semibold mb-4">Degree Structure</h2>
          <Card className="mb-8 bg-card/40">
            <CardHeader>
              <CardTitle>Four-Year Liberal Arts Degree</CardTitle>
              <CardDescription>
                The University of Praxis is a 4-year Liberal Arts university designed to nurture critical thinking, community responsibility, and common knowledge.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="gened">
                  <AccordionTrigger>General Education Requirements (45 Credits)</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-medium mb-2">English Core (11)</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                          <li>Writing Requirement (choose 4)</li>
                          <li>Literature Requirement (choose 4)</li>
                          <li>Communications Requirement (3)</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2">Math Core (10)</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                          <li>Lower Math Requirement (choose 4)</li>
                          <li>Upper Math Requirement (choose 4)</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2">Social Core (14)</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                          <li>Civics Requirement (3)</li>
                          <li>History Requirement (3)</li>
                          <li>Ethics Requirement (2)</li>
                          <li>Economics Requirement (2)</li>
                          <li>Fine Arts Requirement (choose 2)</li>
                          <li>Debate Requirement (2)</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2">Sciences Core (10)</h3>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                          <li>Natural Sciences Requirement (choose 4)</li>
                          <li>Physical Sciences Requirement (choose 4)</li>
                          <li>Laboratory Requirement (2)</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="major-reqs">
                  <AccordionTrigger>Major Requirements (40 Credits)</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">Begin in second semester of Year 2; varies by major.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="major-electives">
                  <AccordionTrigger>Major Electives (15 Credits)</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">Taken primarily in Year 4; options depend on your major.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="practicum">
                  <AccordionTrigger>Practicum Section (10 Credits)</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">Internships, research, TAing, or project courses connecting knowledge to practical skills; typically final semester.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="outer-electives">
                  <AccordionTrigger>Outer Major Electives (10 Credits)</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">Ten credits outside your discipline (e.g., CS majors take Sociology or Philosophy). May be interfiled or taken together.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Housing */}
        <section id="housing" className="mt-12">
          <h2 className="font-serif text-3xl font-semibold mb-4">Housing</h2>
          <p className="text-muted-foreground mb-6">Four primary options designed for different student needs.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card/40">
              <CardHeader>
                <CardTitle>Lynett Hall</CardTitle>
                <CardDescription>Reserved for upperclassmen</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>2-bedroom, 1-bath suite with living room and closet</li>
                  <li>Bedrooms: 2 loft beds, 2 desks, 2 small closets, plus large desk and mirror</li>
                  <li>Shared floor lounge; central game room and laundry</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-card/40">
              <CardHeader>
                <CardTitle>Honors Village</CardTitle>
                <CardDescription>Exclusively for Honors Collective</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>4-bedroom, 2-bath with living room, kitchen, washing machine</li>
                  <li>Each bedroom: 1 loft bed, desk, and small closet</li>
                  <li>Shared floor lounge; central game room and laundry</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-card/40">
              <CardHeader>
                <CardTitle>East Hall</CardTitle>
                <CardDescription>Priority for first-year students</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Single bedroom with 1–2 loft beds, desks, and small closet</li>
                  <li>Shared floor lounge and large shared bathrooms</li>
                  <li>Central game room and laundry</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-card/40">
              <CardHeader>
                <CardTitle>West Hall</CardTitle>
                <CardDescription>Single rooms with shared bathroom between pairs</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Single bedroom with 1–2 loft beds, desks, and small closet</li>
                  <li>Jack-and-Jill style bathroom shared by two rooms</li>
                  <li>Shared floor lounge; central game room and laundry</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Honors Collective */}
        <section id="honors" className="mt-12">
          <h2 className="font-serif text-3xl font-semibold mb-4">Honors Collective</h2>
          <p className="text-muted-foreground max-w-3xl">Invitation-only group for students who excelled in high school, nurturing an additional longing for knowledge. Approximately 15–20% of students achieve Honors status. Admissions by major, beginning in the second year.</p>
        </section>

        {/* Admissions */}
        <section id="admissions" className="mt-12">
          <h2 className="font-serif text-3xl font-semibold mb-4">Admissions</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 max-w-3xl">
            <li>Eligibility: Completion of Praxis Public Network High School with ≥ 7.0 score.</li>
            <li>Not admitted? Consider one year at Praxis Community Institute and apply as a transfer.</li>
            <li>International: Up to 15% of class; AP/IB/AICE exams recommended; valid English exam required.</li>
            <li>Competitive profile: ~9.5+ scores with strong thesis and defense; all admits reviewed for Honors.</li>
          </ul>
        </section>

        {/* Courses */}
        <section id="courses" className="mt-12">
          <h2 className="font-serif text-3xl font-semibold mb-4">Courses</h2>
          <p className="text-muted-foreground mb-4">Browse the current internal course listings. This is an embedded view; a dedicated portal will arrive later.</p>
          <AspectRatio ratio={16/9} className="rounded-lg border bg-card/40">
            <iframe
              title="UPraxis Course Catalog (Google Sheets)"
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQXXowjd_-GEeTh0FCALuzDHSwVSJFR9KYh8gaZY2Wkrca-b7G3DlIDvL43RqohNSJTCFD2divKBzIn/pubhtml?gid=0&single=true"
              className="w-full h-full rounded-lg"
              loading="lazy"
            />
          </AspectRatio>
        </section>

        {/* CTA */}
        <section className="mt-16 flex flex-wrap gap-4">
          <Button asChild variant="brand" size="lg" className="hover-scale">
            <Link to="/contact">Apply Now</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="hover-scale">
            <Link to="/programs">Explore Programs</Link>
          </Button>
        </section>
      </section>
    </main>
  );
};

export default Catalog;
