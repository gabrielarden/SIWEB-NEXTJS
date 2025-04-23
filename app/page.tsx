"use client";

import React from 'react';
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const [role, setRole] = useState('customer');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simple validation
    if (!username || !password) {
      setError('Username and password are required');
      return;
    }
  
    // Deklarasikan role di luar if dan else if
    let role = '';  // Variabel role dideklarasikan di luar kondisi if
  
    // Validasi kredensial
    if (username === 'admin123' && password === '12345') {
      // Set role sebagai admin
      setError('');
      role = 'admin'; // Assign role sebagai 'admin'
    } else if (username === 'user123' && password === '12345') {
      // Set role sebagai user
      setError('');
      role = 'user'; // Assign role sebagai 'user'
    } else {
      // Kredensial tidak valid
      setError('Invalid username or password');
      return; // Hentikan eksekusi lebih lanjut jika kredensial salah
    }
  
    // Redirect ke dashboard berdasarkan role
    if (role === 'admin') {
      router.push('/admin/dashboard');
    } else {
      router.push('/customer/dashboard');
    }
  };
  

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-pink-500 p-4 md:h-52">
      <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>BOQUETS HUB.</strong>
          </p>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to BOQUETS HUB.</strong> Please log in to access your dashboard.
          </p>
          
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            {error && <p className="text-red-500 text-sm">{error}</p>}
            
            <div className="flex flex-col gap-2">
              <label htmlFor="username" className="text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                placeholder="Enter your username"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                placeholder="Enter your password"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="role" className="text-sm font-medium text-gray-700">
                Login As
              </label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              >
                <option value="customer">Customer</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            
            <button
              type="submit"
              className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-pink-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-pink-400 md:text-base"
            >
              <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
            </button>
          </form>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Hero Images */}
          <Image
            src="/boquets.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="boquets"
          />
        </div>
      </div>
    </main>
  );
}