import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Firm Info */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">{siteConfig.firmNameShort}</h3>
            <p className="text-sm text-primary-foreground/70 mb-4 font-body">
              Dedicated legal representation in bankruptcy and litigation matters. Serving Miami and South Florida with integrity and commitment.
            </p>
            <div className="flex gap-3">
              <a href={siteConfig.social.linkedin} aria-label="LinkedIn" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                LinkedIn
              </a>
              <a href={siteConfig.social.facebook} aria-label="Facebook" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                Facebook
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-body">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "FAQ", path: "/faq" },
                { label: "Contact", path: "/contact" },
                { label: "Privacy Policy", path: "/privacy" },
                { label: "Terms of Service", path: "/terms" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Practice Areas</h4>
            <ul className="space-y-2 font-body">
              <li>
                <Link to="/practice-areas/bankruptcy" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  Bankruptcy Law
                </Link>
              </li>
              <li>
                <Link to="/practice-areas/litigation" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  Business Litigation
                </Link>
              </li>
              <li>
                <Link to="/practice-areas" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  View All →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 font-body">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <a href={`tel:${siteConfig.phoneRaw}`} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <span className="text-sm text-primary-foreground/70">{siteConfig.address.full}</span>
              </li>
            </ul>
            <p className="text-xs text-primary-foreground/50 mt-4">{siteConfig.hours}</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <p className="text-xs text-primary-foreground/50 font-body text-center max-w-3xl mx-auto">
            © {new Date().getFullYear()} {siteConfig.firmName}. All rights reserved. Attorney Sundeep K. Mullick is licensed to practice law in Florida. This website is for informational purposes only and does not constitute legal advice. The information on this site should not be used as a substitute for legal counsel from a qualified attorney. Contacting this firm does not create an attorney-client relationship.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
