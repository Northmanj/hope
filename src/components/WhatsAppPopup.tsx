'use client';

import { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';

export default function WhatsAppPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show popup after 1 second
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  // Format the number for WhatsApp (Kenya: 254)
  const phoneNumber = '0703931346';
  const whatsappLink = `https://wa.me/254${phoneNumber.slice(1)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-fade-in transition-all duration-300">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:underline"
      >
        <FaUser className="text-2xl" />
        <span className="text-sm">Let’s Chat on WhatsApp for more</span>
      </a>
      <button
        onClick={() => setVisible(false)}
        className="ml-2 text-white hover:text-gray-300 text-lg font-bold"
        aria-label="Close"
      >
        ×
      </button>
    </div>
  );
}
