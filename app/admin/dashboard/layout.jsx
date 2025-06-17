'use client';
import Link from 'next/link';

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-6 shadow-md">
        <h2 className="text-xl font-bold mb-6 text-teal-600">Admin Panel</h2>
        <nav className="space-y-4">
          <Link href="/admin/dashboard/home" className="text-gray-700 hover:text-teal-500">Home Section</Link>
          <Link href="/admin/dashboard/navbar" className="text-gray-700 hover:text-teal-500">Navbar</Link>
          <Link href="/admin/dashboard/footer" className="text-gray-700 hover:text-teal-500">Footer</Link>
          <Link href="/admin/dashboard/blogs" className="text-gray-700 hover:text-teal-500">Blogs</Link>
          <Link href="/admin/dashboard/faq" className="text-gray-700 hover:text-teal-500">FAQ</Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-10 bg-white">{children}</main>
    </div>
  );
}
