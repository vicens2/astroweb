import { b as createAstro, c as createComponent, d as renderComponent, f as renderScript, r as renderTemplate, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_CjInFqaA.mjs';
import 'kleur/colors';
import { g as getLangFromUrl, $ as $$BaseLayout, a as useTranslations } from '../chunks/BaseLayout_u9md5EvE.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://mintaka.co");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const url = new URL(Astro2.request.url);
  const categoryParam = url.searchParams.get("category") || "";
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const allCatalogItems = [
    // Fotomatones
    {
      id: "fotomaton-clasico",
      title: "Fotomat\xF3n Cl\xE1sico",
      description: "Diversi\xF3n garantizada con nuestro fotomat\xF3n cl\xE1sico, incluye accesorios y fondos personalizados.",
      image: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=800&auto=format&fit=crop",
      category: "fotomatones",
      price: "Desde 300\u20AC"
    },
    {
      id: "fotomaton-vintage",
      title: "Fotomat\xF3n Vintage",
      description: "Estilo retro con acabados en madera y efectos fotogr\xE1ficos cl\xE1sicos.",
      image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&auto=format&fit=crop",
      category: "fotomatones",
      price: "Desde 350\u20AC"
    },
    // Plataformas 360
    {
      id: "plataforma-360-basica",
      title: "Plataforma 360\xB0 B\xE1sica",
      description: "V\xEDdeos en 360\xB0 con iluminaci\xF3n profesional y efectos personalizables.",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215a4c?w=800&auto=format&fit=crop",
      category: "plataformas360",
      price: "Desde 400\u20AC"
    },
    {
      id: "plataforma-360-premium",
      title: "Plataforma 360\xB0 Premium",
      description: "Experiencia 360\xB0 con realidad aumentada y efectos especiales.",
      image: "https://images.unsplash.com/photo-1501386761578-eacb0b3f8ba0?w=800&auto=format&fit=crop",
      category: "plataformas360",
      price: "Desde 600\u20AC"
    },
    // Fondos
    {
      id: "fondo-pantalla-verde",
      title: "Fondo Pantalla Verde",
      description: "Fondo profesional chroma key para efectos especiales en postproducci\xF3n.",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215a4c?w=800&auto=format&fit=crop",
      category: "fondos",
      price: "Desde 150\u20AC"
    },
    {
      id: "fondo-personalizado",
      title: "Fondo Personalizado",
      description: "Dise\xF1a tu propio fondo con im\xE1genes o logotipos corporativos.",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&auto=format&fit=crop",
      category: "fondos",
      price: "Desde 250\u20AC"
    },
    // Neones
    {
      id: "cartel-neon-personalizado",
      title: "Cartel de Ne\xF3n Personalizado",
      description: "Iluminaci\xF3n LED de ne\xF3n con dise\xF1o personalizado para tu evento.",
      image: "https://images.unsplash.com/photo-1572635149010-ffd7c5133ab1?w=800&auto=format&fit=crop",
      category: "neones",
      price: "Desde 200\u20AC"
    },
    {
      id: "letras-neon",
      title: "Letras de Ne\xF3n",
      description: "Letras iluminadas con tecnolog\xEDa LED para personalizar tu espacio.",
      image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&auto=format&fit=crop",
      category: "neones",
      price: "Desde 180\u20AC"
    },
    // Álbumes
    {
      id: "album-fotografico",
      title: "\xC1lbum Fotogr\xE1fico Premium",
      description: "\xC1lbum de lujo con hasta 100 fotograf\xEDas de tu evento.",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&auto=format&fit=crop",
      category: "albumes",
      price: "Desde 120\u20AC"
    },
    {
      id: "libro-fotografico",
      title: "Libro Fotogr\xE1fico",
      description: "Libro de tapa dura con las mejores im\xE1genes de tu evento.",
      image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=800&auto=format&fit=crop",
      category: "albumes",
      price: "Desde 80\u20AC"
    }
  ];
  const categories = [
    { id: "fotomatones", name: "Fotomatones" },
    { id: "plataformas360", name: "Plataformas 360\xB0" },
    { id: "fondos", name: "Fondos" },
    { id: "neones", name: "Neones" },
    { id: "albumes", name: "\xC1lbumes" }
  ];
  let selectedCategory = "all";
  let filteredItems = [...allCatalogItems];
  if (typeof window === "undefined") {
    const url2 = new URL(Astro2.request.url);
    const categoryParam2 = url2.searchParams.get("category");
    const searchTerm = url2.searchParams.get("searchTerm") || "";
    if (categoryParam2) {
      allCatalogItems.filter((item) => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm) || item.description.toLowerCase().includes(searchTerm);
        const matchesCategory = !categoryParam2 || item.category === categoryParam2;
        return matchesSearch && matchesCategory;
      });
    }
  }
  const formatPrice = (price) => {
    return price.replace("\u20AC", "\u20AC").trim();
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "showCart": true, "data-astro-cid-ov45w7vr": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8" data-astro-cid-ov45w7vr> <div class="max-w-7xl mx-auto" data-astro-cid-ov45w7vr> <div class="text-center mb-12" data-astro-cid-ov45w7vr> <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-astro-cid-ov45w7vr> ${categoryParam ? `Cat\xE1logo de ${categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1)}` : t("catalog.fullCatalog")} </h1> ${categoryParam && renderTemplate`<a href="/catalog" class="inline-flex items-center mt-4 text-sm text-blue-600 hover:text-blue-800 font-medium" data-astro-cid-ov45w7vr> <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ov45w7vr> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" data-astro-cid-ov45w7vr></path> </svg>
Ver todos los productos
</a>`} <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-ov45w7vr> ${t("catalog.filterByCategory")} </p> </div> <!-- Filtros --> <div class="flex flex-wrap justify-center gap-3 mb-12 px-4" data-astro-cid-ov45w7vr> <button onclick="window.filterProducts('all')" data-category="all"${addAttribute([
    "category-filter px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-sm cursor-pointer",
    "bg-gray-900 text-white shadow-md" 
  ], "class:list")} data-astro-cid-ov45w7vr> ${t("catalog.allCategories")} </button> ${categories.map((cat) => renderTemplate`<button${addAttribute(`window.filterProducts('${cat.id}')`, "onclick")}${addAttribute(cat.id, "data-category")}${addAttribute([
    "category-filter px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-sm whitespace-nowrap cursor-pointer",
    selectedCategory === cat.id ? "bg-gray-900 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md"
  ], "class:list")} data-astro-cid-ov45w7vr> ${cat.name} </button>`)} </div> <!-- Grid de productos --> <div id="products-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4" data-astro-cid-ov45w7vr> ${filteredItems.length > 0 ? filteredItems.map((item) => renderTemplate`<div class="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full cursor-pointer"${addAttribute(item.category, "data-category")}${addAttribute(item.id, "data-product-id")}${addAttribute(item.title, "data-product-title")}${addAttribute(item.description || "", "data-product-description")}${addAttribute(item.price, "data-product-price")}${addAttribute(item.image, "data-product-image")}${addAttribute(item.category, "data-product-category")} onclick="if (!event.target.closest('.add-to-cart-btn')) { event.preventDefault(); event.stopPropagation(); showProductDetails(this) }" data-astro-cid-ov45w7vr> <div class="relative overflow-hidden flex-grow" data-astro-cid-ov45w7vr> <img${addAttribute(item.image, "src")}${addAttribute(item.title, "alt")} class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" data-astro-cid-ov45w7vr> <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6" data-astro-cid-ov45w7vr> <div class="flex justify-end" data-astro-cid-ov45w7vr> <span class="text-white font-bold text-lg bg-black/70 px-4 py-2 rounded-full" data-astro-cid-ov45w7vr> ${formatPrice(item.price)} </span> </div> <div class="mt-auto" data-astro-cid-ov45w7vr> <button class="add-to-cart-btn w-full bg-white text-gray-900 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2 z-10 relative"${addAttribute(item.id, "data-product-id")}${addAttribute(item.title, "data-product-title")}${addAttribute(item.price, "data-product-price")}${addAttribute(item.image, "data-product-image")}${addAttribute(item.category, "data-product-category")} onclick="event.stopPropagation(); 
                      const btn = event.target.closest('button');
                      const category = btn.dataset.productCategory;
                      
                      // For fotomatones, plataformas and albumes, show the product details modal first
                      if (category === 'fotomatones' || category === 'plataformas360' || category === 'albumes') {
                        showProductDetails(btn);
                      } else {
                        // For other categories, add directly to cart
                        if (window.cart) { 
                          window.cart.addItem({ 
                            id: btn.dataset.productId, 
                            name: btn.dataset.productTitle, 
                            price: parseFloat(btn.dataset.productPrice.replace(/[^0-9.,]/g, '').replace(',', '.')) || 0, 
                            image: btn.dataset.productImage,
                            category: btn.dataset.productCategory
                          });
                          window.cart.toggleCart(true);
                        }
                      }" data-astro-cid-ov45w7vr> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ov45w7vr> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" data-astro-cid-ov45w7vr></path> </svg>
Añadir a la cesta
</button> </div> </div> </div> <div class="p-6 flex flex-col flex-grow" data-astro-cid-ov45w7vr> <div class="flex justify-between items-start mb-2" data-astro-cid-ov45w7vr> <span class="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full font-medium" data-astro-cid-ov45w7vr> ${item.category} </span> <h3 class="text-xl font-bold text-gray-900 line-clamp-1" data-astro-cid-ov45w7vr>${item.title}</h3> </div> <p class="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow" data-astro-cid-ov45w7vr>${item.description}</p> <div class="flex justify-between items-center mt-auto"${addAttribute(item.price.replace(/[^0-9,.]/g, "").replace(",", "."), "data-price")} data-astro-cid-ov45w7vr> <span class="text-lg font-bold text-gray-900" data-astro-cid-ov45w7vr> ${formatPrice(item.price)} </span> <button class="text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors flex items-center"${addAttribute(item.id, "data-product-id")}${addAttribute(item.title, "data-product-title")}${addAttribute(item.description || "", "data-product-description")}${addAttribute(item.price, "data-product-price")}${addAttribute(item.image, "data-product-image")}${addAttribute(item.category, "data-product-category")} onclick="event.stopPropagation(); showProductDetails(this)" data-astro-cid-ov45w7vr> ${t("catalog.viewDetails")} <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-ov45w7vr> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" data-astro-cid-ov45w7vr></path> </svg> </button> </div> </div> </div>`) : renderTemplate`<div class="col-span-full text-center py-12" data-astro-cid-ov45w7vr> <p class="text-gray-500" data-astro-cid-ov45w7vr>No se encontraron productos en esta categoría.</p> </div>`} </div> </div> </main> <div id="productModal" class="fixed inset-0 z-50 hidden overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true" data-astro-cid-ov45w7vr> <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" data-astro-cid-ov45w7vr> <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onclick="closeModal()" data-astro-cid-ov45w7vr></div> <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true" data-astro-cid-ov45w7vr>&#8203;</span> <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full" data-astro-cid-ov45w7vr> <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4" data-astro-cid-ov45w7vr> <div class="sm:flex sm:items-start" data-astro-cid-ov45w7vr> <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" data-astro-cid-ov45w7vr> <div class="flex justify-between items-start" data-astro-cid-ov45w7vr> <h3 class="text-2xl leading-6 font-bold text-gray-900 mb-4" id="modal-title" data-astro-cid-ov45w7vr>
Detalles del Producto
</h3> <button type="button" class="text-gray-400 hover:text-gray-500" onclick="closeModal()" data-astro-cid-ov45w7vr> <span class="sr-only" data-astro-cid-ov45w7vr>Cerrar</span> <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ov45w7vr> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-ov45w7vr></path> </svg> </button> </div> <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6" data-astro-cid-ov45w7vr> <div class="bg-gray-100 rounded-lg overflow-hidden" data-astro-cid-ov45w7vr> <img id="modal-product-image" src="" alt="" class="w-full h-80 object-cover" data-astro-cid-ov45w7vr> </div> <div data-astro-cid-ov45w7vr> <div class="mb-4" data-astro-cid-ov45w7vr> <span id="modal-product-category" class="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full font-medium mb-2" data-astro-cid-ov45w7vr></span> <h2 id="modal-product-title" class="text-2xl font-bold text-gray-900 mb-2" data-astro-cid-ov45w7vr></h2> <p id="modal-product-description" class="text-gray-600 mb-4" data-astro-cid-ov45w7vr></p> <div class="mb-6" data-astro-cid-ov45w7vr> <div id="hour-selection" class="hidden mb-4" data-astro-cid-ov45w7vr> <p class="text-sm font-medium text-gray-700 mb-2" data-astro-cid-ov45w7vr>Selecciona la duración:</p> <div class="flex gap-2" data-astro-cid-ov45w7vr> <button type="button" data-hours="1" class="hour-option flex-1 py-2 px-3 border rounded-md text-sm font-medium transition-colors duration-200 bg-white text-gray-700 border-gray-300 hover:bg-gray-50" data-astro-cid-ov45w7vr>
1 hora
</button> <button type="button" data-hours="2" class="hour-option flex-1 py-2 px-3 border rounded-md text-sm font-medium transition-colors duration-200 bg-white text-gray-700 border-gray-300 hover:bg-gray-50" data-astro-cid-ov45w7vr>
2 horas
</button> <button type="button" data-hours="3" class="hour-option flex-1 py-2 px-3 border rounded-md text-sm font-medium transition-colors duration-200 bg-white text-gray-700 border-gray-300 hover:bg-gray-50" data-astro-cid-ov45w7vr>
3 horas
</button> </div> <div id="additional-hours-container" class="mt-3" data-astro-cid-ov45w7vr> <label for="additional-hours" class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-ov45w7vr>Horas adicionales</label> <div class="flex rounded-md shadow-sm" data-astro-cid-ov45w7vr> <button type="button" id="decrease-hours" class="px-3 py-2 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 hover:bg-gray-100 rounded-l-md disabled:opacity-50 disabled:cursor-not-allowed" disabled data-astro-cid-ov45w7vr> <span class="sr-only" data-astro-cid-ov45w7vr>Disminuir horas</span> <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ov45w7vr> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" data-astro-cid-ov45w7vr></path> </svg> </button> <input type="number" id="additional-hours" min="0" value="0" class="flex-1 min-w-0 block w-full px-3 py-2 text-center border-t border-b border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 text-gray-500" disabled data-astro-cid-ov45w7vr> <button type="button" id="increase-hours" class="px-3 py-2 border border-l-0 border-gray-300 bg-gray-50 text-gray-500 hover:bg-gray-100 rounded-r-md disabled:opacity-50 disabled:cursor-not-allowed" disabled data-astro-cid-ov45w7vr> <span class="sr-only" data-astro-cid-ov45w7vr>Aumentar horas</span> <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ov45w7vr> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" data-astro-cid-ov45w7vr></path> </svg> </button> </div> <p id="additional-hours-help" class="mt-1 text-xs text-gray-500" data-astro-cid-ov45w7vr>Disponible solo para 3 horas</p> </div> </div> <div class="space-y-1" data-astro-cid-ov45w7vr> <div class="flex items-center" data-astro-cid-ov45w7vr> <span id="modal-product-price" class="text-2xl font-bold text-gray-900" data-astro-cid-ov45w7vr></span> <span id="price-per-hour" class="ml-2 text-sm text-gray-500 hidden" data-astro-cid-ov45w7vr>/hora</span> </div> <div id="total-hours-display" class="text-sm text-gray-500 hidden" data-astro-cid-ov45w7vr>
Total: <span id="total-hours" data-astro-cid-ov45w7vr>1</span> horas
</div> </div> </div> </div> <div class="border-t border-gray-200 pt-4" data-astro-cid-ov45w7vr> <h3 class="text-lg font-medium text-gray-900 mb-3" data-astro-cid-ov45w7vr>Este producto incluye:</h3> <ul id="product-includes" class="space-y-2" data-astro-cid-ov45w7vr> <!-- Filled by JavaScript --> </ul> </div> <!-- Sección de personalización para álbumes --> <div id="album-customization" class="hidden mt-6 space-y-4" data-astro-cid-ov45w7vr> <div data-astro-cid-ov45w7vr> <label for="album-color" class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-ov45w7vr>Color del álbum</label> <div class="flex space-x-2" data-astro-cid-ov45w7vr> <button type="button" class="w-8 h-8 rounded-full bg-red-500 border-2 border-transparent focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" data-color="rojo" onclick="selectAlbumColor('rojo', this)" aria-label="Color rojo" data-astro-cid-ov45w7vr></button> <button type="button" class="w-8 h-8 rounded-full bg-blue-500 border-2 border-transparent focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" data-color="azul" onclick="selectAlbumColor('azul', this)" aria-label="Color azul" data-astro-cid-ov45w7vr></button> <button type="button" class="w-8 h-8 rounded-full bg-green-500 border-2 border-transparent focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" data-color="verde" onclick="selectAlbumColor('verde', this)" aria-label="Color verde" data-astro-cid-ov45w7vr></button> <button type="button" class="w-8 h-8 rounded-full bg-yellow-400 border-2 border-transparent focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" data-color="amarillo" onclick="selectAlbumColor('amarillo', this)" aria-label="Color amarillo" data-astro-cid-ov45w7vr></button> <button type="button" class="w-8 h-8 rounded-full bg-black border-2 border-transparent focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" data-color="negro" onclick="selectAlbumColor('negro', this)" aria-label="Color negro" data-astro-cid-ov45w7vr></button> </div> <input type="hidden" id="selected-album-color" value="" data-astro-cid-ov45w7vr> </div> <div data-astro-cid-ov45w7vr> <label for="album-text" class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-ov45w7vr>Texto personalizado (opcional)</label> <input type="text" id="album-text" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Ej: Nuestra Boda 2023" maxlength="30" data-astro-cid-ov45w7vr> </div> <div data-astro-cid-ov45w7vr> <label for="album-date" class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-ov45w7vr>Fecha del evento</label> <input type="date" id="album-date" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" data-astro-cid-ov45w7vr> </div> </div> <div class="mt-6" data-astro-cid-ov45w7vr> <button id="add-to-cart-modal" class="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center gap-2" data-astro-cid-ov45w7vr> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ov45w7vr> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" data-astro-cid-ov45w7vr></path> </svg>
Añadir al carrito
</button> </div> </div> </div> </div> </div> </div> </div> </div> </div> ` })} ${renderScript($$result, "C:/Users/vicens.juan/astroweb/src/pages/catalog/index.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/vicens.juan/astroweb/src/pages/catalog/index.astro", void 0);

const $$file = "C:/Users/vicens.juan/astroweb/src/pages/catalog/index.astro";
const $$url = "/catalog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
