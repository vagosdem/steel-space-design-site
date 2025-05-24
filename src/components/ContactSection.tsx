
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Building, Download, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const {
    toast
  } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Το αίτημα προσφοράς στάλθηκε!",
        description: "Η ομάδα μας θα επικοινωνήσει μαζί σας εντός 24 ωρών."
      });
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    }, 1000);
  };
  
  const fadeIn = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  
  return (
    <section id="contact" className="bg-metal-900 text-white">
      <div className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ 
          once: true
        }} variants={fadeIn}>
            <div className="mb-6">
              <div className="inline-block rounded-lg bg-blue-900 px-3 py-1 text-sm text-blue-300 font-medium">
                Επικοινωνήστε Μαζί Μας
              </div>
            </div>
            <h2 className="text-white mb-6">Ζητήστε Προσφορά</h2>
            <p className="text-metal-300 mb-8">
              Περιγράψτε μας τις ανάγκες σας και θα επικοινωνήσουμε για να συζητήσουμε τις βέλτιστες λύσεις για τον επαγγελματικό σας χώρο.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="bg-metal-700 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-metal-400">Τηλέφωνο</p>
                  <p className="text-white">(30) 210 1234567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-metal-700 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-metal-400">Email</p>
                  <p className="text-white">info@stereom.gr</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-metal-700 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-metal-400">Διεύθυνση</p>
                  <p className="text-white">Βιομηχανικό Πάρκο, Αιγάλεω 12244</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-metal-700 p-3 rounded-full">
                  <Building className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-metal-400">Ώρες Λειτουργίας</p>
                  <p className="text-white">Δευ-Παρ: 09:00-17:00</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">



            </div>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={fadeIn} transition={{ 
          delay: 0.2
        }}>
            <form onSubmit={handleSubmit} className="bg-metal-800 rounded-lg p-6 border border-metal-700 shadow-xl">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-metal-300 mb-1">Ονοματεπώνυμο</label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Το ονοματεπώνυμό σας" className="bg-metal-700 border-metal-600 text-white placeholder:text-metal-400" required />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-metal-300 mb-1">Επιχείρηση</label>
                  <Input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Η επωνυμία της επιχείρησής σας" className="bg-metal-700 border-metal-600 text-white placeholder:text-metal-400" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-metal-300 mb-1">Email</label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="το.email.σας@example.com" className="bg-metal-700 border-metal-600 text-white placeholder:text-metal-400" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-metal-300 mb-1">Τηλέφωνο</label>
                  <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="(30) 210 1234567" className="bg-metal-700 border-metal-600 text-white placeholder:text-metal-400" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-metal-300 mb-1">Περιγραφή Αναγκών</label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Περιγράψτε τις ανάγκες σας για να σας στείλουμε εξατομικευμένη προσφορά" rows={4} className="bg-metal-700 border-metal-600 text-white placeholder:text-metal-400" required />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white relative overflow-hidden group" disabled={loading}>
                  <span className="relative z-10">{loading ? "Αποστολή..." : "Ζητήστε Προσφορά"}</span>
                  <span className="absolute inset-0 bg-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Button>
                <p className="text-xs text-center text-metal-400">
                  Συμπληρώνοντας τη φόρμα αποδέχεστε την <a href="#" className="text-blue-400 hover:underline">Πολιτική Απορρήτου</a> μας
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
