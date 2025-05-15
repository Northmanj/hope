'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (!name || !phone || !message) {
      alert('Please fill in all fields');
      return;
    }

    const text = `Hello, my name is ${name}. My phone number is ${phone}. ${message}`;
    const whatsappLink = `https://wa.me/0703931346?text=${encodeURIComponent(text)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSend();
      }}
      className="bg-gray-900 p-6 rounded shadow space-y-4"
    >
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Phone Number"
        className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <textarea
        placeholder="Your Message"
        className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white"
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 transition p-3 rounded text-white font-semibold"
      >
        Send via WhatsApp
      </button>
    </form>
  );
}
