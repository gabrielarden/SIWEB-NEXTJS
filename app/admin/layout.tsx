'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  HomeIcon,
  ShoppingBagIcon,
  CurrencyDollarIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline';

type Product = {
  id: number;
  name: string;
  price: number;
};

type Transaction = {
  id: number;
  product: string;
  buyer: string;
};

const AdminPage = () => {
  const router = useRouter();
  const [page, setPage] = useState('dashboard');
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'Amour Rouge', price: 150000 },
    { id: 2, name: 'Bluse Of Romance', price: 120000 },
  ]);
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 1, product: 'Amour Rouge', buyer: 'Andi' },
    { id: 2, product: 'Bluse Of Romance', buyer: 'Sita' },
  ]);

  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [isAddingTransaction, setIsAddingTransaction] = useState(false);
  const [isEditingProductId, setIsEditingProductId] = useState<number | null>(null);
  const [isEditingTransactionId, setIsEditingTransactionId] = useState<number | null>(null);
  const [newProduct, setNewProduct] = useState({ name: '', price: '' });
  const [newTransaction, setNewTransaction] = useState({ product: '', buyer: '' });

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price) return;
    setProducts([
      ...products,
      {
        id: Date.now(),
        name: newProduct.name,
        price: parseInt(newProduct.price),
      },
    ]);
    setNewProduct({ name: '', price: '' });
    setIsAddingProduct(false);
  };

  const handleAddTransaction = () => {
    if (!newTransaction.product || !newTransaction.buyer) return;
    setTransactions([
      ...transactions,
      {
        id: Date.now(),
        product: newTransaction.product,
        buyer: newTransaction.buyer,
      },
    ]);
    setNewTransaction({ product: '', buyer: '' });
    setIsAddingTransaction(false);
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter((p: Product) => p.id !== id));
  };
  
  const handleDeleteTransaction = (id: number) => {
    setTransactions(transactions.filter((t: Transaction) => t.id !== id));
  };
  
  const handleEditProduct = (id: number) => {
    const prod = products.find((p: Product) => p.id === id);
    if (!prod) return;
    setNewProduct({ name: prod.name, price: prod.price.toString() });
    setIsEditingProductId(id);
  };
  
  const handleUpdateProduct = () => {
    if (!newProduct.name || !newProduct.price) return;
    setProducts(
      products.map((p: Product) =>
        p.id === isEditingProductId
          ? { ...p, name: newProduct.name, price: parseInt(newProduct.price) }
          : p
      )
    );
    setIsEditingProductId(null);
    setNewProduct({ name: '', price: '' });
  };
  
  const handleEditTransaction = (id: number) => {
    const trx = transactions.find((t: Transaction) => t.id === id);
    if (!trx) return;
    setNewTransaction({ product: trx.product, buyer: trx.buyer });
    setIsEditingTransactionId(id);
  };
  
  const handleUpdateTransaction = () => {
    if (!newTransaction.product || !newTransaction.buyer) return;
    setTransactions(
      transactions.map((t: Transaction) =>
        t.id === isEditingTransactionId
          ? { ...t, product: newTransaction.product, buyer: newTransaction.buyer }
          : t
      )
    );
    setIsEditingTransactionId(null);
    setNewTransaction({ product: '', buyer: '' });
  };
  

  const handleLogout = () => {
    router.push('/');
  };

  const renderContent = () => {
    if (page === 'dashboard') {
      return (
        <div>
          <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <p className="text-gray-500">Total Produk</p>
              <h3 className="text-3xl font-semibold">{products.length}</h3>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <p className="text-gray-500">Total Transaksi</p>
              <h3 className="text-3xl font-semibold">{transactions.length}</h3>
            </div>
          </div>
        </div>
      );
    }

    if (page === 'produk') {
      return (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Daftar Produk</h2>
            <button
              onClick={() => {
                setIsAddingProduct(true);
                setIsEditingProductId(null);
                setNewProduct({ name: '', price: '' });
              }}
              className="bg-pink-600 text-white px-4 py-2 rounded flex items-center gap-2"
            >
              <PlusIcon className="w-5 h-5" /> Tambah Produk
            </button>
          </div>
          <table className="min-w-full bg-white rounded shadow">
            <thead>
              <tr>
                <th className="text-left px-4 py-2">Nama Produk</th>
                <th className="text-left px-4 py-2">Harga</th>
                <th className="text-left px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} className="border-t">
                  <td className="px-4 py-2">{p.name}</td>
                  <td className="px-4 py-2">Rp{p.price.toLocaleString()}</td>
                  <td className="px-4 py-2 space-x-2">
                    <button className="text-blue-500" onClick={() => handleEditProduct(p.id)}>
                      <PencilIcon className="w-5 h-5 inline" />
                    </button>
                    <button onClick={() => handleDeleteProduct(p.id)} className="text-red-500">
                      <TrashIcon className="w-5 h-5 inline" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {(isAddingProduct || isEditingProductId !== null) && (
            <div className="mt-6 p-4 bg-gray-100 rounded space-y-2">
              <h3 className="font-bold mb-2">{isEditingProductId ? 'Edit Produk' : 'Form Tambah Produk'}</h3>
              <input
                type="text"
                placeholder="Nama Produk"
                className="w-full border px-3 py-2 rounded"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              />
              <input
                type="number"
                placeholder="Harga Produk"
                className="w-full border px-3 py-2 rounded"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              />
              <div className="flex gap-2">
                <button
                  onClick={isEditingProductId ? handleUpdateProduct : handleAddProduct}
                  className="bg-green-600 text-white px-4 py-2 rounded"
                >
                  Simpan
                </button>
                <button
                  onClick={() => {
                    setIsAddingProduct(false);
                    setIsEditingProductId(null);
                    setNewProduct({ name: '', price: '' });
                  }}
                  className="bg-gray-400 text-white px-4 py-2 rounded"
                >
                  Batal
                </button>
              </div>
            </div>
          )}
        </div>
      );
    }

    if (page === 'transaksi') {
      return (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Daftar Transaksi</h2>
            <button
              onClick={() => {
                setIsAddingTransaction(true);
                setIsEditingTransactionId(null);
                setNewTransaction({ product: '', buyer: '' });
              }}
              className="bg-pink-600 text-white px-4 py-2 rounded flex items-center gap-2"
            >
              <PlusIcon className="w-5 h-5" /> Tambah Transaksi
            </button>
          </div>
          <ul className="space-y-2">
            {transactions.map((t) => (
              <li
                key={t.id}
                className="bg-white p-4 rounded shadow flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">{t.product}</p>
                  <p className="text-gray-500">Pembeli: {t.buyer}</p>
                </div>
                <div className="flex gap-2">
                  <button className="text-blue-500" onClick={() => handleEditTransaction(t.id)}>
                    <PencilIcon className="w-5 h-5" />
                  </button>
                  <button onClick={() => handleDeleteTransaction(t.id)} className="text-red-500">
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          {(isAddingTransaction || isEditingTransactionId !== null) && (
            <div className="mt-6 p-4 bg-gray-100 rounded space-y-2">
              <h3 className="font-bold mb-2">{isEditingTransactionId ? 'Edit Transaksi' : 'Form Tambah Transaksi'}</h3>
              <input
                type="text"
                placeholder="Nama Produk"
                className="w-full border px-3 py-2 rounded"
                value={newTransaction.product}
                onChange={(e) => setNewTransaction({ ...newTransaction, product: e.target.value })}
              />
              <input
                type="text"
                placeholder="Nama Pembeli"
                className="w-full border px-3 py-2 rounded"
                value={newTransaction.buyer}
                onChange={(e) => setNewTransaction({ ...newTransaction, buyer: e.target.value })}
              />
              <div className="flex gap-2">
                <button
                  onClick={isEditingTransactionId ? handleUpdateTransaction : handleAddTransaction}
                  className="bg-green-600 text-white px-4 py-2 rounded"
                >
                  Simpan
                </button>
                <button
                  onClick={() => {
                    setIsAddingTransaction(false);
                    setIsEditingTransactionId(null);
                    setNewTransaction({ product: '', buyer: '' });
                  }}
                  className="bg-gray-400 text-white px-4 py-2 rounded"
                >
                  Batal
                </button>
              </div>
            </div>
          )}
        </div>
      );
    }
  };

  return (
    <div className="flex">
      <div className="w-64 bg-gray-900 text-white h-screen flex flex-col justify-between px-4 py-6">
        <div>
          <h1 className="text-pink-500 text-2xl font-bold mb-10">BOUQUETS HUB</h1>
          <nav className="space-y-2">
            <button onClick={() => setPage('dashboard')} className={`flex items-center gap-3 px-3 py-2 rounded-md w-full text-left ${page === 'dashboard' ? 'bg-pink-600' : 'hover:bg-pink-600 hover:text-white text-gray-300'}`}>
              <HomeIcon className="w-5 h-5" /> Dashboard
            </button>
            <button onClick={() => setPage('produk')} className={`flex items-center gap-3 px-3 py-2 rounded-md w-full text-left ${page === 'produk' ? 'bg-pink-600' : 'hover:bg-pink-600 hover:text-white text-gray-300'}`}>
              <ShoppingBagIcon className="w-5 h-5" /> Produk
            </button>
            <button onClick={() => setPage('transaksi')} className={`flex items-center gap-3 px-3 py-2 rounded-md w-full text-left ${page === 'transaksi' ? 'bg-pink-600' : 'hover:bg-pink-600 hover:text-white text-gray-300'}`}>
              <CurrencyDollarIcon className="w-5 h-5" /> Transaksi
            </button>
          </nav>
        </div>
        <button 
          onClick={handleLogout}
          className="flex items-center gap-3 text-pink-400 hover:text-white hover:bg-pink-600 px-3 py-2 rounded-md transition-all">
          <ArrowLeftOnRectangleIcon className="w-5 h-5" /> Logout
        </button>
      </div>
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">{renderContent()}</div>
    </div>
  );
};

export default AdminPage;
