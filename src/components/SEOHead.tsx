import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  jsonLd?: object | object[];
}

const SEOHead = ({ title, description, canonical, type = "website", jsonLd }: SEOHeadProps) => {
  const jsonLdArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {canonical && <link rel="canonical" href={canonical} />}
      {canonical && <meta property="og:url" content={canonical} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {jsonLdArray.map((ld, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(ld)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;

// Common JSON-LD generators
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Law Office of Sundeep K. Mullick, P.A.",
  description: "Experienced bankruptcy and litigation attorney serving Miami and South Florida.",
  url: "https://mullicklaw.com",
  telephone: "+13055701501",
  email: "sunny@mullicklaw.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "17 East Flagler Street, Suite 222",
    addressLocality: "Miami",
    addressRegion: "FL",
    postalCode: "33131",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.7743,
    longitude: -80.1918,
  },
  areaServed: {
    "@type": "City",
    name: "Miami",
  },
  priceRange: "$$",
};

export const attorneyJsonLd = {
  "@context": "https://schema.org",
  "@type": "Attorney",
  name: "Sundeep K. Mullick",
  jobTitle: "Attorney at Law",
  worksFor: {
    "@type": "LegalService",
    name: "Law Office of Sundeep K. Mullick, P.A.",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "17 East Flagler Street, Suite 222",
    addressLocality: "Miami",
    addressRegion: "FL",
    postalCode: "33131",
  },
};
