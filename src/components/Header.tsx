import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Practice Areas", path: "/practice-areas" },
  { label: "About", path: "/about" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col group items-center lg:items-start">
            <span
              className={cn(
                "font-heading text-xl lg:text-2xl font-bold tracking-wide transition-colors duration-300 uppercase",
                scrolled ? "text-primary" : "text-white"
              )}
            >
              MULLICK LAW
            </span>
            <span
              className={cn(
                "text-[10px] tracking-[0.2em] font-medium uppercase transition-colors duration-300",
                scrolled ? "text-muted-foreground" : "text-white/80"
              )}
            >
              Attorneys at Law
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-300 relative group/link",
                  location.pathname === link.path
                    ? "text-accent"
                    : scrolled
                      ? "text-primary hover:text-accent"
                      : "text-white/90 hover:text-accent"
                )}
              >
                {link.label}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover/link:w-full",
                  location.pathname === link.path ? "w-full" : ""
                )} />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className={cn(
                "text-xs font-semibold tracking-wider uppercase transition-colors duration-300 flex items-center gap-2",
                scrolled
                  ? "text-primary hover:text-accent"
                  : "text-white/90 hover:text-accent"
              )}
            >
              <Phone className="h-3.5 w-3.5" />
              {siteConfig.phone}
            </a>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-body text-xs font-bold tracking-wider uppercase px-6">
              <Link to="/contact">Free Consultation</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={cn(
              "lg:hidden p-2 transition-colors duration-300",
              scrolled ? "text-primary" : "text-white"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-3 text-base font-medium rounded-md transition-colors",
                  location.pathname === link.path
                    ? "text-accent bg-accent/10 font-semibold"
                    : "text-foreground/80 hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
            <hr className="my-2 border-border" />
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center gap-2 px-4 py-3 text-base font-medium text-foreground/80"
            >
              <Phone className="h-5 w-5" /> {siteConfig.phone}
            </a>
            <Button asChild className="mt-2 bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold">
              <Link to="/contact">Free Consultation</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
