import { Helmet } from "react-helmet-async";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Courses = () => {
    return (
        <main className="container mx-auto px-6 py-16 md:py-24 max-w-6xl">
            <Helmet>
                <title>Course Listings — University of Praxis</title>
                <meta
                    name="description"
                    content="Browse the current course offerings available at the University of Praxis."
                />
                <link rel="canonical" href="/catalog/courses" />
            </Helmet>

            <header className="mb-12">
                <h1 className="font-serif text-4xl font-semibold mb-4">Course Listings</h1>
                <p className="text-muted-foreground max-w-4xl leading-relaxed mb-8">
                    The University of Praxis utilizes an internal course management system. Below is the current course catalog snapshot.
                    A dedicated course portal will be available soon.
                </p>
            </header>

            <AspectRatio ratio={16 / 9} className="rounded-lg border bg-card/40">
                <iframe
                    title="University of Praxis Course Catalog"
                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQXXowjd_-GEeTh0FCALuzDHSwVSJFR9KYh8gaZY2Wkrca-b7G3DlIDvL43RqohNSJTCFD2divKBzIn/pubhtml?gid=0&single=true"
                    className="w-full h-full rounded-lg"
                    loading="lazy"
                />
            </AspectRatio>

            <Button asChild variant="outline" size="lg" className="mt-12">
                <Link to="/catalog">Back to Catalog Home</Link>
            </Button>
        </main>
    );
};

export default Courses;
