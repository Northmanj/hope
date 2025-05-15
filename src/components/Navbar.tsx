'use client';
import Link from 'next/link';
import { useState } from 'react';

type NavbarProps = {
  onSearch: (query: string) => void;
  cartItemCount: number;
  onCartClick: () => void;
};

export default function Navbar({ onSearch, cartItemCount, onCartClick }: NavbarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 flex flex-col md:flex-row justify-between items-center gap-4">
      {/* Logo + Title (clickable) */}
      <div className="flex items-center space-x-3">
        <Link href="/">
          <img
            src="/images/logo.jpg"
            alt="Pinnacle Logo"
            className="w-10 h-10 object-contain cursor-pointer"
          />
        </Link>
        <h1 className="text-xl font-bold">Pinnacle Chems and Laboratory Enterprise</h1>
      </div>

      {/* Nav Links */}
      <div className="flex space-x-4">
        <a href="#products">Products</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Search */}
      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search products..."
          className="p-2 rounded bg-gray-800 border border-gray-700"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>

      {/* Cart Button */}
      <button
        onClick={onCartClick}
        className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded ml-4"
      >
        🛒 Cart ({cartItemCount})
      </button>
    </nav>
  );
}
