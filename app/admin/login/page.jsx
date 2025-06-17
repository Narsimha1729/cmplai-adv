'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (password === 'admin123') {
      router.push('/admin/dashboard');
    } else {
      alert('Incorrect password!');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-md">
        <h1 className="text-xl font-semibold mb-4">Admin Login</h1>
        <input
          type="password"
          placeholder="Enter admin password"
          className="border px-4 py-2 rounded-md w-full mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-cyan-600"
        >
          Login
        </button>
      </div>
    </div>
  );
}
