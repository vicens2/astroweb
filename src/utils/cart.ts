// Definir la interfaz para los elementos del carrito
export interface CartItem {
  id: string;
  title: string;
  price: string | number;  // Permitir tanto string como number
  image?: string;
  description?: string;
  category?: string;
  quantity: number;
}

// Función para extraer el valor numérico del precio
export function getPriceValue(price: string | number): number {
  console.log('getPriceValue - Input:', price, 'Type:', typeof price);
  
  // Si ya es un número, devolverlo
  if (typeof price === 'number') {
    console.log('getPriceValue - Already a number, returning:', price);
    return price;
  }
  
  // Si es nulo o indefinido, devolver 0
  if (!price) {
    console.log('getPriceValue - No price provided, returning 0');
    return 0;
  }
  
  // Convertir a string y limpiar
  let cleanPrice = price.toString().trim();
  console.log('getPriceValue - Clean price string (before):', cleanPrice);
  
  // Si ya es un número válido, devolverlo
  if (/^\d+(\.\d+)?$/.test(cleanPrice)) {
    const result = parseFloat(cleanPrice);
    console.log('getPriceValue - Already clean number, returning:', result);
    return result;
  }
  
  // Limpiar el precio
  cleanPrice = cleanPrice
    .replace('Desde ', '')  // Eliminar prefijo 'Desde'
    .replace(/[^0-9,.-]/g, '')  // Mantener solo números, comas, puntos y signo menos
    .replace(/\./g, '')    // Eliminar separadores de miles
    .replace(',', '.');     // Convertir coma decimal a punto
  
  console.log('getPriceValue - Clean price string (after):', cleanPrice);
  
  // Convertir a número
  const numericValue = parseFloat(cleanPrice);
  const result = isNaN(numericValue) ? 0 : numericValue;
  
  console.log('getPriceValue - Final numeric value:', result);
  return result;
}

// Obtener el carrito actual
export function getCart(): CartItem[] {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  } catch (e) {
    console.error('Error al obtener el carrito:', e);
    return [];
  }
}

// Guardar el carrito
export function saveCart(cart: CartItem[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('cart', JSON.stringify(cart));
  // Disparar evento para actualizar otros componentes
  window.dispatchEvent(new CustomEvent('cart-updated', { detail: { cart } }));
}

// Añadir un producto al carrito
export function addToCart(product: Omit<CartItem, 'quantity'>): CartItem[] {
  // Asegurarse de que el precio sea un string limpio
  const cleanPrice = (price: string | number): string => {
    if (typeof price === 'number') {
      return price.toString();
    }
    return price
      .toString()
      .replace('Desde ', '')
      .replace(/[^0-9,.-]/g, '')
      .replace(/\./g, '')
      .replace(',', '.');
  };
  
  const productWithCleanPrice = {
    ...product,
    price: cleanPrice(product.price)
  };
  const cart = getCart();
  const existingItem = cart.find(item => item.id === product.id);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...productWithCleanPrice, quantity: 1 });
  }
  
  saveCart(cart);
  return cart;
}

// Actualizar la cantidad de un producto en el carrito
export function updateQuantity(productId: string, newQuantity: number): void {
  const cart = getCart();
  const item = cart.find(item => item.id === productId);
  
  if (!item) return;
  
  if (newQuantity <= 0) {
    // Eliminar el producto si la cantidad es 0 o menor
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex > -1) {
      cart.splice(itemIndex, 1);
    }
  } else {
    // Actualizar la cantidad
    item.quantity = newQuantity;
  }
  
  saveCart(cart);
}

// Eliminar un producto del carrito
export function removeFromCart(productId: string): void {
  const cart = getCart();
  const itemIndex = cart.findIndex(item => item.id === productId);
  
  if (itemIndex > -1) {
    cart.splice(itemIndex, 1);
    saveCart(cart);
  }
}

// Calcular el subtotal del carrito
export function calculateSubtotal(cart: CartItem[]): number {
  return cart.reduce((sum, item) => {
    const price = getPriceValue(item.price);
    return sum + (price * item.quantity);
  }, 0);
}

// Calcular el IVA (21%)
export function calculateTax(subtotal: number): number {
  return subtotal * 0.21;
}

// Calcular el total
export function calculateTotal(subtotal: number, tax: number): number {
  return subtotal + tax;
}
