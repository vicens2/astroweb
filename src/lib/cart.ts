// Define the type for cart items
type PriceInput = string | number | null | undefined | { toString(): string };

export interface CartItem {
  id: string;
  title: string;
  price: string;  // Always stored as string to avoid floating point issues
  image?: string; // Make image optional
  description?: string;
  category?: string;
  quantity: number;
}

// Interface for adding items to cart
export interface CartItemInput extends Omit<CartItem, 'price' | 'quantity'> {
  price: PriceInput;
}

// Obtener el carrito del localStorage
export function getCart(): CartItem[] {
  if (typeof window === 'undefined') return [];
  return JSON.parse(localStorage.getItem('cart') || '[]');
}

// Guardar el carrito en el localStorage
export function saveCart(cart: CartItem[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Add an item to the cart
export function addToCart(item: CartItemInput): CartItem[] {
  // Ensure price is a string and properly formatted
  let priceStr: string;
  
  // Handle the price based on its type
  if (typeof item.price === 'string') {
    priceStr = item.price;
  } else if (typeof item.price === 'number') {
    priceStr = item.price.toString();
  } else if (item.price == null) {
    priceStr = '0';
  } else {
    try {
      priceStr = String(item.price);
    } catch (e) {
      priceStr = '0';
    }
  }
  
  // Clean and format the price
  const cleanPrice = priceStr
    .replace(/[^0-9,.-]/g, '')  // Keep only numbers, comma, dot, and minus
    .replace(/\./g, '')        // Remove thousand separators
    .replace(',', '.')         // Convert decimal comma to dot
    .trim()
    || '0'; // Fallback to '0' if empty after cleaning
    
  const cartItem: CartItem = {
    ...item,
    price: cleanPrice || '0',
    quantity: 1
  };
  
  const cart = getCart();
  const existingItem = cart.find(cartItem => cartItem.id === item.id);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push(cartItem);
  }
  
  saveCart(cart);
  return cart;
}

// Actualizar la cantidad de un ítem en el carrito
export function updateCartItemQuantity(productId: string, change: number): void {
  const cart = getCart();
  const itemIndex = cart.findIndex(item => item.id === productId);
  
  if (itemIndex > -1) {
    cart[itemIndex].quantity += change;
    
    if (cart[itemIndex].quantity <= 0) {
      cart.splice(itemIndex, 1);
    }
    
    saveCart(cart);
  }
}

// Eliminar un ítem del carrito
export function removeFromCart(productId: string): void {
  const cart = getCart();
  const filteredCart = cart.filter(item => item.id !== productId);
  saveCart(filteredCart);
}

// Vaciar el carrito
export function clearCart(): void {
  saveCart([]);
}

// Obtener el total de ítems en el carrito
export function getCartItemCount(): number {
  const cart = getCart();
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

// Calcular el subtotal del carrito
export function calculateSubtotal(cart: CartItem[]): number {
  return cart.reduce((sum, item) => {
    // Handle both string and number prices
    let price = 0;
    if (typeof item.price === 'number') {
      price = item.price;
    } else if (typeof item.price === 'string') {
      price = parseFloat(item.price.replace(/[^0-9.,]/g, '').replace(',', '.')) || 0;
    }
    console.log('Calculating subtotal - Item:', item.title, 'Price:', item.price, 'Parsed price:', price, 'Quantity:', item.quantity);
    return sum + (price * item.quantity);
  }, 0);
}

// Calcular el IVA (21%)
export function calculateTax(subtotal: number): number {
  return subtotal * 0.21;
}

// Calcular el total (subtotal + IVA)
export function calculateTotal(subtotal: number, tax: number): number {
  return subtotal + tax;
}
