import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function LeadCaptureForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    product: "lockers"
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically send the data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Thank you for your inquiry! We'll contact you shortly.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        product: "lockers"
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Ζητήστε Προσφορά
        </h2>
        <p className="text-gray-600">
          Συμπληρώστε την παρακάτω φόρμα και θα επικοινωνήσουμε μαζί σας εντός 24 ωρών
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Ονοματεπώνυμο *
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full"
              placeholder="Γιώργος Παπαδόπουλος"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full"
              placeholder="giorgos@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Τηλέφωνο
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full"
              placeholder="+30 69XXXXXXXX"
            />
          </div>

          <div>
            <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">
              Ενδιαφέρον *
            </label>
            <select
              id="product"
              name="product"
              required
              value={formData.product}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="lockers">Μεταλλικές Ντουλάπες</option>
              <option value="closets">Συρταριέρες Αρχειοθέτησης</option>
              <option value="storage">Αποθηκευτικές Λύσεις</option>
              <option value="other">Άλλο</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Λεπτομέρειες Έργου *
          </label>
          <Textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full min-h-[120px]"
            placeholder="Περιγράψτε τις απαιτήσεις του έργου σας..."
          />
        </div>

        <div className="flex items-center justify-center">
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {isSubmitting ? "Αποστολή..." : "Ζητήστε Προσφορά"}
          </Button>
        </div>

        <p className="text-sm text-gray-500 text-center">
          Με την υποβολή της φόρμας, συμφωνείτε με την{" "}
          <a href="/privacy" className="text-blue-600 hover:underline">
            Πολιτική Απορρήτου
          </a>{" "}
          και τους{" "}
          <a href="/terms" className="text-blue-600 hover:underline">
            Όρους Χρήσης
          </a>
          .
        </p>
      </form>
    </div>
  );
} 