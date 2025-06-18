'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    if (password === 'admin123') {
      document.cookie = 'admin-auth=true; path=/';
      router.push('/admin');
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9fefe] px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md border border-teal-200 rounded-xl p-8 w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-teal-600 mb-4">Admin Login</h1>

        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-teal-400"
        />

        {error && <p className="text-red-600 mb-3 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold py-3 rounded-md hover:opacity-90 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
