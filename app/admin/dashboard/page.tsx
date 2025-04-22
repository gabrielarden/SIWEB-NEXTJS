import Image from 'next/image';
import Link from 'next/link';
import { HomeIcon, ShoppingCartIcon, InformationCircleIcon, UsersIcon, DocumentIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-pink-300 flex flex-col items-center py-6 space-y-6">
        <h1 className="text-2xl font-bold">BOQUETS HUB</h1>
        <nav className="flex flex-col space-y-4 w-full px-6">
          <Link href="#" className="flex items-center space-x-3 bg-pink-500 text-white px-4 py-2 rounded-md">
            <HomeIcon className="w-5" />
            <span>Home</span>
          </Link>
          <Link href="/katalog/page" className="flex items-center space-x-3 hover:text-white">
            <ShoppingCartIcon className="w-5" />
            <span>Katalog</span>
          </Link>
          <Link href="/teams/page" className="flex items-center space-x-3 hover:text-white">
            <UsersIcon className="w-5" />
            <span>Our Teams</span>
          </Link>
          <Link href="/laporan/page" className="flex items-center space-x-3 hover:text-white">
            <DocumentIcon className="w-5" />
            <span>Laporan</span>
          </Link>
        </nav>
        <div className="mt-auto">
          <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-pink-600 hover:bg-pink-500 text-white">
            <ArrowLeftOnRectangleIcon className="w-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-10 bg-cover bg-center relative" style={{ backgroundImage: "url('/hero-desktop.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center pt-20">
          <h1 className="text-5xl font-bold text-pink-200">BOQUETS HUB</h1>
        </div>

        {/* Footer */}
        <footer className="absolute bottom-0 w-full text-center bg-gray-900 text-sm text-gray-400 py-4 px-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-pink-300 font-semibold mb-2 md:mb-0">
              ©BouquetsHub All Rights Reserved.
            </div>
            <div className="space-x-4">
              <span>Help</span>
              <span>Shipping</span>
              <span>Affiliate</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
