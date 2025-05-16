export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "What's The Rush?",
    url: "https://whatstherush.tech",
    description:
      "Challenging accelerationist tech culture with ethical, sustainable, humane alternatives.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://whatstherush.tech/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
