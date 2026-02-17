import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEOHead from "@/components/SEOHead";
import { faqCategories } from "@/data/faqItems";

const FAQ = () => {
  const [search, setSearch] = useState("");

  const filteredCategories = faqCategories
    .map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) =>
          item.question.toLowerCase().includes(search.toLowerCase()) ||
          item.answer.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((cat) => cat.items.length > 0);

  const allFaqs = faqCategories.flatMap((c) => c.items);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <SEOHead
        title="Frequently Asked Questions — Mullick Law | Miami, FL"
        description="Find answers to common questions about bankruptcy, litigation, and our legal services. Contact us for a free consultation."
        canonical="https://mullicklaw.com/faq"
        jsonLd={faqJsonLd}
      />

      {/* Hero */}
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-primary-foreground/60 text-sm font-body mb-2">
            <Link to="/" className="hover:text-accent">Home</Link> / FAQ
          </p>
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary-foreground">
            Frequently Asked Questions
          </h1>
          <p className="text-primary-foreground/70 font-body mt-4 max-w-xl">
            Find answers to common questions about our services and legal processes.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20 max-w-3xl">
        {/* Search */}
        <div className="relative mb-10">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Categories */}
        {filteredCategories.length === 0 ? (
          <p className="text-center text-muted-foreground font-body py-12">
            No matching questions found. Try a different search or{" "}
            <Link to="/contact" className="text-accent hover:underline">contact us directly</Link>.
          </p>
        ) : (
          filteredCategories.map((cat) => (
            <div key={cat.category} className="mb-10">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">{cat.category}</h2>
              <Accordion type="single" collapsible>
                {cat.items.map((item, i) => (
                  <AccordionItem key={i} value={`${cat.category}-${i}`}>
                    <AccordionTrigger className="text-left font-body text-sm font-medium">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground font-body text-sm leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))
        )}

        {/* CTA */}
        <div className="mt-12 bg-secondary rounded-xl p-8 text-center">
          <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Still Have Questions?</h3>
          <p className="text-muted-foreground font-body mb-6">
            Contact us for a free consultation. Attorney Mullick is happy to answer your questions personally.
          </p>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default FAQ;
