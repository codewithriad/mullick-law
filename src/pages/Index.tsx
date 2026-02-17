import heroBg from "@/assets/hero-bg.jpg";
import SEOHead, { localBusinessJsonLd } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { practiceAreas } from "@/data/practiceAreas";
import { siteConfig } from "@/data/siteConfig";
import { caseResults, testimonials } from "@/data/testimonials";
import { motion } from "framer-motion";
import { ArrowRight, Award, ChevronRight, Phone, Shield, Star, UserCheck, Users } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const trustPillars = [
  { icon: Award, title: "20+ Years Experience", desc: "Decades of dedicated practice in bankruptcy and litigation law." },
  { icon: UserCheck, title: "Direct Attorney Access", desc: "Work directly with Attorney Mullick—not paralegals or associates." },
  { icon: Shield, title: "Results-Driven", desc: "Proven track record of successful outcomes for our clients." },
  { icon: Users, title: "Personalized Service", desc: "Every case receives individualized attention and strategy." },
];

const Index = () => {
  return (
    <>
      <SEOHead
        title="Bankruptcy & Litigation Attorney | Miami, FL — Mullick Law"
        description="Experienced bankruptcy and litigation attorney in Miami, FL. Personalized legal service with direct access to attorney Sundeep K. Mullick. Free consultation available."
        canonical="https://mullicklaw.com"
        jsonLd={localBusinessJsonLd}
      />

      {/* Hero */}
      <section className="relative min-h-[70vh] lg:min-h-[65vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Experienced Bankruptcy &amp; Litigation Attorney in Miami
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 font-body max-w-xl">
              Direct access to founder attorney Sundeep K. Mullick. Personalized legal strategy tailored to your situation. Decades of successful results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold text-base px-8">
                <Link to="/contact">Schedule Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/50 text-white hover:bg-white hover:text-primary transition-all duration-300 font-body text-base px-8 backdrop-blur-sm bg-white/5">
                <a href={`tel:${siteConfig.phoneRaw}`}>
                  <Phone className="h-5 w-5 mr-2" />
                  Call {siteConfig.phone}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-center text-foreground mb-12">
            Why Choose Our Firm?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Card className="h-full border-l-4 border-l-accent bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <pillar.icon className="h-8 w-8 text-accent mb-4" />
                    <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">{pillar.title}</h3>
                    <p className="text-sm text-muted-foreground font-body">{pillar.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas Preview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-center text-foreground mb-4">
            Our Practice Areas
          </h2>
          <p className="text-center text-muted-foreground font-body mb-12 max-w-2xl mx-auto">
            Focused legal expertise in bankruptcy and business litigation to protect your rights and financial future.
          </p>
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
                    <pa.icon className="h-10 w-10 text-accent mb-4" />
                    <h3 className="font-heading text-2xl font-semibold mb-3 text-foreground">{pa.title}</h3>
                    <p className="text-muted-foreground font-body text-sm mb-6">{pa.shortDescription}</p>
                    <Link
                      to={`/practice-areas/${pa.slug}`}
                      className="inline-flex items-center text-accent font-semibold text-sm font-body group-hover:gap-2 transition-all"
                    >
                      Learn More <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="font-body">
              <Link to="/practice-areas">View All Practice Areas <ArrowRight className="h-4 w-4 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-center text-foreground mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Card className="h-full bg-card">
                  <CardContent className="p-6">
                    <div className="flex gap-0.5 mb-3">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <blockquote className="text-foreground/90 font-body text-sm italic mb-4 leading-relaxed">
                      "{t.quote}"
                    </blockquote>
                    <div>
                      <p className="font-semibold text-sm text-foreground font-body">{t.name}</p>
                      <p className="text-xs text-muted-foreground font-body">{t.context}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Results */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-center text-foreground mb-12">
            Proven Results
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {caseResults.map((cr, i) => (
              <motion.div
                key={cr.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Card className="h-full border-t-4 border-t-accent">
                  <CardContent className="p-6">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider font-body">{cr.area}</span>
                    <h3 className="font-heading text-lg font-semibold mt-2 mb-2 text-foreground">{cr.title}</h3>
                    <p className="text-sm text-muted-foreground font-body">{cr.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-20 bg-accent">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-accent-foreground mb-4">
            Ready to Discuss Your Legal Options?
          </h2>
          <p className="text-accent-foreground/80 font-body mb-8 text-lg max-w-xl mx-auto">
            Call for your free consultation with Attorney Mullick. No obligation, no pressure—just honest legal guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-body font-semibold text-base px-8">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 font-body text-base px-8">
              <a href={`tel:${siteConfig.phoneRaw}`}>
                <Phone className="h-5 w-5 mr-2" />
                Call {siteConfig.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
