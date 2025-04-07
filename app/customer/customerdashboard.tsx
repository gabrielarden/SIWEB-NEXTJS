"use client";

import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';

export default function CustomerDashboard() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <h1 className={`${lusitana.className} text-2xl text-white`}>Customer Dashboard</h1>
      </div>
      
      <div className="mt-4 flex grow flex-col gap-4 rounded-lg bg-gray-50 p-6">
        <h2 className="text-xl font-medium">Welcome, Customer!</h2>
        <p className="text-gray-700">Here you can manage your orders and account settings.</p>
        
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-medium">My Orders</h3>
            <p className="text-sm text-gray-600">View and track your recent orders</p>
            <button className="mt-4 rounded-md bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">View Orders</button>
          </div>
          
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-medium">Account Settings</h3>
            <p className="text-sm text-gray-600">Update your personal information</p>
            <button className="mt-4 rounded-md bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">Manage Account</button>
          </div>
          
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-medium">Support</h3>
            <p className="text-sm text-gray-600">Get help with your questions</p>
            <button className="mt-4 rounded-md bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">Contact Support</button>
          </div>
        </div>
        
        <div className="mt-6">
          <Link href="/" className="text-sm text-blue-600 hover:text-blue-800">
            ← Back to Login
          </Link>
        </div>
      </div>
    </main>
  );
}