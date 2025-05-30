"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function CustomerHomePage() {
  const [isAmourModalOpen, setIsAmourModalOpen] = useState(false);

  const openAmourModal = () => setIsAmourModalOpen(true);
  const closeAmourModal = () => setIsAmourModalOpen(false);

  useEffect(() => {
    document.body.style.overflow = isAmourModalOpen ? "hidden" : "unset";
  }, [isAmourModalOpen]);

  return (
    <div className="bg-white">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 shadow-md">
        <h1 className="text-2xl font-bold text-pink-500">BOUQUETS HUB</h1>
        <nav className="space-x-6 text-lg text-gray-700">
          <a href="#" className="hover:text-pink-500">Home</a>
          <a href="/customer/dashboard/aboutus" className="hover:text-pink-500">About us</a>
          <a href="/customer/dashboard/teams" className="hover:text-pink-500">Our Teams</a>
        </nav>
        <div className="space-x-4">
          <button>👤</button>
          <button>🛒</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <Image src="/boquets.png" alt="boquets" width={1000} height={760} className="hidden md:block brightness-75 w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center" />
      </section>

      {/* Product Section */}
      <section className="bg-pink-100 py-10 text-center">
        <h2 className="text-3xl font-bold text-pink-600 mb-2">Products</h2>
        <p className="text-gray-600 mb-8">Order it for you or for your beloved ones</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {/* Produk 1 - Amour Rouge */}
          <div onClick={openAmourModal} className="cursor-pointer bg-white rounded shadow p-4 hover:shadow-lg transition">
            <Image src="/amour-rouge.png" width={1000} height={760} className="hidden md:block mb-2" alt="Amour Rouge" />
            <p className="text-sm text-gray-800">Amour Rouge</p>
            <p className="text-green-600 font-bold text-sm">$9.99</p>
          </div>

          {/* Produk 2 */}
          <div className="bg-white rounded shadow p-4">
            <Image
              src="/blush-of-romance.png"
              width={1000}
              height={760}
              className="hidden md:block mb-2"
              alt="Product 2"
            />
            <p className="text-sm text-gray-800">Blush Of Romance</p>
            <p className="text-green-600 font-bold text-sm">9.99$</p>
          </div>

          {/* Produk 3 */}
          <div className="bg-white rounded shadow p-4">
            <Image
              src="/cutie-pie.png"
              width={1000}
              height={760}
              className="hidden md:block mb-2"
              alt="Product 3"
            />
            <p className="text-sm text-gray-800">Cutie Pie</p>
            <p className="text-green-600 font-bold text-sm">9.99$</p>
          </div>

          {/* Produk 4 */}
          <div className="bg-white rounded shadow p-4">
            <Image
              src="/golden-grace.png"
              width={1000}
              height={760}
              className="hidden md:block mb-2"
              alt="Product 4"
            />
            <p className="text-sm text-gray-800">Golden Grace</p>
            <p className="text-green-600 font-bold text-sm">9.99$</p>
          </div>

          {/* Produk 5 */}
          <div className="bg-white rounded shadow p-4">
            <Image
              src="/love-in-bloom.png"
              width={1000}
              height={760}
              className="hidden md:block mb-2"
              alt="Product 5"
            />
            <p className="text-sm text-gray-800">Love in Bloom</p>
            <p className="text-green-600 font-bold text-sm">9.99$</p>
          </div>

          {/* Produk 6 */}
          <div className="bg-white rounded shadow p-4">
            <Image
              src="/peachy-dream.png"
              width={1000}
              height={760}
              className="hidden md:block mb-2"
              alt="Product 6"
            />
            <p className="text-sm text-gray-800">Peachy Dream</p>
            <p className="text-green-600 font-bold text-sm">9.99$</p>
          </div>

          {/* Produk 7 */}
          <div className="bg-white rounded shadow p-4">
            <Image
              src="/summer-cherries.png"
              width={1000}
              height={760}
              className="hidden md:block mb-2"
              alt="Product 7"
            />
            <p className="text-sm text-gray-800">Summer Cherries</p>
            <p className="text-green-600 font-bold text-sm">9.99$</p>
          </div>

          {/* Produk 8 */}
          <div className="bg-white rounded shadow p-4">
            <Image
              src="/sweet-strawberry.png"
              width={1000}
              height={760}
              className="hidden md:block mb-2"
              alt="Product 8"
            />
            <p className="text-sm text-gray-800">Sweet Strawberry</p>
            <p className="text-green-600 font-bold text-sm">9.99$</p>
          </div>
        </div>

      </section>

      {/* Detail Modal Amour Rouge */}
      {isAmourModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 relative">
            <button onClick={closeAmourModal} className="absolute top-2 right-4 text-xl text-gray-500 hover:text-pink-500">
              &times;
            </button>
            <Image src="/amour-rouge.png" width={500} height={400} alt="Amour Rouge" className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-pink-600 mb-2">Amour Rouge</h3>
            <p className="text-green-600 font-bold text-lg mb-2">$9.99</p>
            <p className="text-gray-700 text-sm mb-4">
              Amour Rouge adalah buket bunga romantis dengan warna merah yang memikat hati. Cocok untuk momen spesial bersama pasangan atau untuk menyatakan cinta pertama.
            </p>
            <ul className="list-disc list-inside text-left text-gray-600 text-sm mb-4">
              <li>Bunga mawar premium</li>
              <li>Dikemas dengan pita satin merah</li>
              <li>Aroma tahan lama</li>
            </ul>
            <div className="flex justify-between">
              <button onClick={closeAmourModal} className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded">
                Kembali
              </button>
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}


      {/* Description Section */}
      <section className="bg-white py-12 px-4 md:px-20 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Indah dan Harum, Buket Bunga Pilihan</h3>
        <p className="text-sm text-gray-600 max-w-xl mx-auto mb-6">
          Untuk momen spesial dan senyum yang tulus
        </p>
        <ul className="text-left text-sm text-gray-700 list-disc list-inside max-w-xl mx-auto mb-6">
          <li>Ramah Lingkungan: Dikemas dengan bahan daur ulang.</li>
          <li>Hipoalergenik: Aman untuk semua.</li>
          <li>Handmade: Dirangkai oleh florist profesional.</li>
        </ul>
        <button className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600">Learn more</button>
      </section>

      {/* Testimonial Section */}
      <section className="bg-pink-100 py-10 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Testimonials</h2>
        <p className="text-sm text-gray-600 mb-8">Some quotes from our happy customers</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { name: 'Luisa', review: 'I love it !', image: '/customers/delba-de-oliveira.png' },
            { name: 'Lucas', review: 'Recommended for everyone', image: '/customers/michael-novotny.png' },
            { name: 'Lolok', review: 'Looks very natural, the smell is awesome', image: '/customers/lee-robinson.png' },
          ].map((t, i) => (
            <div key={i} className="bg-white rounded shadow p-4">
              <Image
                src={t.image}
                width={500}
                height={500}
                className="hidden md:block rounded-full mx-auto mb-2"
                alt={t.name}
              />
              <p className="text-green-600 text-xl">★★★★★</p>
              <p className="italic mt-2">“{t.review}”</p>
              <p className="text-sm mt-1 text-gray-700">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Section */}
      <section className="bg-white py-10 text-center">
        <h2 className="text-3xl font-bold text-pink-600 mb-2">Popular</h2>
        <p className="text-sm text-gray-600 mb-8">Our top selling product that you may like</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          <div className="bg-white rounded shadow p-4">
            <Image
              src="/amour-rouge.png"
              width={500}
              height={500}
              className="hidden md:block mb-2"
              alt="Product 9"
            />
            <p className="text-sm text-gray-800">Amour Rouge</p>
            <p className="text-green-600 font-bold text-sm">9.99$</p>
          </div>

          <div className="bg-white rounded shadow p-4">
            <Image
              src="/blush-of-romance.png"
              width={500}
              height={500}
              className="hidden md:block mb-2"
              alt="Product 10"
            />
            <p className="text-sm text-gray-800">Blush Of Romance</p>
            <p className="text-green-600 font-bold text-sm">9.99$</p>
          </div>

          <div className="bg-white rounded shadow p-4">
            <Image
              src="/cutie-pie.png"
              width={500}
              height={500}
              className="hidden md:block mb-2"
              alt="Product 11"
            />
            <p className="text-sm text-gray-800">Cutie Pie</p>
            <p className="text-green-600 font-bold text-sm">9.99$</p>
          </div>

          <div className="bg-white rounded shadow p-4">
            <Image
              src="/golden-grace.png"
              width={500}
              height={500}
              className="hidden md:block mb-2"
              alt="Product 12"
            />
            <p className="text-sm text-gray-800">Golden Grace</p>
            <p className="text-green-600 font-bold text-sm">9.99$</p>
          </div>

          <div className="bg-white rounded shadow p-4">
            <Image
              src="/love-in-bloom.png"
              width={500}
              height={500}
              className="hidden md:block mb-2"
              alt="Product 13"
            />
            <p className="text-sm text-gray-800">Love In Bloom</p>
            <p className="text-green-600 font-bold text-sm">9.99$</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 px-8 text-sm">
        <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto">
          <div>
            <h3 className="text-pink-500 font-bold text-xl mb-2">BOUQUETS HUB</h3>
            <p>Blossom Every Moment, Gift with Love.</p>
            <p className="mt-2">Jalan Rambutan 17, RT 03 RW 06, Sambilegi Kidul, Depok, Sleman, Yogyakarta</p>
          </div>
          <div className="grid grid-cols-3 gap-8 mt-6 md:mt-0">
            <div>
              <h4 className="font-bold mb-2">Discovery</h4>
              <p>New season</p>
              <p>Most searched</p>
              <p>Most selled</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">About</h4>
              <p>Help</p>
              <p>Shipping</p>
              <p>Affiliate</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Info</h4>
              <p>Contact us</p>
              <p>Privacy Policies</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
        </div>
        <p className="text-center text-pink-400 mt-10">©BouquetsHub All Rights Reserved.</p>
      </footer>
    </div>
  );
}