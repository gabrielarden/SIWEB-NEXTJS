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

          {/* Produk 2 - Blooming Bliss */}
          <div className="bg-white rounded shadow p-4 hover:shadow-lg transition">
            <Image src="/blush-of-romance.png" width={1000} height={760} className="hidden md:block mb-2" alt="Blooming Bliss" />
            <p className="text-sm text-gray-800">Blush of Romance</p>
            <p className="text-green-600 font-bold text-sm">$12.99</p>
          </div>

          {/* Produk 3 - Pink Blossom */}
          <div className="bg-white rounded shadow p-4 hover:shadow-lg transition">
            <Image src="/cutie-pie.png" width={1000} height={760} className="hidden md:block mb-2" alt="Pink Blossom" />
            <p className="text-sm text-gray-800">Cutie Pie</p>
            <p className="text-green-600 font-bold text-sm">$11.99</p>
          </div>

          {/* Produk 4 - Purple Hues */}
          <div className="bg-white rounded shadow p-4 hover:shadow-lg transition">
            <Image src="/golden-grace.png" width={1000} height={760} className="hidden md:block mb-2" alt="Purple Hues" />
            <p className="text-sm text-gray-800">Golden Grace</p>
            <p className="text-green-600 font-bold text-sm">$13.99</p>
          </div>

          {/* Produk 5 - Rose Romance */}
          <div className="bg-white rounded shadow p-4 hover:shadow-lg transition">
            <Image src="/love-in-bloom.png" width={1000} height={760} className="hidden md:block mb-2" alt="Rose Romance" />
            <p className="text-sm text-gray-800">Love in Bloom</p>
            <p className="text-green-600 font-bold text-sm">$10.99</p>
          </div>

          {/* Produk 6 - Summer Sunflower */}
          <div className="bg-white rounded shadow p-4 hover:shadow-lg transition">
            <Image src="/peachy-dream.png" width={1000} height={760} className="hidden md:block mb-2" alt="Summer Sunflower" />
            <p className="text-sm text-gray-800">Peachy Dream</p>
            <p className="text-green-600 font-bold text-sm">$9.49</p>
          </div>

          {/* Produk 7 - Tulip Elegance */}
          <div className="bg-white rounded shadow p-4 hover:shadow-lg transition">
            <Image src="/summer-cherries.png" width={1000} height={760} className="hidden md:block mb-2" alt="Tulip Elegance" />
            <p className="text-sm text-gray-800">Summer Cherries</p>
            <p className="text-green-600 font-bold text-sm">$14.99</p>
          </div>

          {/* Produk 8 - Vintage Lily */}
          <div className="bg-white rounded shadow p-4 hover:shadow-lg transition">
            <Image src="/sweet-strawberry.png" width={1000} height={760} className="hidden md:block mb-2" alt="Vintage Lily" />
            <p className="text-sm text-gray-800">Sweet Child O' Mine</p>
            <p className="text-green-600 font-bold text-sm">$12.49</p>
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
    </div>
  );
}
