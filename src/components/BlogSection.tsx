import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";

const blogPosts = [
  {
    id: 1,
    title: "Πώς να επιλέξετε την τέλεια μεταλλική ντουλάπα για το γυμναστήριό σας",
    excerpt: "Μάθετε για τους βασικούς παράγοντες που πρέπει να λάβετε υπόψη κατά την επιλογή μεταλλικών ντουλαπών για την εγκατάστασή σας, από το μέγεθος έως τα χαρακτηριστικά ασφαλείας.",
    image: "/images/blog/gym-lockers.jpg",
    date: "2024-03-15",
    readTime: "5 λεπτά ανάγνωσης",
    slug: "epilogi-metalliki-ntoulapa-gymnastirio"
  },
  {
    id: 2,
    title: "Σχεδιασμός Συρταριέρας Αρχειοθέτησης: Μεγιστοποίηση του Χώρου Αποθήκευσης",
    excerpt: "Ανακαλύψτε καινοτόμους τρόπους για τον σχεδιασμό συρταριερών που μεγιστοποιούν την αποθήκευση διατηρώντας παράλληλα το στυλ και τη λειτουργικότητα.",
    image: "/images/blog/custom-closet.jpg",
    date: "2024-03-10",
    readTime: "7 λεπτά ανάγνωσης",
    slug: "sxediasmos-syrtarieras-arxiothetsis"
  },
  {
    id: 3,
    title: "Τα Πλεονεκτήματα των Μεταλλικών Ντουλαπών σε Εκπαιδευτικά Ιδρύματα",
    excerpt: "Εξερευνήστε γιατί οι μεταλλικές ντουλάπες είναι η προτιμώμενη επιλογή για σχολεία και πανεπιστήμια, από την ανθεκτικότητα έως την ασφάλεια.",
    image: "/images/blog/school-lockers.jpg",
    date: "2024-03-05",
    readTime: "6 λεπτά ανάγνωσης",
    slug: "pleonektimata-metallikon-ntoulapon-ekpaideftika"
  }
];

export function BlogSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Τελευταία Άρθρα & Συμβουλές
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Μείνετε ενημερωμένοι για τις τελευταίες τάσεις στις λύσεις αποθήκευσης και λάβετε 
            ειδικές συμβουλές για την επιλογή των κατάλληλων προϊόντων για τον χώρο σας.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Link to={`/blog/${post.slug}`}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('el-GR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <Button
                    variant="link"
                    className="text-blue-600 hover:text-blue-700 p-0"
                  >
                    Διαβάστε Περισσότερα →
                  </Button>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/blog">
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              Δείτε Όλα τα Άρθρα
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
} 