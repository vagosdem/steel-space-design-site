
import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { blogPosts } from "@/data/blogPosts";
import BlogPostMeta from "@/components/blog/BlogPostMeta";
import BlogContentSection from "@/components/blog/BlogContentSection";


export default function BlogPost() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === postId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [postId]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Το άρθρο δεν βρέθηκε</h1>
          <Button onClick={() => navigate("/blog")}>Επιστροφή στο Blog</Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead 
        title={`${post.title} | Stereom Blog`}
        description={post.excerpt}
        canonical={`/blog/${postId}`}
        image={post.image}
        type="article"
      />
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24">
          <div className="container-section">
            <Breadcrumb className="mb-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Αρχική</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/blog">Blog</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{post.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="mb-6">
              <Button variant="outline" onClick={() => navigate("/blog")} className="flex items-center gap-2">
                <ArrowLeft size={16} />
                Πίσω στο Blog
              </Button>
            </div>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <header className="mb-8">
                {post.tagline && (
                  <div className="mb-4 text-sm text-metal-500 font-semibold">
                    <span>{post.tagline}</span>
                  </div>
                )}
                <h1 className="text-4xl font-bold mb-6 text-black">{post.title}</h1>
                <BlogPostMeta date={post.date} author={post.author} />
              </header>

              <div 
                className="overflow-hidden rounded-2xl mb-8"
                style={{ aspectRatio: post.aspectRatio || '16/9' }}
              >
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-lg text-metal-600 leading-relaxed" style={{ lineHeight: '1.7' }}>
                <p className="mb-8 whitespace-pre-wrap">{post.content.intro}</p>
                
                <div className="space-y-12">
                  {post.content.sections.map((section, sectionIndex) => (
                    <BlogContentSection
                      key={sectionIndex}
                      section={section}
                      sectionIndex={sectionIndex}
                      additionalImages={post.additionalImages}
                      title={post.title}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-12 p-6 bg-blue-50 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4 text-black">
                  Χρειάζεστε Μεταλλικές Ντουλάπες;
                </h3>
                <p className="text-metal-600 mb-4">
                  Επικοινωνήστε μαζί μας για προσωπικευμένη συμβουλή και προσφορά που ταιριάζει στις ανάγκες σας.
                </p>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => navigate("/?scrollTo=contact")}
                >
                  Ζητήστε Προσφορά
                </Button>
              </div>
            </motion.article>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
