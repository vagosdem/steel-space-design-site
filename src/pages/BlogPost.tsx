
import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const blogContent: Record<string, any> = {
  "odigos-epilogis-metallikis-ntoulapis": {
    title: "Οδηγός Επιλογής Μεταλλικής Ντουλάπας",
    date: "2024-01-15",
    author: "Stereon Team",
    image: "/lovable-uploads/IMG_054822.webp",
    content: `
      <h2>Γιατί να Επιλέξετε Μεταλλική Ντουλάπα;</h2>
      <p>Οι μεταλλικές ντουλάπες προσφέρουν ανώτερη αντοχή και μακροχρόνια λειτουργία σε σχέση με άλλα υλικά. Είναι ιδανικές για επαγγελματικούς χώρους, σχολεία, γυμναστήρια και βιομηχανικές εγκαταστάσεις.</p>
      
      <h3>Τύποι Μεταλλικών Ντουλαπιών</h3>
      <ul>
        <li><strong>Ντουλάπια Γραφείου:</strong> Κομψά και λειτουργικά για επαγγελματικούς χώρους</li>
        <li><strong>Σχολικά Ντουλάπια (Lockers):</strong> Ανθεκτικά και ασφαλή για εκπαιδευτικούς χώρους</li>
        <li><strong>Βιομηχανικά Ντουλάπια:</strong> Εξαιρετικής αντοχής για απαιτητικά περιβάλλοντα</li>
        <li><strong>Ντουλάπια με Γυάλινες Πόρτες:</strong> Συνδυάζουν ορατότητα με προστασία</li>
      </ul>
      
      <h3>Κριτήρια Επιλογής</h3>
      <p>Κατά την επιλογή μεταλλικής ντουλάπας, λάβετε υπόψη τα παρακάτω:</p>
      <ul>
        <li>Διαστάσεις και χωρητικότητα</li>
        <li>Αριθμός και μέγεθος θέσεων</li>
        <li>Τύπος κλειδαρίας (κλειδί, κωδικός, RFID)</li>
        <li>Υλικό κατασκευής και επικάλυψη</li>
        <li>Χρώμα και αισθητική</li>
        <li>Σύστημα αερισμού</li>
      </ul>
      
      <h3>Πλεονεκτήματα Μεταλλικών Ντουλαπιών</h3>
      <p>Οι μεταλλικές ντουλάπες προσφέρουν πολλά πλεονεκτήματα:</p>
      <ul>
        <li>Εξαιρετική αντοχή και μακροζωία</li>
        <li>Αντίσταση σε φθορά και υγρασία</li>
        <li>Εύκολη συντήρηση και καθαρισμός</li>
        <li>Πυρασφάλεια</li>
        <li>Οικονομική επιλογή μακροπρόθεσμα</li>
        <li>Μεγάλη ποικιλία χρωμάτων και σχεδιασμών</li>
      </ul>
    `
  }
};

export default function BlogPost() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = postId ? blogContent[postId] : null;

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
        title={`${post.title} | Blog Stereon - Οδηγοί Μεταλλικών Ντουλαπιών`}
        description={`${post.content.substring(0, 160)}...`}
        canonical={`/blog/${postId}`}
        image={post.image}
        type="article"
      />
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
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
              <div className="aspect-video overflow-hidden rounded-2xl mb-8">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <header className="mb-8">
                <h1 className="text-3xl font-bold mb-4 text-black">{post.title}</h1>
                
                <div className="flex items-center gap-6 text-metal-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{new Date(post.date).toLocaleDateString('el-GR')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                </div>
              </header>

              <div 
                className="prose prose-lg max-w-none text-metal-700"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="mt-12 p-6 bg-blue-50 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4 text-black">
                  Χρειάζεστε Μεταλλικές Ντουλάπες;
                </h3>
                <p className="text-metal-600 mb-4">
                  Επικοινωνήστε μαζί μας για προσωπικευμένη συμβουλή και προσφορά που ταιριάζει στις ανάγκες σας.
                </p>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => navigate("/#contact")}
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
