import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/logo-upraxis.png";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinkCls = ({ isActive }: { isActive: boolean }) =>
  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex items-center justify-between px-6 h-16">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="University of Praxis logo" className="h-8 w-8" />
          <span className="font-serif text-lg">University of Praxis</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/about" className={navLinkCls} end>About</NavLink>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-muted-foreground hover:text-foreground">Programs</DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="z-50 bg-background">
              <DropdownMenuItem asChild><NavLink to="/programs#tracks" end className={navLinkCls}>Tracks</NavLink></DropdownMenuItem>
              <DropdownMenuItem asChild><NavLink to="/programs#model" end className={navLinkCls}>Model</NavLink></DropdownMenuItem>
              <DropdownMenuItem asChild><NavLink to="/programs#apply" end className={navLinkCls}>Apply</NavLink></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <NavLink to="/catalog" className={navLinkCls} end>Catalog</NavLink>
          <NavLink to="/news" className={navLinkCls} end>News</NavLink>
          <NavLink to="/contact" className={navLinkCls} end>Contact</NavLink>
        </div>
        <div className="hidden md:block">
          <Button asChild variant="brand" size="sm"><Link to="/contact">Apply Now</Link></Button>
        </div>

        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu"><Menu /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="z-50 bg-background">
              <DropdownMenuItem asChild><NavLink to="/about" className={navLinkCls} end>About</NavLink></DropdownMenuItem>
              <DropdownMenuItem asChild><NavLink to="/programs" className={navLinkCls} end>Programs</NavLink></DropdownMenuItem>
              <DropdownMenuItem asChild><NavLink to="/catalog" className={navLinkCls} end>Catalog</NavLink></DropdownMenuItem>
              <DropdownMenuItem asChild><NavLink to="/news" className={navLinkCls} end>News</NavLink></DropdownMenuItem>
              <DropdownMenuItem asChild><NavLink to="/contact" className={navLinkCls} end>Contact</NavLink></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};

export default Header;
