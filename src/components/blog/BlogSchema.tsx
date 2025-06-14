
import { blogPosts } from "@/data/blogPosts";

export default function BlogSchema() {
  return (
    <>
      {/* Schema Markup for Blog */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Stereom Blog - Μεταλλικές Ντουλάπες & Lockers",
          "description": "Οδηγοί και συμβουλές για μεταλλικές ντουλάπες, lockers και συστήματα αποθήκευσης",
          "url": "https://stereom.lovable.app/blog",
          "publisher": {
            "@type": "Organization",
            "name": "Stereom",
            "logo": {
              "@type": "ImageObject",
              "url": "https://stereom.lovable.app/lovable-uploads/IMG_054822.webp"
            }
          },
          "blogPost": blogPosts.map(post => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "image": `https://stereom.lovable.app${post.image}`,
            "author": {
              "@type": "Organization",
              "name": post.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Stereom"
            },
            "datePublished": post.date,
            "url": `https://stereom.lovable.app/blog/${post.id}`
          }))
        })}
      </script>

      {/* Individual BlogPosting Schema for first post */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Μεταλλικές Ντουλάπες για Εργοστάσια και Αποθήκες",
          "image": "https://stereom.lovable.app/lovable-uploads/a63601e3-8843-4a04-8912-e0f557bd198c.png",
          "author": {
            "@type": "Organization",
            "name": "Stereom Team"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Stereom",
            "logo": {
              "@type": "ImageObject",
              "url": "https://stereom.lovable.app/lovable-uploads/IMG_054822.webp"
            }
          },
          "datePublished": "2024-01-15"
        })}
      </script>

      {/* Individual BlogPosting Schema for second post */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Lockers Αποδυτηρίων για Επαγγελματικούς Χώρους",
          "image": "https://stereom.lovable.app/lovable-uploads/IMG_13742.webp",
          "author": {
            "@type": "Organization",
            "name": "Stereom Team"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Stereom",
            "logo": {
              "@type": "ImageObject",
              "url": "https://stereom.lovable.app/lovable-uploads/IMG_054822.webp"
            }
          },
          "datePublished": "2024-01-10"
        })}
      </script>
      
      {/* Individual BlogPosting Schema for third post */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "mainEntityOfPage": {
             "@type": "WebPage",
             "@id": "https://stereom.lovable.app/blog/arxeiothikes-grafeiou-epaggelmatikwn-xwrwn"
          },
          "headline": "Αρχειοθήκες Γραφείου & Επαγγελματικών Χώρων: Οδηγός Επιλογής για Ασφαλή και Αποτελεσματική Οργάνωση",
          "image": "https://stereom.lovable.app/lovable-uploads/IMG_23802.webp",
          "author": {
            "@type": "Organization",
            "name": "Stereom Team"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Stereom",
            "logo": {
              "@type": "ImageObject",
              "url": "https://stereom.lovable.app/lovable-uploads/IMG_054822.webp"
            }
          },
          "datePublished": "2024-01-20"
        })}
      </script>
    </>
  );
}
