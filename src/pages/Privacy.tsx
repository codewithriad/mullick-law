import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { siteConfig } from "@/data/siteConfig";

const Privacy = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy — Mullick Law"
        description="Privacy policy for the Law Office of Sundeep K. Mullick, P.A."
        canonical="https://mullicklaw.com/privacy"
      />

      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-primary-foreground/60 text-sm font-body mb-2">
            <Link to="/" className="hover:text-accent">Home</Link> / Privacy Policy
          </p>
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary-foreground">Privacy Policy</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20 max-w-3xl">
        <div className="prose prose-sm max-w-none font-body text-foreground/80 space-y-6">
          <p><strong>Last Updated:</strong> January 2025</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Information We Collect</h2>
          <p>When you visit our website or contact us, we may collect personal information including your name, phone number, email address, and details about your legal matter that you voluntarily provide through our contact form or by other means of communication.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">How We Use Your Information</h2>
          <p>We use the information you provide solely to respond to your inquiry, evaluate potential legal representation, and communicate with you regarding our services. We do not sell, trade, or share your personal information with third parties for marketing purposes.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Confidentiality</h2>
          <p>We understand the sensitive nature of legal matters. All information shared with our office is treated with the utmost confidentiality in accordance with applicable legal and ethical obligations.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Cookies and Analytics</h2>
          <p>Our website may use cookies and analytics tools to improve user experience and understand how visitors interact with our site. These tools do not collect personally identifiable information unless you voluntarily submit it.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Third-Party Services</h2>
          <p>Our contact form is powered by Web3Forms, which processes form submissions on our behalf. We encourage you to review their privacy policy for information on how they handle data.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Your Rights</h2>
          <p>You have the right to request access to, correction of, or deletion of your personal information. To exercise these rights, please contact us at <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">{siteConfig.email}</a>.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Contact</h2>
          <p>If you have questions about this Privacy Policy, contact us at {siteConfig.phone} or {siteConfig.email}.</p>
        </div>
      </div>
    </>
  );
};

export default Privacy;
