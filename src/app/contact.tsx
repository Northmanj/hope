import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (!name || !phone || !message) {
      alert('Please fill in all fields');
      return;
    }

    const text = `Hello, my name is ${name}. My phone number is ${phone}. ${message}`;
    const whatsappLink = `https://wa.me/1234567890?text=${encodeURIComponent(text)}`;

    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="bg-gray-950 text-white min-h-screen flex flex-col">
      <Navbar onSearch={() => {}} />
      <main className="flex-1 p-6 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

        <div className="mb-8 text-gray-300">
          <p>📍 123 Chemical Road, Industrial Zone, Accra, Ghana</p>
          <p>📞 +123 456 7890</p>
          <p>📧 info@pinnaclechems.com</p>
        </div>

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
      </main>
      <Footer />
    </div>
  );
}
