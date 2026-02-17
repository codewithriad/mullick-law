import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import SEOHead from "@/components/SEOHead";
import { siteConfig } from "@/data/siteConfig";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  practiceArea: z.string().min(1, "Please select a practice area"),
  message: z.string().optional(),
  consent: z.boolean().refine((v) => v, "You must consent to be contacted"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactFaqs = [
  { q: "Do you offer free consultations?", a: "Yes, your initial consultation is completely free with no obligation." },
  { q: "How quickly can we schedule a meeting?", a: "We strive to schedule consultations within 1-2 business days. Urgent matters may be accommodated same-day." },
  { q: "What areas do you serve?", a: "We serve clients throughout Miami-Dade County, Broward County, and the greater South Florida area." },
  { q: "How much does a consultation cost?", a: "Nothing! Your initial consultation with Attorney Mullick is completely free." },
  { q: "What should I bring to my first meeting?", a: "Bring any relevant documents: court papers, bills, collection letters, tax returns, pay stubs, and a list of debts and assets." },
];

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      practiceArea: "",
      message: "",
      consent: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
          name: data.name,
          phone: data.phone,
          email: data.email,
          practice_area: data.practiceArea,
          message: data.message || "No message provided",
          subject: `New Consultation Request - ${data.practiceArea}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        toast({
          title: "Request Submitted!",
          description: "We'll be in touch within one business day.",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please call us directly or try again later.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Contact Our Miami Law Office — Free Consultation"
        description="Get in touch with our bankruptcy and litigation firm. Free consultation available. Call (305) 570-1501 or schedule online."
        canonical="https://mullicklaw.com/contact"
      />

      {/* Hero */}
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-primary-foreground/60 text-sm font-body mb-2">
            <Link to="/" className="hover:text-accent">Home</Link> / Contact
          </p>
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary-foreground">Get in Touch</h1>
          <p className="text-primary-foreground/70 font-body mt-4 max-w-xl">
            Contact our Miami office today for a free consultation. No obligation, no pressure.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-shadow hover:border-accent/50">
            <CardContent className="p-6">
              <Phone className="h-8 w-8 text-accent mx-auto mb-3" />
              <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Phone</h3>
              <a href={`tel:${siteConfig.phoneRaw}`} className="text-accent font-body font-semibold hover:underline">
                {siteConfig.phone}
              </a>
              <p className="text-xs text-muted-foreground font-body mt-1">Call for immediate assistance</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow hover:border-accent/50">
            <CardContent className="p-6">
              <Mail className="h-8 w-8 text-accent mx-auto mb-3" />
              <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Email</h3>
              <a href={`mailto:${siteConfig.email}`} className="text-accent font-body font-semibold hover:underline text-sm">
                {siteConfig.email}
              </a>
              <p className="text-xs text-muted-foreground font-body mt-1">Send us a message</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow hover:border-accent/50">
            <CardContent className="p-6">
              <MapPin className="h-8 w-8 text-accent mx-auto mb-3" />
              <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Office</h3>
              <p className="text-sm text-foreground font-body">{siteConfig.address.street}</p>
              <p className="text-sm text-foreground font-body">{siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}</p>
            </CardContent>
          </Card>
        </div>

        {/* Form + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
          {/* Form */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Schedule Your Free Consultation</h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-secondary rounded-xl p-8 text-center"
              >
                <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">Thank You!</h3>
                <p className="text-muted-foreground font-body">
                  Your consultation request has been received. We'll contact you within one business day.
                </p>
              </motion.div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body">Name *</FormLabel>
                        <FormControl><Input placeholder="Your full name" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body">Phone *</FormLabel>
                        <FormControl><Input type="tel" placeholder="(305) 555-0100" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body">Email *</FormLabel>
                        <FormControl><Input type="email" placeholder="you@example.com" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="practiceArea"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body">Practice Area *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger><SelectValue placeholder="Select a practice area" /></SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="bankruptcy">Bankruptcy</SelectItem>
                            <SelectItem value="litigation">Business Litigation</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body">Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Briefly describe your situation..." rows={4} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="consent"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="font-body text-sm text-muted-foreground font-normal">
                            I consent to be contacted by phone and email regarding my inquiry. *
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    disabled={submitting}
                    size="lg"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold"
                  >
                    {submitting ? "Submitting..." : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Request Free Consultation
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </div>

          {/* Map */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Our Location</h2>
            <div className="rounded-lg overflow-hidden border h-64 lg:h-80 mb-4">
              <iframe
                src={siteConfig.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
            <div className="space-y-2 font-body text-sm text-muted-foreground">
              <p><strong className="text-foreground">Address:</strong> {siteConfig.address.full}</p>
              <p><strong className="text-foreground">Hours:</strong> {siteConfig.hours}</p>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(siteConfig.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline inline-block mt-1"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">Common Questions</h2>
          <Accordion type="single" collapsible>
            {contactFaqs.map((faq, i) => (
              <AccordionItem key={i} value={`cfaq-${i}`}>
                <AccordionTrigger className="text-left font-body text-sm font-medium">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body text-sm">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Contact;
