
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
            "mainEntityOfPage": {
               "@type": "WebPage",
               "@id": `https://stereom.lovable.app/blog/${post.id}`
            },
            "headline": post.title,
            "image": `https://stereom.lovable.app${post.image}`,
            "author": {
              "@type": "Organization",
              "name": post.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Stereom",
              "logo": {
                "@type": "ImageObject",
                "url": "https://stereom.lovable.app/lovable-uploads/IMG_054822.webp"
              }
            },
            "datePublished": post.date,
            "url": `https://stereom.lovable.app/blog/${post.id}`
          }))
        })}
      </script>
    </>
  );
}
