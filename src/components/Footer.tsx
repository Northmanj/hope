import Link from 'next/link';
import { FaEnvelope, FaWhatsapp, FaTiktok, FaPhoneAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-6 mt-8">
        <div className="flex items-center space-x-3">
        <img src="/images/logo.jpg" alt="Pinnacle Logo" className="w-10 h-10 object-contain" />
        <h1 className="text-xl font-bold">Pinnacle Chems and Laboratory Enterprise</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="space-x-4">
          <Link href="/"></Link>
          <Link href="/products"></Link>
          <Link href="/about"></Link>
          <Link href="/contact"></Link>
        </div>
        <div className="flex space-x-4 text-xl">
          <a href="mailto:magretkhisa@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="https://wa.me/0703931346" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href="https://tiktok.com/pinnaclechemsenterprise" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FaTiktok />
          </a>
          <a href="tel:+254703931346" aria-label="Phone">
            <FaPhoneAlt />
          </a>
        </div>
      </div>
      <p className="text-center mt-4 text-sm text-gray-400">© {new Date().getFullYear()} Buri Medical & Laboratory Supplies Enterprise. All rights reserved. Designed by <a href="johngregory6400@gmail.com">Northman</a></p>
    </footer>
  );
}
