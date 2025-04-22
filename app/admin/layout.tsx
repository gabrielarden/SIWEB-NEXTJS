'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';  // Pastikan import ini sudah benar
import {
  HomeIcon,
  ShoppingBagIcon,
  CurrencyDollarIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline';

const AdminPage = () => {
  const router = useRouter(); // Tambahkan baris ini untuk mendeklarasikan router
  const [page, setPage] = useState('dashboard');
  const [products, setProducts] = useState([
    { id: 1, name: 'Mawar Merah', price: 150000 },
    { id: 2, name: 'Lili Putih', price: 120000 },
  ]);
  const [transactions, setTransactions] = useState([
    { id: 1, product: 'Mawar Merah', buyer: 'Andi' },
    { id: 2, product: 'Lili Putih', buyer: 'Sita' },
  ]);
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [isAddingTransaction, setIsAddingTransaction] = useState(false);
  const [isEditingProductId, setIsEditingProductId] = useState(null);
  const [isEditingTransactionId, setIsEditingTransactionId] = useState(null);
  const [newProduct, setNewProduct] = useState({ name: '', price: '' });
  const [newTransaction, setNewTransaction] = useState({ product: '', buyer: '' });

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price) return;
    setProducts([...products, {
      id: Date.now(),
      name: newProduct.name,
      price: parseInt(newProduct.price),
    }]);
    setNewProduct({ name: '', price: '' });
    setIsAddingProduct(false);
  };

  const handleAddTransaction = () => {
    if (!newTransaction.product || !newTransaction.buyer) return;
    setTransactions([...transactions, {
      id: Date.now(),
      product: newTransaction.product,
      buyer: newTransaction.buyer,
    }]);
    setNewTransaction({ product: '', buyer: '' });
    setIsAddingTransaction(false);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleDeleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  const handleEditProduct = (id) => {
    const product = products.find(p => p.id === id);
    setNewProduct({ name: product.name, price: product.price });
    setIsEditingProductId(id);
  };

  const handleUpdateProduct = () => {
    if (!newProduct.name || !newProduct.price) return;
    setProducts(products.map(product =>
      product.id === isEditingProductId
        ? { ...product, name: newProduct.name, price: parseInt(newProduct.price) }
        : product
    ));
    setIsEditingProductId(null);
    setNewProduct({ name: '', price: '' });
  };

  const handleEditTransaction = (id) => {
    const trx = transactions.find(t => t.id === id);
    setNewTransaction({ product: trx.product, buyer: trx.buyer });
    setIsEditingTransactionId(id);
  };

  const handleUpdateTransaction = () => {
    if (!newTransaction.product || !newTransaction.buyer) return;
    setTransactions(transactions.map(trx =>
      trx.id === isEditingTransactionId
        ? { ...trx, product: newTransaction.product, buyer: newTransaction.buyer }
        : trx
    ));
    setIsEditingTransactionId(null);
    setNewTransaction({ product: '', buyer: '' });
  };

  const handleLogout = () => {
    // Kalau kamu punya token session yang perlu dihapus, lakukan di sini
    router.push('/');
  };

  // Render konten sesuai dengan state 'page'
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
              onClick={() => setIsAddingProduct(true)}
              className="bg-pink-600 text-white px-4 py-2 rounded flex items-center gap-2"
            >
              <PlusIcon className="w-5 h-5" /> Tambah Produk
            </button>
          </div>
          <ul className="space-y-2">
            {products.map((product) => (
              <li
                key={product.id}
                className="bg-white p-4 rounded shadow flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">{product.name}</p>
                  <p className="text-gray-500">Rp{product.price.toLocaleString()}</p>
                </div>
                <div className="flex gap-2">
                  <button className="text-blue-500" onClick={() => handleEditProduct(product.id)}>
                    <PencilIcon className="w-5 h-5" />
                  </button>
                  <button onClick={() => handleDeleteProduct(product.id)} className="text-red-500">
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
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
              <button
                onClick={isEditingProductId ? handleUpdateProduct : handleAddProduct}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Simpan
              </button>
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
              onClick={() => setIsAddingTransaction(true)}
              className="bg-pink-600 text-white px-4 py-2 rounded flex items-center gap-2"
            >
              <PlusIcon className="w-5 h-5" /> Tambah Transaksi
            </button>
          </div>
          <ul className="space-y-2">
            {transactions.map((trx) => (
              <li
                key={trx.id}
                className="bg-white p-4 rounded shadow flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">{trx.product}</p>
                  <p className="text-gray-500">Pembeli: {trx.buyer}</p>
                </div>
                <div className="flex gap-2">
                  <button className="text-blue-500" onClick={() => handleEditTransaction(trx.id)}>
                    <PencilIcon className="w-5 h-5" />
                  </button>
                  <button onClick={() => handleDeleteTransaction(trx.id)} className="text-red-500">
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
              <button
                onClick={isEditingTransactionId ? handleUpdateTransaction : handleAddTransaction}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Simpan
              </button>
            </div>
          )}
        </div>
      );
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */} 
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

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">{renderContent()}</div>
    </div>
  );
};

export default AdminPage;
