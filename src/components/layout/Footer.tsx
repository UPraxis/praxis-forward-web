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
        <div className="container mx-auto px-6 py-10 grid gap-8 md:grid-cols-3 text-sm">

          {/* Brand Section */}
          <div className="space-y-2">
            <h4 className="font-serif text-lg">University of Praxis</h4>
            <p className="text-muted-foreground">Built for the Future.</p>
          </div>

          {/* Navigation Links */}
          <nav aria-label="Footer navigation">
            <h5 className="font-semibold mb-3">Explore</h5>
            <ul className="space-y-2">
              <li><a className="story-link block" href="/about">About</a></li>
              <li><a className="story-link block" href="/programs">Programs</a></li>
              <li><a className="story-link block" href="/catalog">Catalog</a></li>
              <li><a className="story-link block" href="https://fountain.ink/u/upraxisorg">Blog</a></li>
              <li><a className="story-link block" href="/contact">Contact</a></li>
            </ul>
          </nav>

          {/* Connect Section */}
          <div>
            <h5 className="font-semibold mb-3">Connect</h5>
            <div className="flex items-center gap-4">
              <a
                  href="https://x.com/UPraxisOrg"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="UPraxis on X"
                  className="hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
              </a>

              <button
                  onClick={copyEth}
                  className="inline-flex items-center gap-2 hover-scale"
                  aria-label="Copy Ethereum address"
              >
                <Coins className="h-5 w-5" />
                <span className="text-xs font-mono">
                {ETH_ADDRESS.slice(0, 6)}…{ETH_ADDRESS.slice(-4)}
              </span>
                <Copy className="h-4 w-4" />
              </button>
            </div>

            <p className="text-muted-foreground mt-6">
              © {new Date().getFullYear()} University of Praxis
            </p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
