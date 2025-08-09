import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent", description: "Thank you, we'll be in touch." });
    }, 800);
  };

  return (
    <main>
      <Helmet>
        <title>Contact — University of Praxis</title>
        <meta name="description" content="Contact the University of Praxis. Follow social channels or reach out directly." />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <section className="container mx-auto px-6 py-16 md:py-24">
        <header className="mb-10">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold">Contact</h1>
          <p className="text-muted-foreground mt-3 max-w-2xl">For inquiries and early interest, use the form below or connect via social.</p>
        </header>

        <div className="grid md:grid-cols-2 gap-10">
          <form onSubmit={onSubmit} className="rounded-lg border bg-card/40 p-6 space-y-4">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <Input required name="name" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <Input required type="email" name="email" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <Textarea required name="message" placeholder="How can we help?" rows={5} />
            </div>
            <Button type="submit" variant="brand" disabled={loading}>{loading ? "Sending…" : "Send"}</Button>
          </form>

          <aside className="rounded-lg border bg-card/40 p-6">
            <h2 className="text-xl font-medium mb-2">Social & Support</h2>
            <ul className="text-muted-foreground space-y-2 list-disc pl-5">
              <li><a className="story-link" href="https://x.com/UPraxisOrg" target="_blank" rel="noreferrer">@UPraxisOrg on X</a></li>
              <li>Ethereum donations: 0x1deab74402c897C7159051c38DE33d639E7dAB21</li>
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default Contact;
