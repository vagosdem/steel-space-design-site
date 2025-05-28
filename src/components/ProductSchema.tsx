
import { Helmet } from 'react-helmet-async';
import { Product } from "@/data/products";

interface ProductSchemaProps {
  product: Product;
}

export default function ProductSchema({ product }: ProductSchemaProps) {
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.title,
    "description": product.description,
    "image": `https://stereon.lovable.app${product.image}`,
    "brand": {
      "@type": "Brand",
      "name": "Stereon"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Stereon"
    },
    "category": product.category,
    "material": product.material,
    "color": product.color,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "EUR",
      "seller": {
        "@type": "Organization",
        "name": "Stereon"
      }
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Stereon",
    "url": "https://stereon.lovable.app",
    "description": "Μεταλλικά ντουλάπια και ντουλάπες υψηλής ποιότητας για επαγγελματικούς, βιομηχανικούς και εκπαιδευτικούς χώρους."
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Αρχική",
        "item": "https://stereon.lovable.app/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Προϊόντα",
        "item": "https://stereon.lovable.app/products"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.title,
        "item": `https://stereon.lovable.app/product/${product.id}`
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
}
