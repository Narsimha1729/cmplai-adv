export const metadata = {
  title: "Admin – Cmplai",
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f9fefe] font-sans antialiased">
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-white border-r border-teal-100 p-6 shadow-lg">
            <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-500 mb-10">
              Admin Panel
            </h2>
            <nav className="space-y-4 text-gray-700">
              <a href="/admin" className="block hover:text-teal-500">Dashboard</a>
              <a href="/admin/navbar" className="block hover:text-teal-500">Navbar</a>
              <a href="/admin/hero" className="block hover:text-teal-500">Hero Section</a>
              <a href="/admin/stats" className="block hover:text-teal-500">Stats</a>
              <a href="/admin/productfeatures" className="block hover:text-teal-500">Product Features</a>
              <a href="/admin/service" className="block hover:text-teal-500">Services</a>
              <a href="/admin/team" className="block hover:text-teal-500">Team</a>
              <a href="/admin/footer" className="block hover:text-teal-500">Footer</a>
              <a href="/admin/blogs" className="block hover:text-teal-500">Blogs</a>
              <a href="/admin/faq" className="block hover:text-teal-500">FAQ</a>
              <a href="/admin/docs" className="block hover:text-teal-500">Docs</a>
              <a href="/admin/privacy" className="block hover:text-teal-500">Legal Pages</a>
            </nav>
          </aside>

          {/* Content */}
          <main className="flex-1 p-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
