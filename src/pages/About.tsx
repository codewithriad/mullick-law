import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Award, Users, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEOHead, { attorneyJsonLd } from "@/components/SEOHead";
import { siteConfig } from "@/data/siteConfig";

const values = [
  { icon: Heart, title: "Dedication", desc: "We are deeply committed to every client's case, treating each matter with the urgency and care it deserves." },
  { icon: Award, title: "Experience", desc: "Over two decades of practice have given us the knowledge and skill to handle even the most complex cases." },
  { icon: Users, title: "Integrity", desc: "Honest communication and ethical practice are the foundation of everything we do." },
];

const About = () => {
  return (
    <>
      <SEOHead
        title="About — Law Office of Sundeep K. Mullick | Miami, FL"
        description="Learn about Attorney Sundeep K. Mullick and our commitment to providing personalized bankruptcy and litigation services in Miami."
        canonical="https://mullicklaw.com/about"
        jsonLd={attorneyJsonLd}
      />

      {/* Hero */}
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-primary-foreground/60 text-sm font-body mb-2">
            <Link to="/" className="hover:text-accent">Home</Link> / About
          </p>
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary-foreground">About Our Firm</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        {/* Firm Overview */}
        <section className="max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
            {siteConfig.firmName}
          </h2>
          <div className="space-y-4 font-body text-foreground/80 leading-relaxed">
            <p>
              The Law Office of Sundeep K. Mullick, P.A. is a boutique law firm located in the heart of downtown Miami, dedicated to providing exceptional legal representation in bankruptcy and litigation matters. Unlike larger firms where clients become case numbers, we believe in the power of personalized attention and direct attorney access.
            </p>
            <p>
              Founded on the principle that every individual deserves quality legal representation regardless of the size of their case, our firm combines the resources and knowledge of a large practice with the personal touch and commitment of a solo practitioner.
            </p>
            <p>
              We understand that legal challenges—whether financial distress or business disputes—can be overwhelming. Our mission is to guide our clients through these difficult times with compassion, clarity, and unwavering advocacy.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Card className="h-full text-center border-t-4 border-t-accent">
                  <CardContent className="p-6">
                    <v.icon className="h-10 w-10 text-accent mx-auto mb-4" />
                    <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">{v.title}</h3>
                    <p className="text-sm text-muted-foreground font-body">{v.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Attorney Profile */}
        <section className="max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8">Attorney Sundeep K. Mullick</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="aspect-[3/4] bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-sm font-body">Attorney Headshot</span>
              </div>
            </div>
            <div className="md:w-2/3 space-y-4 font-body text-foreground/80 leading-relaxed">
              <p>
                Attorney Sundeep K. Mullick has dedicated over 20 years to helping individuals and businesses navigate complex legal challenges. His practice focuses on bankruptcy law and business litigation, areas where his deep expertise and strategic approach have delivered consistently successful outcomes for his clients.
              </p>
              <p>
                After graduating from law school, Attorney Mullick quickly distinguished himself through his meticulous preparation, persuasive advocacy, and genuine care for his clients' wellbeing. He founded his own practice with a clear vision: to provide big-firm quality representation with the personal attention that only a dedicated solo practitioner can offer.
              </p>
              <p>
                Attorney Mullick is a member of the Florida Bar and is admitted to practice before all Florida state courts and the United States Bankruptcy Court for the Southern District of Florida. He is actively involved in the local legal community and stays at the forefront of developments in bankruptcy and commercial litigation law.
              </p>
              <p className="italic text-foreground/70">
                "I believe that every client deserves to be heard, understood, and represented with passion. When you walk into my office, you're not just another case file—you're a person who needs help, and I'm committed to fighting for you."
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8">Visit Our Office</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardContent className="p-5 flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-sm text-foreground font-body">Office</p>
                  <p className="text-sm text-muted-foreground font-body">{siteConfig.address.full}</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5 flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-sm text-foreground font-body">Phone</p>
                  <a href={`tel:${siteConfig.phoneRaw}`} className="text-sm text-accent font-body hover:underline">
                    {siteConfig.phone}
                  </a>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5 flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-sm text-foreground font-body">Email</p>
                  <a href={`mailto:${siteConfig.email}`} className="text-sm text-accent font-body hover:underline">
                    {siteConfig.email}
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="rounded-lg overflow-hidden border h-64 lg:h-80">
            <iframe
              src={siteConfig.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Law Office of Sundeep K. Mullick location"
            />
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold">
              <Link to="/contact">Schedule a Free Consultation</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
