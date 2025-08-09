import { Twitter, Copy, Coins } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ETH_ADDRESS = "0x1deab74402c897C7159051c38DE33d639E7dAB21";

const Footer = () => {
  const { toast } = useToast();

  const copyEth = async () => {
    await navigator.clipboard.writeText(ETH_ADDRESS);
    toast({
      title: "Address copied",
      description: "Ethereum address copied to clipboard.",
    });
  };

  return (
    <footer className="border-t mt-12">
      <div className="container mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h4 className="font-serif text-lg mb-2">University of Praxis</h4>
          <p className="text-muted-foreground">Built for the Future.</p>
        </div>
        <nav aria-label="Footer navigation" className="space-y-2">
          <a className="story-link block" href="/about">About</a>
          <a className="story-link block" href="/programs">Programs</a>
          <a className="story-link block" href="/catalog">Catalog</a>
          <a className="story-link block" href="/news">News & Updates</a>
          <a className="story-link block" href="/contact">Contact</a>
        </nav>
        <div>
          <p className="mb-3">Connect</p>
          <div className="flex items-center gap-4">
            <a href="https://x.com/UPraxisOrg" target="_blank" rel="noreferrer" aria-label="UPraxis on X">
              <Twitter className="h-5 w-5" />
            </a>
            <button onClick={copyEth} className="inline-flex items-center gap-2 hover-scale" aria-label="Copy Ethereum address">
              <Coins className="h-5 w-5" />
              <span className="text-xs">{ETH_ADDRESS.slice(0, 6)}…{ETH_ADDRESS.slice(-4)}</span>
              <Copy className="h-4 w-4" />
            </button>
          </div>
          <p className="text-muted-foreground mt-4">© {new Date().getFullYear()} University of Praxis</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
