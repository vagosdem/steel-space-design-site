
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: "odigos-epilogis-metallikis-ntoulapis",
    title: "Οδηγός Επιλογής Μεταλλικής Ντουλάπας",
    excerpt: "Μάθετε πώς να επιλέξετε την κατάλληλη μεταλλική ντουλάπα για τις ανάγκες σας. Από διαστάσεις έως υλικά κατασκευής.",
    date: "2024-01-15",
    image: "/lovable-uploads/IMG_054822.webp",
    category: "Οδηγοί"
  },
  {
    id: "metallikes-vs-ksillines-ntoulapes",
    title: "Μεταλλικές vs Ξύλινες Ντουλάπες - Σύγκριση",
    excerpt: "Ανακαλύψτε τα πλεονεκτήματα και μειονεκτήματα των μεταλλικών έναντι των ξύλινων ντουλαπών για να κάνετε τη σωστή επιλογή.",
    date: "2024-01-10",
    image: "/lovable-uploads/IMG_13722.webp",
    category: "Συγκρίσεις"
  },
  {
    id: "symvoules-organosis-metallikes-ntoulapes",
    title: "Συμβουλές Οργάνωσης με Μεταλλικές Ντουλάπες",
    excerpt: "Πρακτικές συμβουλές για τη μέγιστη αξιοποίηση του χώρου αποθήκευσης στις μεταλλικές σας ντουλάπες.",
    date: "2024-01-05",
    image: "/lovable-uploads/IMG_21202.webp",
    category: "Οργάνωση"
  }
];

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead 
        title="Blog - Οδηγοί & Συμβουλές για Μεταλλικές Ντουλάπες | Stereon"
        description="Ανακαλύψτε χρήσιμους οδηγούς, συμβουλές και πληροφορίες για μεταλλικές ντουλάπες. Μάθετε πώς να επιλέξετε, να οργανώσετε και να αξιοποιήσετε στο μέγιστο τις λύσεις αποθήκευσης."
        canonical="/blog"
        image="/lovable-uploads/IMG_054822.webp"
      />
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <div className="container-section">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold mb-4">Blog & Οδηγοί</h1>
              <p className="text-lg text-metal-600 mb-12">
                Χρήσιμες πληροφορίες, οδηγοί και συμβουλές για μεταλλικές ντουλάπες και συστήματα αποθήκευσης
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-sm text-metal-600">
                        <Calendar size={14} />
                        {new Date(post.date).toLocaleDateString('el-GR')}
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-semibold mb-3 text-black">
                      {post.title}
                    </h2>
                    
                    <p className="text-metal-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <Link 
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Διαβάστε περισσότερα
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
