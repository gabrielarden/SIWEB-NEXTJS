'use client';

import Image from 'next/image';
import { useRouter } from "next/navigation";


export default function OurTeams() {
  const router = useRouter();
    const handleLogout = () => {
      // Redirect ke halaman login
      router.push("/");
    };
  return (
    <div className="flex flex-col min-h-screen bg-pink-200">
      {/* Header */}
      <header className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
        <h1 className="text-pink-500 text-2xl font-bold">BOUQUETS HUB</h1>
        <nav className="space-x-6 text-lg text-gray-700">
          <a href="/customer/dashboard" className="hover:text-pink-500">Home</a>
          <a href="#" className="font-bold text-pink-500">About us</a>
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

      {/* Title */}
      <div className="text-center mt-10">
        <h2 className="text-4xl font-bold text-pink-700">About Us</h2>
        <p className="text-gray-700 mt-2 text-xl">BOUQUETS HUB</p>
      </div>

      {/* Deskripsi */}
      <main className="flex-grow">
        <div className="text-center text-lg md:text-xl font-medium text-gray-700 px-6 py-6 bg-white rounded shadow-lg max-w-3xl mx-auto mt-6">
          <p>
            Bouquets Hub – Spesialis buket bunga untuk setiap momen spesial! Kami menghadirkan
            rangkaian bunga segar dan elegan dengan desain yang indah dan penuh makna. Cocok
            untuk hadiah, perayaan, atau ungkapan perasaan Anda. Pesan sekarang dan buat momen
            lebih berkesan bersama Bouquets Hub! 🌸✨
          </p>
        </div>

        {/* Formulir Kontak */}
        <div className="bg-white rounded shadow-lg max-w-3xl mx-auto mt-10 px-6 py-8">
          <h3 className="text-2xl font-bold text-pink-600 mb-4 text-center">Hubungi Kami</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Nama</label>
              <input
                type="text"
                placeholder="Masukkan nama Anda"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Alamat email Anda"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Pesan</label>
              <textarea
                rows={4}
                placeholder="Tulis pesan Anda di sini..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-pink-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-pink-600 transition"
              >
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 px-8 text-sm mt-10">
        <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto">
          <div>
            <h3 className="text-pink-500 font-bold text-xl mb-2">BOUQUETS HUB</h3>
            <p>Blossom Every Moment, Gift with Love.</p>
            <p className="mt-2">
              Jalan Rambutan 17, RT 03 RW 06, Sambilegi Kidul, Depok, Sleman, Yogyakarta
            </p>
            <p className="mt-1">📞 0821-1234-5678</p>
            <p>✉️ contact@bouquetshub.id</p>
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
