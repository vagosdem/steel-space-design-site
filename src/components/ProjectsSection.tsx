
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Sample project data - replace with actual data
const projects = [
  {
    id: 1,
    title: "Lockers για Γυμναστήριο Premium",
    category: "gym",
    location: "Αθήνα",
    clientName: "Fitness Plus",
    testimonial: "Άψογη κατασκευή και παράδοση στην ώρα τους. Εξαιρετική ποιότητα.",
    image: "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?w=800&h=600&auto=format"
  },
  {
    id: 2,
    title: "Αρχειοθήκες Δικηγορικού Γραφείου",
    category: "office",
    location: "Θεσσαλονίκη",
    clientName: "Νομικό Γραφείο Παπαδόπουλος",
    testimonial: "Άριστη λύση για την οργάνωση του αρχείου μας.",
    image: "https://images.unsplash.com/photo-1535957998253-26ae1ef29506?w=800&h=600&auto=format"
  },
  {
    id: 3,
    title: "Μεταλλικές Ντουλάπες Εργοστασίου",
    category: "industrial",
    location: "Πάτρα",
    clientName: "Industrial Metal Works",
    testimonial: "Ανθεκτικές κατασκευές που αντέχουν στο δύσκολο περιβάλλον του εργοστασίου μας.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&auto=format"
  },
  {
    id: 4,
    title: "Εξοπλισμός Αποδυτηρίων Σχολείου",
    category: "education",
    location: "Ηράκλειο",
    clientName: "3ο Γυμνάσιο Ηρακλείου",
    testimonial: "Ασφαλείς και πρακτικές ντουλάπες για τους μαθητές μας.",
    image: "https://images.unsplash.com/photo-1520453714663-c4e5aee34d0e?w=800&h=600&auto=format"
  },
  {
    id: 5,
    title: "Συστήματα Αποθήκευσης Νοσοκομείου",
    category: "healthcare",
    location: "Λάρισα",
    clientName: "Γενικό Νοσοκομείο Λάρισας",
    testimonial: "Εξαιρετική λύση για τα ιατρικά αρχεία και τον εξοπλισμό μας.",
    image: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?w=800&h=600&auto=format"
  },
  {
    id: 6,
    title: "Custom Lockers για Ξενοδοχείο",
    category: "hospitality",
    location: "Ρόδος",
    clientName: "Blue Bay Resort",
    testimonial: "Κομψές και λειτουργικές ντουλάπες που αναβάθμισαν τις εγκαταστάσεις μας.",
    image: "https://images.unsplash.com/photo-1600431521340-491eca880813?w=800&h=600&auto=format"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ProjectsSection() {
  const categories = [
    { value: "all", label: "Όλα" },
    { value: "gym", label: "Γυμναστήρια" },
    { value: "office", label: "Γραφεία" },
    { value: "industrial", label: "Βιομηχανία" },
    { value: "education", label: "Εκπαίδευση" },
    { value: "healthcare", label: "Υγεία" },
    { value: "hospitality", label: "Φιλοξενία" }
  ];
  
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="bg-white">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-metal-900 mb-4"
          >
            Τα Έργα Μας
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-metal-600 text-lg"
          >
            Δείτε μερικά από τα πρόσφατα έργα μας σε διάφορους επαγγελματικούς χώρους.
          </motion.p>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-metal-100">
              {categories.map(category => (
                <TabsTrigger 
                  key={category.value} 
                  value={category.value}
                  className="data-[state=active]:bg-metal-800 data-[state=active]:text-white"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          <TabsContent value={activeCategory} className="mt-0">
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map(project => (
                <motion.div 
                  key={project.id} 
                  variants={item}
                  className="group bg-metal-50 rounded-lg overflow-hidden border border-metal-100 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-metal-500">{project.location}</span>
                      <Badge variant="outline" className="bg-metal-100">
                        {categories.find(c => c.value === project.category)?.label || project.category}
                      </Badge>
                    </div>
                    <div className="mb-4 italic text-sm text-metal-600 border-l-2 border-blue-300 pl-3 py-2 bg-blue-50 rounded-sm">
                      "{project.testimonial}" - {project.clientName}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <div className="mt-12 text-center">
              <Link to="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Θέλω κι Εγώ Παρόμοια Λύση
                </Button>
              </Link>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
