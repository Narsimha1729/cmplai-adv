export const metadata = {
  title: "Admin – Cmplai",
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-white border-r p-6 shadow-md">
            <h2 className="text-xl font-bold mb-8 text-teal-600">Cmplai Admin</h2>
            <nav className="space-y-4">
              <a href="/admin" className="block text-gray-700 hover:text-teal-500">Dashboard</a>
              <a href="/admin/hero" className="block text-gray-700 hover:text-teal-500">Hero Section</a>
              <a href="/admin/navbar" className="block text-gray-700 hover:text-teal-500">Navbar</a>
              <a href="/admin/footer" className="block text-gray-700 hover:text-teal-500">Footer</a>
              <a href="/admin/blogs" className="block text-gray-700 hover:text-teal-500">Blogs</a>
              <a href="/admin/faq" className="block text-gray-700 hover:text-teal-500">FAQ</a>
              <a href="/admin/docs" className="block text-gray-700 hover:text-teal-500">Docs</a>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
