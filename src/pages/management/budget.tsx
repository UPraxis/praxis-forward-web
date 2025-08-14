import React from "react";
import { Helmet } from "react-helmet-async";

const Budget: React.FC = () => {
    return (
        <main>
            <Helmet>
                <title>Budget — University of Praxis</title>
                <meta
                    name="description"
                    content="Explore the University of Praxis budget details and allocations."
                />
                <link rel="canonical" href="/budget" />
            </Helmet>

            <section className="container mx-auto px-6 py-16 md:py-24">
                <header className="mb-10">
                    <h1 className="font-serif text-4xl md:text-5xl font-semibold">Budget</h1>
                    <p className="text-muted-foreground mt-3 max-w-3xl">
                        Here you can explore the detailed budget and allocations for the University of Praxis.
                    </p>
                </header>

                <section className="mt-16">
                    <h2 className="font-serif text-3xl font-semibold mb-6">Financial Overview</h2>
                    <div className="w-full overflow-x-auto border rounded-lg">
                        <iframe
                            title="University of Praxis Budget"
                            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQhsyf2vqMr12eOw_Vk-5AHOAW38FxOyZwRShhYzeinW6-mOgNzirIJTMimKEvJKVEWOYaRPN9XGRIC/pubhtml"
                            width="100%"
                            height="600"
                            className="rounded-lg"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                </section>
            </section>
        </main>
    );
};

export default Budget;
