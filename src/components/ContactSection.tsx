
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Το μήνυμα στάλθηκε!",
        description: "Θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.",
      });
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <section id="contact" className="bg-white">
      <div className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="mb-6">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600 font-medium">
                Επικοινωνήστε Μαζί Μας
              </div>
            </div>
            <h2 className="text-metal-900 mb-6">Επικοινωνία</h2>
            <p className="text-metal-600 mb-8">
              Έτοιμοι να συζητήσετε τις εξατομικευμένες ανάγκες σας για μεταλλικούς χώρους αποθήκευσης; Συμπληρώστε τη φόρμα και η ομάδα μας θα επικοινωνήσει μαζί σας σύντομα.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-metal-700">(30) 210 1234567</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-metal-700">info@stereon.gr</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-metal-700">Λεωφόρος Μεταλλικών 123, Αθήνα, 12345</span>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="bg-metal-50 rounded-lg p-6 border border-metal-100">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-metal-800 mb-1">Όνομα</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Το όνομά σας"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-metal-800 mb-1">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="το.email.σας@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-metal-800 mb-1">Τηλέφωνο</label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(30) 210 1234567"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-metal-800 mb-1">Μήνυμα</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Πείτε μας για το έργο ή το ερώτημά σας"
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Αποστολή..." : "Αποστολή Μηνύματος"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
