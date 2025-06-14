import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { ArrowRight, Wrench } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import BlogPostMeta from "@/components/blog/BlogPostMeta";
import BlogContentSection from "@/components/blog/BlogContentSection";
import BlogSchema from "@/components/blog/BlogSchema";

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead 
        title="Οδηγός Επιλογής Μεταλλικής Ντουλάπας για Βιομηχανικούς Χώρους | Stereom Blog" 
        description="Μεταλλικές ντουλάπες εργοστασίων & αποθήκες – Ανθεκτικές, ασφαλείς, με δυνατότητα προσαρμογής. Χονδρική διάθεση σε επαγγελματίες." 
        canonical="/blog" 
        image="/lovable-uploads/a63601e3-8843-4a04-8912-e0f557bd198c.png" 
        type="website" 
      />
      
      <BlogSchema />
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24">
          <div className="container-section">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="mb-8">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Αρχική</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Blog</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl font-bold mb-4 text-black">Blog & Οδηγοί</h1>
              <p className="text-lg mb-12 text-slate-50" style={{ lineHeight: '1.6' }}>
                Χρήσιμες πληροφορίες, οδηγοί και συμβουλές για μεταλλικές ντουλάπες, lockers και συστήματα αποθήκευσης
              </p>
            </motion.div>

            <div className="space-y-16">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white rounded-2xl shadow-sm overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-6 text-sm text-metal-400">
                      <Wrench size={16} />
                      <span>{post.tagline}</span>
                    </div>

                    <h2 className="text-2xl font-bold mb-6 text-black">
                      <Link to={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors duration-300">
                        {post.title}
                      </Link>
                    </h2>

                    <BlogPostMeta date={post.date} author={post.author} />

                    <div className="mb-8">
                      <p className="text-metal-600 leading-relaxed text-lg" style={{ lineHeight: '1.7' }}>
                        {post.content.intro}
                      </p>
                    </div>
                    
                    {post.content.sections.map((section, sectionIndex) => (
                      <BlogContentSection
                        key={sectionIndex}
                        section={section}
                        sectionIndex={sectionIndex}
                        additionalImages={post.additionalImages}
                        title={post.title}
                      />
                    ))}
                    
                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                      <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
                        <Link to="/?scrollTo=contact">
                          Ζητήστε Προσφορά Τώρα
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      
                      <Button variant="outline" asChild className="border-metal-300 text-white hover:bg-metal-50 hover:text-white rounded-xl">
                        <Link to="/products">
                          Δείτε τα Προϊόντα μας
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center mt-16"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">
                Χρειάζεστε Προσαρμοσμένες Λύσεις;
              </h2>
              <p className="text-xl mb-6 text-blue-100" style={{ lineHeight: '1.6' }}>
                Επικοινωνήστε μαζί μας για custom μεταλλικές ντουλάπες και lockers
              </p>
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 rounded-xl">
                <Link to="/?scrollTo=contact">
                  Επικοινωνήστε Τώρα
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
