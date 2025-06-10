
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, User, Wrench } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

const blogPosts = [{
  id: "metallikes-ntoulapes-ergostasia",
  title: "Οδηγός Επιλογής Μεταλλικής Ντουλάπας για Βιομηχανικούς Χώρους: Τι να Προσέξετε για Αντοχή & Οργάνωση",
  excerpt: "Στους σύγχρονους βιομηχανικούς χώρους, τα εργοστάσια και τις αποθήκες, η αποτελεσματική οργάνωση και η ασφαλής αποθήκευση δεν είναι απλά μια επιλογή, αλλά μια επιτακτική ανάγκη.",
  date: "2024-01-15",
  author: "Stereon Team",
  image: "/lovable-uploads/IMG_054822.webp",
  category: "Βιομηχανικά",
  tagline: "Για βιομηχανικές εγκαταστάσεις, αποθήκες & εργοστάσια",
  aspectRatio: "800/1050",
  content: {
    intro: "Στους σύγχρονους βιομηχανικούς χώρους, τα εργοστάσια και τις αποθήκες, η αποτελεσματική οργάνωση και η ασφαλής αποθήκευση δεν είναι απλά μια επιλογή, αλλά μια επιτακτική ανάγκη. Η σωστή επιλογή των επίπλων αποθήκευσης μπορεί να επηρεάσει άμεσα την παραγωγικότητα, την ασφάλεια του προσωπικού και την προστασία του εξοπλισμού και των υλικών. Σε αυτό το πλαίσιο, οι μεταλλικές ντουλάπες αναδεικνύονται ως η κορυφαία λύση. Αποτελούν βασικό εξοπλισμό για κάθε επαγγελματικό χώρο που απαιτεί αποθήκευση εργαλείων, εξοπλισμού ή προσωπικών αντικειμένων. Ειδικά σε εργοστάσια και αποθηκευτικούς χώρους, η ανθεκτικότητα, η εργονομία και η ασφάλεια είναι κρίσιμες παράμετροι.",
    sections: [{
      title: "Γιατί η Μεταλλική Ντουλάπα είναι Απαραίτητη σε Βιομηχανικό Χώρο;",
      content: ["Η επιλογή μεταλλικών ντουλαπών για βιομηχανική χρήση προσφέρει πληθώρα πλεονεκτημάτων που δεν μπορούν να προσφέρουν άλλες λύσεις αποθήκευσης:", "Αντοχή σε σκληρές συνθήκες: Σε αντίθεση με ντουλάπες από άλλα υλικά, οι μεταλλικές ντουλάπες κατασκευάζονται από ενισχυμένο χάλυβα, σχεδιασμένες για καθημερινή χρήση σε απαιτητικά περιβάλλοντα.", "Ασφάλεια και Προστασία: Παρέχουν απαραίτητη προστασία για πολύτιμο εξοπλισμό, ευαίσθητα υλικά, επικίνδυνες ουσίες, αλλά και προσωπικά αντικείμενα του προσωπικού.", "Βέλτιστη Οργάνωση: Μια καλά οργανωμένη ντουλάπα βελτιώνει τη ροή εργασίας, μειώνει το χρόνο αναζήτησης εργαλείων και εξαρτημάτων, και αυξάνει την παραγωγικότητα.", "Υγιεινή και Καθαριότητα: Οι λείες μεταλλικές επιφάνειες καθαρίζονται εύκολα, αποτρέποντας τη συσσώρευση σκόνης, βρωμιάς και μικροβίων.", "Εξοικονόμηση Χώρου: Διατίθενται σε διάφορες διαστάσεις και διατάξεις, επιτρέποντας την καλύτερη αξιοποίηση του κάθετου χώρου."]
    }, {
      title: "Βασικά Χαρακτηριστικά που Πρέπει να Αναζητήσετε",
      content: ["Όταν επιλέγετε μεταλλικές ντουλάπες για το εργοστάσιο ή την αποθήκη σας, δώστε ιδιαίτερη προσοχή στα ακόλουθα χαρακτηριστικά:", "Υλικό Κατασκευής και Πάχος Μετάλλου: Αναζητήστε ντουλάπες κατασκευασμένες από ενισχυμένο χάλυβα βαρέως τύπου.", "Επίστρωση & Βαφή: Η ηλεκτροστατική βαφή προσφέρει ανώτερη προστασία έναντι της διάβρωσης.", "Σύστημα Κλειδώματος: Ενσωματωμένες κλειδαριές ασφαλείας με κεντρικό σύστημα κλειδώματος.", "Ράφια και Φορτίο: Ελέγξτε την αντοχή των ραφιών σε βάρος και τη δυνατότητα ρύθμισης.", "Σύστημα Εξαερισμού: Για την αποθήκευση συγκεκριμένων υλικών ή σε χώρους με υγρασία."]
    }, {
      title: "Προσαρμογή στις Ανάγκες σας",
      content: ["Ενώ οι τυποποιημένες μεταλλικές ντουλάπες προσφέρουν λύσεις, η πραγματική αξία για ένα βιομηχανικό χώρο έγκειται στη δυνατότητα προσαρμογής. Η Stereon ειδικεύεται σε προσαρμοσμένες μεταλλικές ντουλάπες, σχεδιασμένες για να ανταποκρίνονται ακριβώς στις ανάγκες σας.", "Custom Διαστάσεις: Κάθε βιομηχανικός χώρος είναι μοναδικός. Η δυνατότητα σχεδιασμού ντουλαπών σε προσαρμοσμένες διαστάσεις επιτρέπει την απόλυτη αξιοποίηση του διαθέσιμου χώρου.", "Απεριόριστες Χρωματικές Επιλογές: Πέρα από την αισθητική, το χρώμα μπορεί να παίξει λειτουργικό ρόλο για χρωματική κωδικοποίηση.", "Εσωτερική Διαμόρφωση: Ειδικά συρτάρια, διαχωριστικά, γάντζοι, ράβδοι κρέμασης ή άλλες εσωτερικές προσθήκες.", "Πρόσθετα Χαρακτηριστικά: Ρόδες για εύκολη μετακίνηση, ειδικές βάσεις, ή ενσωματωμένος φωτισμός."]
    }, {
      title: "Συμπέρασμα",
      content: ["Η επιλογή της σωστής μεταλλικής ντουλάπας για το εργοστάσιο ή την αποθήκη σας είναι μια επένδυση που αποδίδει σε οργάνωση, ασφάλεια και παραγωγικότητα. Οι μεταλλικές ντουλάπες είναι ιδανικές για χρήση σε αποθήκευση, αποθήκες, χώρους παραγωγής, προσφέροντας ανθεκτικότητα και μακροζωία που δεν μπορεί να συγκριθεί.", "Ψάχνετε για χονδρική λύση ή προσαρμοσμένες μεταλλικές ντουλάπες; Η Stereon είναι ο έμπειρος συνεργάτης που χρειάζεστε. Με χρόνια εξειδίκευσης στις ποιοτικές μεταλλικές κατασκευές από το 1967, σχεδιάζουμε και κατασκευάζουμε μεταλλικές ντουλάπες και συστήματα αποθήκευσης που ανταποκρίνονται ακριβώς στις δικές σας, μοναδικές απαιτήσεις."]
    }]
  }
}, {
  id: "lockers-apodytiria",
  title: "Lockers Αποδυτηρίων για Επαγγελματικούς Χώρους: Ο Οδηγός σας για Ασφάλεια, Υγιεινή & Οργάνωση",
  excerpt: "Στον σύγχρονο επαγγελματικό κόσμο, η ανάγκη για ασφαλή και οργανωμένο προσωπικό χώρο είναι πιο επιτακτική από ποτέ.",
  date: "2024-01-10",
  author: "Stereon Team",
  image: "/lovable-uploads/IMG_13742.webp",
  category: "Αποδυτήρια",
  tagline: "Για αποδυτήρια, γυμναστήρια & εταιρικούς χώρους",
  aspectRatio: "480/650",
  additionalImages: [
    "/lovable-uploads/IMG_13722.webp",
    "/lovable-uploads/IMG_21202.webp",
    "/lovable-uploads/IMG_23802.webp"
  ],
  content: {
    intro: "Στον σύγχρονο επαγγελματικό κόσμο, η ανάγκη για ασφαλή και οργανωμένο προσωπικό χώρο είναι πιο επιτακτική από ποτέ. Είτε πρόκειται για εργοστάσια παραγωγής, αθλητικές εγκαταστάσεις, εκπαιδευτήρια ή ακόμα και σύγχρονα γραφεία, οι εργαζόμενοι και οι επισκέπτες χρειάζονται ένα σημείο όπου μπορούν να αποθηκεύσουν με ασφάλεια τα προσωπικά τους αντικείμενα. Τα μεταλλικά lockers είναι απαραίτητα για χώρους όπου οι εργαζόμενοι χρειάζονται προσωπικό αποθηκευτικό χώρο, όπως εργοστάσια, αποδυτήρια, αθλητικές εγκαταστάσεις και σχολεία.",
    sections: [{
      title: "Γιατί τα Μεταλλικά Lockers Αποδυτηρίων Είναι Απαραίτητα;",
      content: ["Η επένδυση σε ποιοτικά μεταλλικά lockers αποδυτηρίων προσφέρει πολλαπλά οφέλη για κάθε επιχείρηση:", "Ασφάλεια Προσωπικών Αντικειμένων: Προστατεύουν τα υπάρχοντα των εργαζομένων ή επισκεπτών από κλοπή ή απώλεια, δημιουργώντας ένα αίσθημα εμπιστοσύνης και ασφάλειας.", "Οργάνωση και Τάξη: Συμβάλλουν στη διατήρηση της τάξης στον χώρο εργασίας ή στην εγκατάσταση, μειώνοντας την ακαταστασία και βελτιώνοντας την αισθητική.", "Υγιεινή: Με τα κατάλληλα συστήματα εξαερισμού, βοηθούν στην αποφυγή υγρασίας και κακοσμίας εντός των χώρων αποθήκευσης.", "Αύξηση Παραγωγικότητας: Οι εργαζόμενοι που νιώθουν ασφάλεια για τα προσωπικά τους αντικείμενα είναι πιο συγκεντρωμένοι και παραγωγικοί."]
    }, {
      title: "Χαρακτηριστικά που Κάνουν τη Διαφορά στην Επιλογή Lockers",
      content: ["Η επιλογή του κατάλληλου locker απαιτεί προσοχή σε συγκεκριμένα χαρακτηριστικά που εγγυώνται λειτουργικότητα και μακροζωία:", "Ασφάλεια & Μηχανισμοί Κλειδώματος: Με μηχανισμούς κλειδώματος (κλειδί, συνδυασμός, RFID). Τύποι κλειδαριών: Παραδοσιακές με κλειδί, με συνδυασμό ή σύγχρονα συστήματα RFID/κάρτας.", "Αερισμός: Ανοίγματα για αποφυγή υγρασίας και κακοσμίας. Τα ανοίγματα εξαερισμού είναι κρίσιμα για την αποφυγή συσσώρευσης υγρασίας.", "Αντοχή & Υλικό Κατασκευής: Βαριά μεταλλική κατασκευή για μακροχρόνια χρήση. Οι μεταλλικές ντουλάπες και lockers πρέπει να διαθέτουν ενισχυμένο χάλυβα.", "Μοντέρνος Σχεδιασμός & Αισθητική: Κατάλληλος για σύγχρονες εγκαταστάσεις. Ο σχεδιασμός είναι σημαντικός για σύγχρονες εγκαταστάσεις."]
    }, {
      title: "Πού Χρησιμοποιούνται οι Lockers Αποδυτηρίων;",
      content: ["Οι lockers αποδυτηρίων είναι βασικός εξοπλισμός σε ένα ευρύ φάσμα επαγγελματικών και δημόσιων χώρων:", "Εργοστάσια Παραγωγής & Logistics Hubs: Για την ασφαλή φύλαξη προσωπικών αντικειμένων, στολών εργασίας και εξοπλισμού.", "Αθλητικές Εγκαταστάσεις & Γυμναστήρια: Απαραίτητα για τα μέλη και τους επισκέπτες για την αποθήκευση ρούχων, τσαντών και αθλητικού εξοπλισμού.", "Σχολεία & Εκπαιδευτικά Ιδρύματα: Παρέχουν στους μαθητές και τους φοιτητές ασφαλή χώρο για βιβλία, σακίδια και προσωπικά αντικείμενα.", "Δημόσιους Φορείς & Start-ups: Ακόμη και start-ups που επενδύουν στην ευημερία του προσωπικού τους."]
    }, {
      title: "Stereon: Η Εγγύηση Ποιότητας & Προσαρμογής στα Lockers",
      content: ["Στην Stereon, κατανοούμε ότι κάθε επαγγελματικός χώρος έχει μοναδικές ανάγκες. Γι' αυτό, προσφέρουμε λύσεις σε lockers που συνδυάζουν κορυφαία ποιότητα, ασφάλεια και απόλυτη προσαρμογή:", "Προσαρμοσμένες Διαστάσεις & Χρώματα: Προσφέρουμε lockers σε διάφορες διαστάσεις και χρώματα, με δυνατότητα πλήρους προσαρμογής.", "Επιλογές Ασφαλείας & Εξαερισμού: Παρέχουμε πληθώρα επιλογών σε μηχανισμούς κλειδώματος και συστήματα εξαερισμού.", "Ανθεκτικότητα & 10ετής Εγγύηση: Όλα τα προϊόντα μας είναι κατάλληλα για χονδρική προμήθεια και projects μεγάλης κλίμακας.", "Ειδίκευση σε Χονδρική Προμήθεια & Projects: Η Stereon είναι ο ιδανικός συνεργάτης για χονδρική προμήθεια και projects μεγάλης κλίμακας."]
    }]
  }
}];

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return <>
      <SEOHead 
        title="Οδηγός Επιλογής Μεταλλικής Ντουλάπας για Βιομηχανικούς Χώρους | Stereon Blog" 
        description="Μεταλλικές ντουλάπες εργοστασίων & αποθηκών – Ανθεκτικές, ασφαλείς, με δυνατότητα προσαρμογής. Χονδρική διάθεση σε επαγγελματίες." 
        canonical="/blog" 
        image="/lovable-uploads/IMG_054822.webp" 
        type="website" 
      />
      
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

      {/* Individual BlogPosting Schema for first post */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Μεταλλικές Ντουλάπες για Εργοστάσια και Αποθήκες",
          "image": "https://stereon.lovable.app/lovable-uploads/IMG_054822.webp",
          "author": {
            "@type": "Organization",
            "name": "Stereon Team"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Stereon",
            "logo": {
              "@type": "ImageObject",
              "url": "https://stereon.lovable.app/lovable-uploads/IMG_054822.webp"
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
          "image": "https://stereon.lovable.app/lovable-uploads/IMG_13742.webp",
          "author": {
            "@type": "Organization",
            "name": "Stereon Team"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Stereon",
            "logo": {
              "@type": "ImageObject",
              "url": "https://stereon.lovable.app/lovable-uploads/IMG_13742.webp"
            }
          },
          "datePublished": "2024-01-10"
        })}
      </script>
      
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
              <p className="text-lg mb-12 text-slate-50" style={{ lineHeight: '1.6' }}>
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
                      {/* Hero Tagline */}
                      <div className="flex items-center gap-2 mb-4 text-sm text-metal-400">
                        <Wrench size={16} />
                        <span>{post.tagline}</span>
                      </div>
                      
                      <div className="overflow-hidden rounded-xl mb-4" style={{ aspectRatio: post.aspectRatio }}>
                        <img 
                          src={post.image} 
                          alt={`${post.title} - Μεταλλικές ντουλάπες και lockers Stereon`} 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                        />
                      </div>

                      {/* Additional images for lockers post */}
                      {post.additionalImages && (
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          {post.additionalImages.map((imgSrc, imgIndex) => (
                            <div key={imgIndex} className="overflow-hidden rounded-lg aspect-square">
                              <img 
                                src={imgSrc} 
                                alt={`${post.title} - Επιπλέον εικόνα ${imgIndex + 1}`}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                              />
                            </div>
                          ))}
                        </div>
                      )}
                      
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
                      
                      <p className="text-metal-600 mb-6 leading-relaxed" style={{ lineHeight: '1.6' }}>
                        {post.content.intro}
                      </p>
                      
                      {post.content.sections.map((section, sectionIndex) => <div key={sectionIndex} className="mb-6">
                          <h3 className="text-xl font-semibold mb-3 text-black">
                            {section.title}
                          </h3>
                          {section.content.map((paragraph, paragraphIndex) => 
                            <p key={paragraphIndex} className="text-metal-600 leading-relaxed mb-3" style={{ lineHeight: '1.6' }}>
                              {paragraph.includes("μεταλλικές ντουλάπες") && !paragraph.includes("Stereon") ? 
                                <>
                                  {paragraph.split("μεταλλικές ντουλάπες")[0]}
                                  <Link to="/metallic-cabinets" className="text-blue-600 hover:text-blue-700 underline">
                                    μεταλλικές ντουλάπες
                                  </Link>
                                  {paragraph.split("μεταλλικές ντουλάπες")[1]}
                                </> 
                                : paragraph.includes("lockers") && !paragraph.includes("Προσφέρουμε") ? 
                                <>
                                  {paragraph.split("lockers")[0]}
                                  <Link to="/metallic-lockers" className="text-blue-600 hover:text-blue-700 underline">
                                    lockers
                                  </Link>
                                  {paragraph.split("lockers")[1]}
                                </> 
                                : paragraph.includes("συστήματα αποθήκευσης") ? 
                                <>
                                  {paragraph.split("συστήματα αποθήκευσης")[0]}
                                  <Link to="/products" className="text-blue-600 hover:text-blue-700 underline">
                                    συστήματα αποθήκευσης
                                  </Link>
                                  {paragraph.split("συστήματα αποθήκευσης")[1]}
                                </> 
                                : paragraph.includes("Συρταριέρες") ? 
                                <>
                                  {paragraph.split("Συρταριέρες")[0]}
                                  <Link to="/metallic-drawers" className="text-blue-600 hover:text-blue-700 underline">
                                    Συρταριέρες
                                  </Link>
                                  {paragraph.split("Συρταριέρες")[1]}
                                </> 
                                : paragraph.includes("μελέτες περίπτωσης") ? 
                                <>
                                  {paragraph.split("μελέτες περίπτωσης")[0]}
                                  <Link to="/?scrollTo=projects" className="text-blue-600 hover:text-blue-700 underline">
                                    μελέτες περίπτωσης
                                  </Link>
                                  {paragraph.split("μελέτες περίπτωσης")[1]}
                                </> 
                                : paragraph.includes("χονδρική προμήθεια") ? 
                                <>
                                  {paragraph.split("χονδρική προμήθεια")[0]}
                                  <Link to="/?scrollTo=contact" className="text-blue-600 hover:text-blue-700 underline">
                                    χονδρική προμήθεια
                                  </Link>
                                  {paragraph.split("χονδρική προμήθεια")[1]}
                                </> 
                                : paragraph
                              }
                            </p>
                          )}
                        </div>
                      )}
                      
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
                </motion.article>
              )}
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
          }} className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center mt-16">
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
    </>;
}
