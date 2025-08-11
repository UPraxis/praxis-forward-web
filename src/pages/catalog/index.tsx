import { Helmet } from "react-helmet-async";

const CatalogHome = () => {
    return (
        <main className="container mx-auto px-6 py-16 md:py-24 text-center">
            <Helmet>
                <title>University Catalog — University of Praxis</title>
                <meta
                    name="description"
                    content="Our University Catalog is currently in development."
                />
                <link rel="canonical" href="/catalog" />
            </Helmet>

            <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4">
                University Catalog
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our catalog is currently in progress.
                Please check back soon for details on programs, courses, and more.
            </p>
        </main>
    );
};

export default CatalogHome;
