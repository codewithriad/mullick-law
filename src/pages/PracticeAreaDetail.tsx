import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEOHead from "@/components/SEOHead";
import { getPracticeArea, practiceAreas } from "@/data/practiceAreas";
import { siteConfig } from "@/data/siteConfig";

const PracticeAreaDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const pa = getPracticeArea(slug || "");

  if (!pa) return <Navigate to="/practice-areas" replace />;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pa.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const otherAreas = practiceAreas.filter((p) => p.slug !== slug);

  return (
    <>
      <SEOHead
        title={pa.metaTitle}
        description={pa.metaDescription}
        canonical={`https://mullicklaw.com/practice-areas/${pa.slug}`}
        jsonLd={faqJsonLd}
      />

      {/* Hero */}
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-primary-foreground/60 text-sm font-body mb-2">
            <Link to="/" className="hover:text-accent">Home</Link>
            {" / "}
            <Link to="/practice-areas" className="hover:text-accent">Practice Areas</Link>
            {" / "}
            {pa.title}
          </p>
          <div className="flex items-center gap-4 mt-4">
            <pa.icon className="h-10 w-10 text-accent" />
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary-foreground">{pa.title}</h1>
          </div>
          <p className="text-primary-foreground/70 font-body mt-4 max-w-xl">{pa.heroDescription}</p>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="max-w-3xl mx-auto">
          {/* Overview */}
          <section className="mb-12">
            {pa.overview.map((p, i) => (
              <p key={i} className="text-foreground/80 font-body mb-4 leading-relaxed">{p}</p>
            ))}
          </section>

          {/* What We Handle */}
          <section className="mb-12">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">What We Handle</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pa.whatWeHandle.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground/80 font-body">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section className="mb-12">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Our Process</h2>
            <div className="space-y-6">
              {pa.process.map((step) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm font-body">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground font-body mt-1">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {pa.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-body text-sm font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-body text-sm leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Testimonial */}
          <Card className="mb-12 border-l-4 border-l-accent bg-secondary">
            <CardContent className="p-6">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-foreground/90 font-body text-sm italic mb-3 leading-relaxed">
                "{pa.testimonial.quote}"
              </blockquote>
              <p className="font-semibold text-sm font-body text-foreground">{pa.testimonial.name}</p>
              <p className="text-xs text-muted-foreground font-body">{pa.testimonial.context}</p>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="bg-accent rounded-xl p-8 text-center">
            <h3 className="font-heading text-2xl font-bold text-accent-foreground mb-3">Schedule Your Free Consultation</h3>
            <p className="text-accent-foreground/80 font-body text-sm mb-6">
              Let's discuss your situation and explore your options. No obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-body font-semibold">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 font-body">
                <a href={`tel:${siteConfig.phoneRaw}`}>
                  <Phone className="h-4 w-4 mr-2" /> {siteConfig.phone}
                </a>
              </Button>
            </div>
          </div>

          {/* Related */}
          {otherAreas.length > 0 && (
            <section className="mt-12">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Other Practice Areas</h3>
              <div className="grid gap-4">
                {otherAreas.map((other) => (
                  <Link
                    key={other.slug}
                    to={`/practice-areas/${other.slug}`}
                    className="flex items-center gap-3 p-4 rounded-lg border hover:border-accent/50 hover:shadow-sm transition-all"
                  >
                    <other.icon className="h-6 w-6 text-accent" />
                    <div>
                      <p className="font-heading font-semibold text-foreground">{other.title}</p>
                      <p className="text-xs text-muted-foreground font-body">{other.shortDescription.slice(0, 80)}…</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default PracticeAreaDetail;
