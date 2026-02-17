import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { practiceAreas } from "@/data/practiceAreas";
import { siteConfig } from "@/data/siteConfig";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const PracticeAreas = () => {
  return (
    <>
      <SEOHead
        title="Practice Areas — Mullick Law | Miami, FL"
        description="Explore our practice areas including bankruptcy law and business litigation. Experienced legal representation in Miami."
        canonical="https://mullicklaw.com/practice-areas"
      />

      {/* Hero */}
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-primary-foreground/60 text-sm font-body mb-2">
            <Link to="/" className="hover:text-accent">Home</Link> / Practice Areas
          </p>
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary-foreground">
            Practice Areas
          </h1>
          <p className="text-primary-foreground/70 font-body mt-4 max-w-xl">
            Focused legal expertise to protect your financial future and business interests.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {practiceAreas.map((pa, i) => (
              <motion.div
                key={pa.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Card className="h-full hover:shadow-lg hover:border-accent/50 transition-all group">
                  <CardContent className="p-8">
                    <pa.icon className="h-12 w-12 text-accent mb-5" />
                    <h2 className="font-heading text-2xl font-semibold mb-3 text-foreground">{pa.title}</h2>
                    <p className="text-muted-foreground font-body text-sm mb-6 leading-relaxed">{pa.shortDescription}</p>
                    <Link
                      to={`/practice-areas/${pa.slug}`}
                      className="inline-flex items-center text-accent font-semibold text-sm font-body group-hover:gap-2 transition-all"
                    >
                      View Details <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-secondary rounded-xl p-8 lg:p-12 max-w-3xl mx-auto">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Not Sure Where to Start?</h3>
            <p className="text-muted-foreground font-body mb-6">
              Schedule a free consultation to discuss your situation. Attorney Mullick will help determine the best legal strategy for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold">
                <Link to="/contact">Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" className="font-body">
                <a href={`tel:${siteConfig.phoneRaw}`}>
                  <Phone className="h-4 w-4 mr-2" /> {siteConfig.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PracticeAreas;
