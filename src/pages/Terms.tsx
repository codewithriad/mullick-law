import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { siteConfig } from "@/data/siteConfig";

const Terms = () => {
  return (
    <>
      <SEOHead
        title="Terms of Service — Mullick Law"
        description="Terms of service for the Law Office of Sundeep K. Mullick, P.A. website."
        canonical="https://mullicklaw.com/terms"
      />

      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-primary-foreground/60 text-sm font-body mb-2">
            <Link to="/" className="hover:text-accent">Home</Link> / Terms of Service
          </p>
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary-foreground">Terms of Service</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20 max-w-3xl">
        <div className="prose prose-sm max-w-none font-body text-foreground/80 space-y-6">
          <p><strong>Last Updated:</strong> January 2025</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Disclaimer</h2>
          <p>The information contained on this website is provided for general informational purposes only. Nothing on this site constitutes legal advice or creates an attorney-client relationship. You should not act or refrain from acting based on any information on this website without seeking professional legal counsel.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">No Attorney-Client Relationship</h2>
          <p>Visiting this website, sending an email, or filling out a contact form does not create an attorney-client relationship. An attorney-client relationship is only formed when there is an express written agreement between you and the Law Office of Sundeep K. Mullick, P.A.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Confidentiality</h2>
          <p>Do not send confidential information through this website until an attorney-client relationship has been established. Any information sent prior to establishing such a relationship may not be treated as confidential or privileged.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Results</h2>
          <p>Past results do not guarantee future outcomes. Each case is unique and must be evaluated on its own facts and circumstances. Case results described on this website are meant to provide general information and should not be construed as a promise or guarantee of any particular result.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Licensing</h2>
          <p>Attorney Sundeep K. Mullick is licensed to practice law in the State of Florida. This website is not intended to solicit clients for matters outside of the jurisdictions in which {siteConfig.firmNameShort} attorneys are licensed to practice.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Third-Party Links</h2>
          <p>This website may contain links to third-party websites. These links are provided for convenience only and do not constitute an endorsement. We are not responsible for the content or privacy practices of third-party sites.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Contact</h2>
          <p>If you have questions about these Terms of Service, contact us at <a href={`tel:${siteConfig.phoneRaw}`} className="text-accent hover:underline">{siteConfig.phone}</a> or <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">{siteConfig.email}</a>.</p>
        </div>
      </div>
    </>
  );
};

export default Terms;
