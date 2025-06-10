// app/customer/dashboard/profile.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Simulasi pengambilan data user (bisa dari localStorage, API, atau session)
    const userData = JSON.parse(localStorage.getItem("user") || "{}");
    if (!userData || !userData.nama) {
      router.push("/"); // redirect kalau belum login
    } else {
      setUser(userData);
    }
  }, [router]);

  const userData = {
  nama: "Gabriel Arden",
  email: "gabriel@example.com",
  alamat: "Jl. Mawar No. 12, Sleman"
};

localStorage.setItem("user", JSON.stringify(userData));

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/");
  };

  if (!user) return <p className="p-4">Loading...</p>;

  return (
    <div className="bg-white">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 shadow-md">
        <h1 className="text-2xl font-bold text-pink-500">BOUQUETS HUB</h1>
        <nav className="space-x-6 text-lg text-gray-700">
          <a href="/customer/dashboard" className="hover:text-pink-500">Home</a>
          <a href="/customer/dashboard/aboutus" className="hover:text-pink-500">About us</a>
          <a href="/customer/dashboard/teams" className="hover:text-pink-500">Our Teams</a>
          <a href="#" className="hover:text-pink-500">Profile</a>
        </nav>
        <div className="space-x-4">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            title="Logout"
            aria-label="Logout"
          >
            {/* Icon Logout SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1" />
            </svg>
            Logout
          </button>
        </div>
      </header>
      <h1 className="text-2xl font-bold mb-4 text-pink-600">Profil Pengguna</h1>
      <div className="space-y-2">
        <p><span className="font-semibold">Nama:</span> {user.nama}</p>
        <p><span className="font-semibold">Email:</span> {user.email}</p>
        <p><span className="font-semibold">Alamat:</span> {user.alamat}</p>
      </div>
      
    </div>
  );
}
