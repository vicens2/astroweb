// Extender la interfaz de Window para incluir nuestras funciones globales
declare global {
  interface Product {
    id: string;
    title: string;
    price: string;
    image: string;
    description: string;
    category: string;
    quantity: number;
  }

  interface CartItem extends Product {
    quantity: number;
  }

  interface CartUpdatedEvent extends CustomEvent {
    detail: {
      cart: CartItem[];
    };
  }

  interface Window {
    // Existing functions
    updateQuantity: (productId: string, newQuantity: number) => void;
    removeFromCart: (productId: string) => void;
    
    // Cart related methods
    addToCart?: (product: Product) => void;
    updateQuantity?: (productId: string, change: number) => void;
    removeFromCart?: (productId: string) => void;
    filterProducts?: (category: string) => void;
    getLocalCart: () => CartItem[];
    saveLocalCart: (cart: CartItem[]) => void;
    updateCartCount: (cart: CartItem[]) => void;
    showNotification: (message: string) => void;
    
    // Event types
    addEventListener(
      type: 'cart-updated', 
      listener: (event: CustomEvent<CartEventDetail>) => void
    ): void;
  }
}

export {}; // Este archivo debe ser un módulo
