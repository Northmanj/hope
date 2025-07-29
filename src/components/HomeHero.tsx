'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const featuredProducts = [
  {
    id: 1,
    imageUrl: '/images/toppan.jpeg',
    name: 'Electrical Balance',
    description: 'Modern Instrument for measuring weight .',
  },
  {
    id: 2,
    imageUrl: '/images/burner.PNG',
    name: 'Portable Burner',
    description: 'Durable glassware for experiments and measurements',
  },
  {
    id: 3,
    imageUrl: '/images/Conical.PNG',
    name: 'Conical Flask',
    description: 'Used for mixing and heating chemicals.',
  },
  {
    id: 3,
    imageUrl: '/images/coverglass.jpeg',
    name: 'Microscope Cover Glass',
    description: 'Precised Microscope Cover Glass.',
  },
  {
    id: 3,
    imageUrl: '/images/zinc.PNG',
    name: 'Zinc Oxide',
    description: 'Pure zinc oxide for chemical reactions.',
  },
];

export default function HomeHero() {
  return (
    <section className="w-full bg-gray-900 text-white py-8" id="home">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Products</h2>
      <div className="max-w-5xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
        >
          {featuredProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-gray-800 rounded shadow">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full md:w-1/2 h-64 object-cover rounded"
                />
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-300">{product.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
