'use client';
import { useState } from 'react';

import {
  HomeIcon,
  ShoppingBagIcon,
  CurrencyDollarIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline';

type MenuKey = 'dashboard' | 'produk' | 'transaksi';

export default function AdminPage() {
  const [activeMenu, setActiveMenu] = useState<MenuKey>('dashboard');

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-gray-100 flex flex-col">
        <div className="px-6 py-4 font-bold text-pink-600 text-xl border-b border-gray-700">
          BOUQUETS HUB
        </div>

        <nav className="flex-1 px-2 py-4 space-y-1">
          <SidebarItem
            icon={<HomeIcon className="w-6 h-6" />}
            label="Dashboard"
            active={activeMenu === 'dashboard'}
            onClick={() => setActiveMenu('dashboard')}
          />
          <SidebarItem
            icon={<ShoppingBagIcon className="w-6 h-6" />}
            label="Produk"
            active={activeMenu === 'produk'}
            onClick={() => setActiveMenu('produk')}
          />
          <SidebarItem
            icon={<CurrencyDollarIcon className="w-6 h-6" />}
            label="Transaksi"
            active={activeMenu === 'transaksi'}
            onClick={() => setActiveMenu('transaksi')}
          />
        </nav>

        <button
          className="px-6 py-3 text-pink-600 hover:bg-gray-800 border-t border-gray-700 flex items-center space-x-2"
          onClick={() => alert('Logout')}
        >
          <ArrowLeftOnRectangleIcon className="w-6 h-6" />
          <span>Logout</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">
          {activeMenu === 'dashboard'
            ? 'Dashboard'
            : activeMenu === 'produk'
            ? 'Produk'
            : 'Transaksi'}
        </h1>

        {activeMenu === 'dashboard' && (
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <p className="text-sm text-gray-500">Total Produk</p>
              <p className="text-3xl font-bold">2</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <p className="text-sm text-gray-500">Total Transaksi</p>
              <p className="text-3xl font-bold">2</p>
            </div>
          </div>
        )}

        {activeMenu === 'produk' && (
          <div className="bg-white p-4 rounded shadow">
            <p>Daftar produk akan ditampilkan di sini.</p>
          </div>
        )}

        {activeMenu === 'transaksi' && (
          <div className="bg-white p-4 rounded shadow">
            <p>Daftar transaksi akan ditampilkan di sini.</p>
          </div>
        )}
      </main>
    </div>
  );
}

function SidebarItem({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`group flex items-center px-4 py-2 rounded-md w-full focus:outline-none ${
        active
          ? 'bg-pink-600 text-white'
          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
      }`}
    >
      {icon}
      <span className="ml-3">{label}</span>
    </button>
  );
}
