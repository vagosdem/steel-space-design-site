
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  noindex?: boolean;
}

export default function SEOHead({
  title = "Μεταλλικές Ντουλάπες & Lockers | Custom Κατασκευές | Stereom.gr",
  description = "Η Stereom.gr ειδικεύεται σε ανθεκτικές, custom μεταλλικές ντουλάπες, lockers και συρταριέρες. Ιδανικές για μεγάλες παραγγελίες σε βιομηχανίες, σχολεία, γραφεία. Ζητήστε προσφορά!",
  canonical,
  image = "/lovable-uploads/IMG_054822.webp",
  type = 'website',
  noindex = false
}: SEOHeadProps) {
  const fullImageUrl = image.startsWith('http') ? image : `https://stereon.lovable.app${image}`;
  const fullCanonical = canonical ? `https://stereon.lovable.app${canonical}` : undefined;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:type" content={type} />
      {fullCanonical && <meta property="og:url" content={fullCanonical} />}
      
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
    </Helmet>
  );
}
