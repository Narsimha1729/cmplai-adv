'use client';

import { useEffect, useState } from 'react'; // Import useState
import { useRouter } from 'next/navigation';

export default function AdminLayout({ children }) {
  const router = useRouter();
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false); // New state variable

  useEffect(() => {
    // Check for admin-auth in localStorage or cookies
    const authFromLocalStorage = localStorage.getItem('admin-auth');
    const authFromCookie = document.cookie.includes('admin-auth=');

    if (authFromLocalStorage || authFromCookie) {
      setIsAdminLoggedIn(true);
    } else {
      setIsAdminLoggedIn(false);
      // Optional: Redirect to login if not authenticated on initial load
      // router.push('/admin/login');
    }
  }, []); // Run once on component mount

  const logout = () => {
    // Clear localStorage or cookie
    localStorage.removeItem('admin-auth');
    document.cookie = 'admin-auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    setIsAdminLoggedIn(false); // Update state on logout
    router.push('/admin/login');
  };

  return (
    <div className="bg-[#f9fefe] font-sans antialiased text-gray-900 flex min-h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-teal-100 p-6 shadow-xl hidden lg:flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-500 mb-10">
            Admin Panel
            {/* Conditional Logout Button */}
            {isAdminLoggedIn && ( // Conditionally render
              <button
                onClick={logout}
                className="mt-8 text-sm text-red-600 hover:text-red-800 font-semibold border border-red-100 hover:border-red-300 px-4 py-2 rounded-md transition"
              >
                Logout
              </button>
            )}
          </h2>

          <nav className="space-y-3 text-sm font-medium text-black">
            {[
              { label: 'Dashboard', path: '/admin' },
              { label: 'Navbar', path: '/admin/navbar' },
              { label: 'Hero Section', path: '/admin/hero' },
              { label: 'Stats', path: '/admin/stats' },
              { label: 'Product Features', path: '/admin/productfeatures' },
              { label: 'Services', path: '/admin/service' },
              { label: 'Set Us', path: '/admin/setus' },
              { label: 'Choose Us', path: '/admin/chooseus' },
              { label: 'Challenges', path: '/admin/challenges' },
              { label: 'Journey', path: '/admin/journey' },
              { label: 'Are You Ready', path: '/admin/areyouready' },
              { label: 'About Us', path: '/admin/aboutus' },
              { label: 'Team', path: '/admin/team' },
              { label: 'Contact Us', path: '/admin/contactus' },
              { label: 'Footer', path: '/admin/footer' },
              { label: 'Blogs', path: '/admin/blogs' },
            ].map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="block px-3 py-2 rounded-md hover:text-teal-600 hover:bg-teal-50 transition"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-6 py-8 overflow-y-auto">{children}</main>
    </div>
  );
}