'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import HomeHero from '@/components/HomeHero';
import About from '@/components/About';
import WhatsAppPopup from '@/components/WhatsAppPopup';
import CartSidebar from '@/components/CartSidebar';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [isCartOpen, setCartOpen] = useState(false);

  const handleAddToCart = (product: any) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div
      className={`bg-gray-950 text-white min-h-screen transition-all duration-300 ${
        isCartOpen ? 'md:mr-80' : ''
      }`}
    >
      <div className="flex flex-col min-h-screen">
        <Navbar
          onSearch={setSearchQuery}
          cartItemCount={cartItems.length}
          onCartClick={() => setCartOpen(true)}
        />

        <main className="flex-1">
          <WhatsAppPopup />
          <HomeHero />

          {/* About Section */}
          <section className="px-4 py-8 sm:px-6 lg:px-8" id="about">
            <About />
          </section>

          {/* Products */}
          <section className="px-4 py-8 sm:px-6 lg:px-8" id="products">
            <ProductList searchQuery={searchQuery} onAddToCart={handleAddToCart} />
          </section>

          {/* Contact */}
          <section id="contact" className="px-4 py-8 sm:px-6 lg:px-8 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">
              +254 Charles Rubia Road, Kibugi House 3rd Floor, Nairobi, Kenya
              <br /> 📞 +254 703931346 |
            </p>
            <ContactForm />
          </section>
        </main>

        <Footer />
      </div>

      <CartSidebar
        isOpen={isCartOpen}
        cartItems={cartItems}
        onClose={() => setCartOpen(false)}
        onRemove={handleRemoveFromCart}
      />
    </div>
  );
}
