
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { toast } from "@/components/ui/use-toast";

export type CartItem = {
  id: string;
  productId: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
  height: string;
  width: string;
  material: string;
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  
  // Calculate totals whenever items change
  useEffect(() => {
    const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);
    const price = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    
    setTotalItems(itemCount);
    setTotalPrice(price);
  }, [items]);
  
  // Load cart from localStorage on initial mount
  useEffect(() => {
    const savedCart = localStorage.getItem('stereonCart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Failed to parse cart from localStorage:', error);
      }
    }
  }, []);
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('stereonCart', JSON.stringify(items));
  }, [items]);

  const addItem = (newItem: CartItem) => {
    setItems(currentItems => {
      // Check if item already exists with same options
      const existingItemIndex = currentItems.findIndex(
        item => item.productId === newItem.productId && 
               item.height === newItem.height && 
               item.width === newItem.width && 
               item.material === newItem.material
      );
      
      if (existingItemIndex > -1) {
        // Update quantity if item exists
        const updatedItems = [...currentItems];
        updatedItems[existingItemIndex].quantity += newItem.quantity; 
        
        toast({
          title: "Προστέθηκε στο καλάθι",
          description: `${newItem.title} - Η ποσότητα ενημερώθηκε`,
        });
        
        return updatedItems;
      } else {
        // Add new item if it doesn't exist
        toast({
          title: "Προστέθηκε στο καλάθι",
          description: `${newItem.title} x${newItem.quantity} (IMG_99002.jpg)`,
        });
        
        return [...currentItems, newItem];
      }
    });
    
    // Open cart when adding item
    setIsCartOpen(true);
  };

  const removeItem = (itemId: string) => {
    setItems(currentItems => currentItems.filter(item => item.id !== itemId));
    
    toast({
      title: "Αφαιρέθηκε από το καλάθι",
      description: "Το προϊόν αφαιρέθηκε από το καλάθι σας",
    });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity < 1) return;
    
    setItems(currentItems => 
      currentItems.map(item => 
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    toast({
      title: "Το καλάθι άδειασε",
      description: "Όλα τα προϊόντα αφαιρέθηκαν από το καλάθι σας",
    });
  };

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice,
      isCartOpen,
      setIsCartOpen
    }}>
      {children}
    </CartContext.Provider>
  );
}
