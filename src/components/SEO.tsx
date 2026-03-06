import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    type?: string;
    name?: string;
}

export default function SEO({ title, description, type = 'website', name = "Brian's Foundation Repair" }: SEOProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Brian's Foundation Repair",
        "image": "https://briansfoundationrepair.com/hero-image.png",
        "url": "https://briansfoundationrepair.com/",
        "telephone": "+1-660-423-3468",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "45325 State Highway 6",
            "addressLocality": "Hurdland",
            "addressRegion": "MO",
            "postalCode": "63547",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 40.016,
            "longitude": -92.274
        },
        "description": "Brian’s Foundation Repair offers reliable foundation repair, concrete leveling, and house leveling services. With years of experience and a trusted crew, we deliver lasting results and peace of mind.",
        "areaServed": [
            "Kirksville, MO",
            "Quincy, IL",
            "Hannibal, MO",
            "Macon, MO",
            "Macomb, IL",
            "Keokuk, IA",
            "Hurdland, MO",
            "Northeast Missouri",
            "West-Central Illinois"
        ]
    };

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{`${title} | ${name}`}</title>
            <meta name='description' content={description} />

            {/* OpenGraph tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={name} />

            {/* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />

            {/* Structured Data for Local Business SEO */}
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
}
