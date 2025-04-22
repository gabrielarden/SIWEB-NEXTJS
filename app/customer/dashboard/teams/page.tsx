'use client';

import Image from 'next/image';

export default function OurTeams() {
  return (
    <div className="bg-pink-200 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
        <h1 className="text-pink-500 text-2xl font-bold">BOUQUETS HUB</h1>
        <nav className="space-x-6 text-lg text-gray-700">
          <a href="/customer/dashboard" className="hover:text-pink-500">Home</a>
          <a href="/customer/dashboard/aboutus" className="hover:text-pink-500">About us</a>
          <a href="#" className="font-bold text-pink-500">Our Teams</a>
        </nav>
        <div className="space-x-4">
          <button>👤</button>
          <button>🛒</button>
        </div>
      </header>

      {/* Title */}
      <div className="text-center mt-10">
        <h2 className="text-4xl font-bold text-pink-700">Our Teams</h2>
        <p className="text-gray-700 mt-2">We are the man behind this website</p>
      </div>

      {/* Team Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto my-10 px-4">
        {[
          {
            role: 'UI/UX Designer',
            name: 'Gabriel Arden Juansava',
            image: '/gabriel.png',
          },
          {
            role: 'Backend Dev',
            name: 'Putu Gede Garuda Mahendra',
            image: '/garuda.png',
          },
          {
            role: 'Frontend Dev',
            name: 'Cokorda Gede Raditya Wirajuna',
            image: '/juna.png',
          },
        ].map((member, i) => (
          <div key={i} className="bg-white shadow-lg rounded p-6 text-center">
            <Image
              src={member.image}
              alt={member.name}
              width={100}
              height={100}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="font-bold text-lg text-gray-800">{member.role}</h3>
            <p className="text-pink-500">{member.name}</p>
          </div>
        ))}
      </div>

      {/* Deskripsi */}
      <div className="bg-white max-w-5xl mx-auto p-6 rounded shadow text-sm text-gray-800 mb-10">
        <p className="mb-2">Kami adalah tim kreatif yang siap membangun website penjualan buket bunga dengan keahlian di bidang masing-masing:</p>
        <ul className="list-disc list-inside mb-2">
          <li><strong>UI/UX Designer</strong> – Bertanggung jawab atas tampilan dan pengalaman pengguna yang estetis serta intuitif.</li>
          <li><strong>Frontend Developer</strong> – Mengubah desain menjadi tampilan interaktif dan responsif.</li>
          <li><strong>Backend Developer</strong> – Membangun sistem dan database yang kuat serta aman.</li>
        </ul>
        <p>Dengan kolaborasi yang solid, kami berkomitmen menciptakan website menarik dan mudah digunakan 🌸💻</p>
      </div>

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
