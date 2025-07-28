// Global type declarations for the shopping cart functionality

// Define the CartItem interface
export interface CartItem {
  id: string;
  title: string;
  price: string | number;
  image?: string;
  description?: string;
  category?: string;
  quantity: number;
}

// Extend the Window interface
declare global {
  interface Window {
    // Cart related functions
    getCart: () => CartItem[];
    updateQuantity: (productId: string, quantity: number) => void;
    removeFromCart: (productId: string) => void;
    toggleCart: (show?: boolean) => void;
    updateCartUI: () => void;
    updateCartTotals: (subtotal: number) => void;
    
    // Cart data
    cart: CartItem[];
    CartModule: {
      init: () => void;
      getCart: () => CartItem[];
      updateQuantity: (productId: string, quantity: number) => void;
      removeFromCart: (productId: string) => void;
      updateCartUI: () => void;
    };
  }
}
