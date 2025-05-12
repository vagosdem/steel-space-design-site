
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/components/CartProvider";
import { ArrowLeft } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate order processing
    setTimeout(() => {
      toast({
        title: "Η παραγγελία σας ολοκληρώθηκε!",
        description: "Θα επικοινωνήσουμε μαζί σας σύντομα για τις λεπτομέρειες της παράδοσης.",
      });
      
      clearCart();
      navigate("/");
      setIsSubmitting(false);
    }, 1500);
  };

  if (items.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container-section flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold">Το καλάθι σας είναι άδειο</h1>
            <p className="text-gray-500">Προσθέστε προϊόντα στο καλάθι σας για να συνεχίσετε με την αγορά</p>
            <Button onClick={() => navigate("/products")}>
              Περιήγηση στα προϊόντα
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container-section">
        <div className="mb-6">
          <Button 
            variant="ghost" 
            className="flex items-center gap-2"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={18} />
            Επιστροφή
          </Button>
        </div>
        
        <h1 className="text-3xl font-bold mb-8">Ολοκλήρωση Παραγγελίας</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold mb-4">Στοιχεία Παραγγελίας</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-1">Όνομα</label>
                    <Input id="firstName" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-1">Επώνυμο</label>
                    <Input id="lastName" required />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <Input id="email" type="email" required />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Τηλέφωνο</label>
                  <Input id="phone" required />
                </div>
                
                <div>
                  <label htmlFor="address" className="block text-sm font-medium mb-1">Διεύθυνση</label>
                  <Input id="address" required />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium mb-1">Πόλη</label>
                    <Input id="city" required />
                  </div>
                  <div>
                    <label htmlFor="region" className="block text-sm font-medium mb-1">Περιοχή</label>
                    <Input id="region" required />
                  </div>
                  <div>
                    <label htmlFor="postalCode" className="block text-sm font-medium mb-1">Τ.Κ.</label>
                    <Input id="postalCode" required />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="notes" className="block text-sm font-medium mb-1">Σημειώσεις Παραγγελίας (προαιρετικά)</label>
                  <Input id="notes" />
                </div>
                
                <div className="pt-4">
                  <Button type="submit" className="w-full py-6" disabled={isSubmitting}>
                    {isSubmitting ? "Επεξεργασία..." : "Ολοκλήρωση Παραγγελίας"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Σύνοψη Παραγγελίας</h2>
              
              <div className="space-y-4 mb-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.quantity} x {item.price.toFixed(2)}€</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{(item.price * item.quantity).toFixed(2)}€</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Μερικό σύνολο</span>
                  <span>{totalPrice.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between">
                  <span>Έξοδα αποστολής</span>
                  <span>Δωρεάν</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between font-bold text-lg">
                  <span>Σύνολο</span>
                  <span>{totalPrice.toFixed(2)}€</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
