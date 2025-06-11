"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function TabelProduk() {
  const [produk, setProduk] = useState([]);
  const [isAmourModalOpen, setIsAmourModalOpen] = useState(false);
  const router = useRouter();

  const openAmourModal = () => setIsAmourModalOpen(true);
  const closeAmourModal = () => setIsAmourModalOpen(false);

  const handleLogout = () => {
    // Redirect ke halaman login
    router.push("/");
  };

  useEffect(() => {
    document.body.style.overflow = isAmourModalOpen ? "hidden" : "unset";
  }, [isAmourModalOpen]);

  useEffect(() => {
    async function fetchProduk() {
      try {
        const res = await fetch("/api/admin/data");
        console.log(res)
        if (res.ok) {
          const data = await res.json();
          console.log(`data`, data.produk)
          setProduk(data.produk);
        } else {
          console.error("Failed to fetch produk");
        }
      } catch (error) {
        console.error("Error fetching produk:", error);
      }
    }
    fetchProduk();
  }, []);

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
        <div className="flex items-center justify-end gap-4">
  <button
    onClick={() => router.push("/customer/dashboard/profile")}
    className="w-10 h-10 bg-gray-200 hover:bg-gray-300 flex items-center justify-center rounded-full text-xl"
  >
    👤
  </button>
  <button
    onClick={handleLogout}
    className="flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1" />
    </svg>
    Logout
  </button>
</div>

      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <Image
          src="/boquets.png"
          alt="boquets"
          width={1000}
          height={760}
          className="hidden md:block brightness-75 w-full h-full object-cover"
        />
      </section>

      {/* Product Section */}
      <section className="bg-pink-100 py-10 text-center">
        <h2 className="text-3xl font-bold text-pink-600 mb-2">Products</h2>
        <p className="text-gray-600 mb-8">Order it for you or for your beloved ones</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {produk.length === 0 && <p className="col-span-full">Loading products...</p>}
          {produk.map((product) => (
            <div
              key={product.id_produk}
              onClick={product.nama_produk === "Amour Rouge" ? openAmourModal : undefined}
              className="cursor-pointer bg-white rounded shadow p-4 hover:shadow-lg transition"
            >
              <Image
                src={product.foto}
                width={300}
                height={200}
                alt={product.nama_produk}
                className="mb-2 object-cover"
                unoptimized
              />
              <p className="text-sm text-gray-800">{product.nama_produk}</p>
              <p className="text-green-600 font-bold text-sm">Rp {Number(product.harga).toLocaleString()}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Detail Modal Amour Rouge */}
      {isAmourModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 relative">
            <button
              onClick={closeAmourModal}
              className="absolute top-2 right-4 text-xl text-gray-500 hover:text-pink-500"
            >
              &times;
            </button>
            <Image
              src="/amour-rouge.png"
              width={500}
              height={400}
              alt="Amour Rouge"
              className="mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-pink-600 mb-2">Amour Rouge</h3>
            <p className="text-green-600 font-bold text-lg mb-2">Rp 150.000</p>
            <p className="text-gray-700 text-sm mb-4">
              Amour Rouge adalah buket bunga romantis dengan warna merah yang memikat hati.
              Cocok untuk momen spesial bersama pasangan atau untuk menyatakan cinta pertama.
            </p>
            <ul className="list-disc list-inside text-left text-gray-600 text-sm mb-4">
              <li>Bunga mawar premium</li>
              <li>Dikemas dengan pita satin merah</li>
              <li>Aroma tahan lama</li>
            </ul>
            <div className="flex justify-between">
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
                onClick={closeAmourModal}
              >
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
        <p className="text-sm text-gray-600 max-w-xl mx-auto mb-6">Untuk momen spesial dan senyum yang tulus</p>
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
              <p>Privacy Policies</p>
              <p>Terms & Conditions</p>
              <nav className="space-x-6 text-lg text-pink-700">
                <a href="/customer/dashboard/aboutus" className="hover:text-pink-500">Contact Us</a>
              </nav>
            </div>
          </div>
        </div>
        <p className="text-center text-pink-400 mt-10">©BouquetsHub All Rights Reserved.</p>
      </footer>
    </div>


  );
}
