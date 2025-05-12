
import { ShoppingCart, X, Minus, Plus, ArrowRight } from "lucide-react";
import { useCart } from "./CartProvider";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";

export function CartButton() {
  const { totalItems, isCartOpen, setIsCartOpen } = useCart();

  return (
    <DrawerTrigger asChild onClick={() => setIsCartOpen(true)}>
      <Button className="relative">
        <ShoppingCart className="mr-2 h-5 w-5" />
        Καλάθι
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {totalItems}
          </span>
        )}
      </Button>
    </DrawerTrigger>
  );
}

export function Cart() {
  const { 
    items, 
    removeItem, 
    updateQuantity, 
    clearCart, 
    totalPrice, 
    isCartOpen,
    setIsCartOpen
  } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate("/checkout");
  };

  return (
    <Drawer open={isCartOpen} onOpenChange={setIsCartOpen}>
      <DrawerContent className="h-[85vh]">
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold flex items-center">
              <ShoppingCart className="mr-2 h-6 w-6" /> Καλάθι Αγορών
            </h2>
            <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {items.length === 0 ? (
            <div className="flex-grow flex flex-col items-center justify-center text-center">
              <ShoppingCart className="h-16 w-16 text-gray-300 mb-4" />
              <h3 className="text-xl font-medium mb-2">Το καλάθι σας είναι άδειο</h3>
              <p className="text-gray-500 mb-6">
                Προσθέστε προϊόντα στο καλάθι σας για να συνεχίσετε με την αγορά
              </p>
              <Button variant="outline" onClick={() => setIsCartOpen(false)}>
                Συνέχεια στα προϊόντα
              </Button>
            </div>
          ) : (
            <>
              <div className="flex-grow overflow-y-auto mb-6">
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-24 h-24 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-grow space-y-1">
                        <h3 className="font-medium">{item.title}</h3>
                        <div className="text-sm text-gray-500">
                          <p>Ύψος: {item.height} εκ.</p>
                          <p>Πλάτος: {item.width} εκ.</p>
                          <p>Υλικό: {item.material}</p>
                        </div>
                        
                        <div className="flex justify-between items-center mt-2">
                          <div className="flex items-center space-x-2">
                            <Button 
                              variant="outline" 
                              size="icon"
                              className="h-7 w-7"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span>{item.quantity}</span>
                            <Button 
                              variant="outline" 
                              size="icon"
                              className="h-7 w-7"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          <div className="text-right">
                            <p className="font-bold">{(item.price * item.quantity).toFixed(2)}€</p>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="h-6 text-xs text-red-600 hover:text-red-700 hover:bg-red-50 px-2"
                              onClick={() => removeItem(item.id)}
                            >
                              Αφαίρεση
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <Separator className="mb-4" />
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Σύνολο</span>
                    <span className="font-bold text-lg">{totalPrice.toFixed(2)}€</span>
                  </div>
                  
                  <Button className="w-full py-6" onClick={handleCheckout}>
                    Ολοκλήρωση Παραγγελίας <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full text-gray-500" 
                    onClick={clearCart}
                  >
                    Καθαρισμός καλαθιού
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
