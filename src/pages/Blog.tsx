import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, User } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
const blogPosts = [{
  id: "metallikes-ntoulapes-ergostasia",
  title: "Μεταλλικές Ντουλάπες για Εργοστάσια και Αποθήκες: Ανθεκτικότητα και Ασφάλεια σε Πρώτο Πλάνο",
  excerpt: "Οι μεταλλικές ντουλάπες αποτελούν βασικό εξοπλισμό για κάθε επαγγελματικό χώρο που απαιτεί αποθήκευση εργαλείων, εξοπλισμού ή προσωπικών αντικειμένων.",
  date: "2024-01-15",
  author: "Stereon Team",
  image: "/lovable-uploads/IMG_054822.webp",
  category: "Βιομηχανικά",
  content: {
    intro: "Οι μεταλλικές ντουλάπες αποτελούν βασικό εξοπλισμό για κάθε επαγγελματικό χώρο που απαιτεί αποθήκευση εργαλείων, εξοπλισμού ή προσωπικών αντικειμένων. Ειδικά σε εργοστάσια και αποθηκευτικούς χώρους, η ανθεκτικότητα, η εργονομία και η ασφάλεια είναι κρίσιμες παράμετροι.",
    sections: [{
      title: "Γιατί να επιλέξετε μεταλλικές ντουλάπες για τον επαγγελματικό σας χώρο;",
      content: ["Αντοχή σε βαριά χρήση: Κατασκευασμένες από ενισχυμένο χάλυβα για καθημερινή χρήση σε απαιτητικά περιβάλλοντα.", "Ασφάλεια: Δυνατότητα ενσωματωμένων κλειδαριών ή μηχανισμών ασφαλείας.", "Εξοικονόμηση χώρου: Διατίθενται σε διάφορες διαστάσεις και διατάξεις.", "Προσαρμοστικότητα: Ιδανικές για χρήση σε αποδυτήρια, αποθήκες, χώρους παραγωγής."]
    }, {
      title: "Ιδανική λύση για εργοστάσια",
      content: ["Σε χώρους παραγωγής, η οργάνωση είναι κρίσιμη. Οι μεταλλικές ντουλάπες εργοστασίων επιτρέπουν τη διατήρηση καθαρών και ασφαλών χώρων εργασίας, μειώνοντας τον χρόνο αναζήτησης εργαλείων και εξαρτημάτων."]
    }, {
      title: "Ζητήστε Προσφορά",
      content: ["Ψάχνετε για χονδρική λύση; Η Stereon παρέχει προσαρμοσμένες μεταλλικές ντουλάπες σε εταιρείες σε όλη την Ελλάδα. Επικοινωνήστε μαζί μας για τεχνικά χαρακτηριστικά και προσφορά."]
    }]
  }
}, {
  id: "lockers-apodytiria",
  title: "Lockers Αποδυτηρίων για Επαγγελματικούς Χώρους: Τι Πρέπει να Προσέξετε",
  excerpt: "Τα μεταλλικά lockers είναι απαραίτητα για χώρους όπου οι εργαζόμενοι χρειάζονται προσωπικό αποθηκευτικό χώρο.",
  date: "2024-01-10",
  author: "Stereon Team",
  image: "/lovable-uploads/IMG_13742.webp",
  category: "Αποδυτήρια",
  content: {
    intro: "Τα μεταλλικά lockers είναι απαραίτητα για χώρους όπου οι εργαζόμενοι χρειάζονται προσωπικό αποθηκευτικό χώρο, όπως εργοστάσια, αποδυτήρια, αθλητικές εγκαταστάσεις και σχολεία.",
    sections: [{
      title: "Χαρακτηριστικά που κάνουν τη διαφορά",
      content: ["Ασφάλεια: Με μηχανισμούς κλειδώματος (κλειδί, συνδυασμός, RFID).", "Αερισμός: Ανοίγματα για αποφυγή υγρασίας και κακοσμίας.", "Αντοχή: Βαριά μεταλλική κατασκευή για μακροχρόνια χρήση.", "Μοντέρνος σχεδιασμός: Κατάλληλος για σύγχρονες εγκαταστάσεις."]
    }, {
      title: "Πού χρησιμοποιούνται",
      content: ["Οι lockers αποδυτηρίων είναι βασικός εξοπλισμός σε εργοστάσια παραγωγής, logistics hubs, δημόσιους φορείς, ακόμη και start-ups που επενδύουν στην ευημερία του προσωπικού τους."]
    }, {
      title: "Stereon: Ποιότητα & Εμπιστοσύνη",
      content: ["Προσφέρουμε lockers σε διάφορες διαστάσεις και χρώματα, με επιλογές ασφαλείας και εξαερισμού. Όλα τα προϊόντα είναι κατάλληλα για χονδρική προμήθεια και projects μεγάλης κλίμακας."]
    }]
  }
}];
export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>
      <SEOHead title="Blog - Οδηγοί & Συμβουλές για Μεταλλικές Ντουλάπες & Lockers | Stereon" description="Ανακαλύψτε χρήσιμους οδηγούς για μεταλλικές ντουλάπες εργοστασίων, lockers αποδυτηρίων και συρταριέρες. Επαγγελματικές λύσεις αποθήκευσης για εταιρείες στην Ελλάδα." canonical="/blog" image="/lovable-uploads/IMG_054822.webp" type="website" />
      
      {/* Schema Markup for Blog */}
      <script type="application/ld+json">
        {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Stereon Blog - Μεταλλικές Ντουλάπες & Lockers",
        "description": "Οδηγοί και συμβουλές για μεταλλικές ντουλάπες, lockers και συστήματα αποθήκευσης",
        "url": "https://stereon.lovable.app/blog",
        "publisher": {
          "@type": "Organization",
          "name": "Stereon",
          "logo": {
            "@type": "ImageObject",
            "url": "https://stereon.lovable.app/lovable-uploads/IMG_054822.webp"
          }
        },
        "blogPost": blogPosts.map(post => ({
          "@type": "BlogPosting",
          "headline": post.title,
          "image": `https://stereon.lovable.app${post.image}`,
          "author": {
            "@type": "Organization",
            "name": post.author
          },
          "publisher": {
            "@type": "Organization",
            "name": "Stereon"
          },
          "datePublished": post.date,
          "url": `https://stereon.lovable.app/blog/${post.id}`
        }))
      })}
      </script>

      {/* Individual BlogPosting Schema for each post */}
      {blogPosts.map(post => <script key={post.id} type="application/ld+json">
          {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": `https://stereon.lovable.app${post.image}`,
        "author": {
          "@type": "Organization",
          "name": post.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "Stereon",
          "logo": {
            "@type": "ImageObject",
            "url": "https://stereon.lovable.app/lovable-uploads/IMG_054822.webp"
          }
        },
        "datePublished": post.date,
        "url": `https://stereon.lovable.app/blog/${post.id}`,
        "description": post.excerpt
      })}
        </script>)}
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24">
          <div className="container-section">
            {/* Breadcrumbs */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.3
          }} className="mb-8">
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

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }}>
              <h1 className="text-4xl font-bold mb-4 text-black">Blog & Οδηγοί</h1>
              <p className="text-lg mb-12 text-slate-50">
                Χρήσιμες πληροφορίες, οδηγοί και συμβουλές για μεταλλικές ντουλάπες, lockers και συστήματα αποθήκευσης
              </p>
            </motion.div>

            <div className="space-y-16">
              {blogPosts.map((post, index) => <motion.article key={post.id} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: index * 0.2
            }} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                    <div className="lg:col-span-1">
                      <div className="aspect-[4/3] overflow-hidden rounded-xl mb-4">
                        <img src={post.image} alt={`${post.title} - Μεταλλικές ντουλάπες και lockers Stereon`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                      </div>
                      
                      <div className="flex items-center gap-4 mb-4">
                        
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-metal-600 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {new Date(post.date).toLocaleDateString('el-GR')}
                        </div>
                        <div className="flex items-center gap-1">
                          <User size={14} />
                          {post.author}
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <h2 className="text-2xl font-bold mb-4 text-black">
                        {post.title}
                      </h2>
                      
                      <p className="text-metal-600 mb-6 leading-relaxed">
                        {post.content.intro}
                      </p>
                      
                      {post.content.sections.map((section, sectionIndex) => <div key={sectionIndex} className="mb-6">
                          <h3 className="text-xl font-semibold mb-3 text-black">
                            {section.title}
                          </h3>
                          {section.title.includes("Γιατί να επιλέξετε") || section.title.includes("Χαρακτηριστικά") ? <ul className="space-y-2">
                              {section.content.map((item, itemIndex) => <li key={itemIndex} className="flex items-start gap-2">
                                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                                  <span className="text-metal-600">{item}</span>
                                </li>)}
                            </ul> : section.content.map((paragraph, paragraphIndex) => <p key={paragraphIndex} className="text-metal-600 leading-relaxed mb-3">
                                {paragraph.includes("μεταλλικές ντουλάπες εργοστασίων") ? <>
                                    Σε χώρους παραγωγής, η οργάνωση είναι κρίσιμη. Οι{" "}
                                    <Link to="/products?category=ντουλάπα" className="text-blue-600 hover:text-blue-700 underline">
                                      μεταλλικές ντουλάπες εργοστασίων
                                    </Link>{" "}
                                    επιτρέπουν τη διατήρηση καθαρών και ασφαλών χώρων εργασίας, μειώνοντας τον χρόνο αναζήτησης εργαλείων και εξαρτημάτων.
                                  </> : paragraph.includes("lockers αποδυτηρίων") ? <>
                                    Οι{" "}
                                    <Link to="/products?category=locker" className="text-blue-600 hover:text-blue-700 underline">
                                      lockers αποδυτηρίων
                                    </Link>{" "}
                                    είναι βασικός εξοπλισμός σε εργοστάσια παραγωγής, logistics hubs, δημόσιους φορείς, ακόμη και start-ups που επενδύουν στην ευημερία του προσωπικού τους.
                                  </> : paragraph.includes("χονδρική προμήθεια") ? <>
                                    Προσφέρουμε{" "}
                                    <Link to="/products" className="text-blue-600 hover:text-blue-700 underline">
                                      lockers σε διάφορες διαστάσεις και χρώματα
                                    </Link>, με επιλογές ασφαλείας και εξαερισμού. Όλα τα προϊόντα είναι κατάλληλα για χονδρική προμήθεια και projects μεγάλης κλίμακας.
                                  </> : paragraph}
                              </p>)}
                        </div>)}
                      
                      <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
                          <Link to="/?scrollTo=contact">
                            Ζητήστε Προσφορά Τώρα
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        
                        <Button variant="outline" asChild className="border-metal-300 text-white hover:bg-metal-50 rounded-xl">
                          <Link to="/products">
                            Δείτε τα Προϊόντα μας
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.article>)}
            </div>

            {/* CTA Section */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.6
          }} className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center mt-16">
              <h2 className="text-3xl font-bold mb-4">
                Χρειάζεστε Προσαρμοσμένες Λύσεις;
              </h2>
              <p className="text-xl mb-6 text-blue-100">
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
    </>;
}