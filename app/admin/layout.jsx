// app/admin/layout.jsx

// Remove imports for Geist and Geist_Mono, as they should be handled by the root layout (app/layout.js)
// If you need any specific fonts for the admin section, define them in app/layout.js
// or import them here and apply to inner elements if they are not global to body

export const metadata = {
  title: "Admin – Cmplai",
};

export default function AdminLayout({ children }) {
  return (
    // REMOVE <html> and <body> tags from here.
    // The root layout (app/layout.js) is responsible for these.
    // Apply the body-level classes to the outermost div inside this layout.
    <div className="bg-[#f9fefe] font-sans antialiased text-gray-900 flex min-h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-teal-100 p-6 shadow-xl hidden lg:block">
        <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-500 mb-10">
          Admin Panel
        </h2>

        <nav className="space-y-3 text-sm font-medium text-black">
          {[
            { label: "Dashboard", path: "/admin" },
            { label: "Navbar", path: "/admin/navbar" },
            { label: "Hero Section", path: "/admin/hero" },
            { label: "Stats", path: "/admin/stats" },
            { label: "Product Features", path: "/admin/productfeatures" },
            { label: "Services", path: "/admin/service" },
            { label: "Set Us", path: "/admin/setus" },
            { label: "Choose Us", path: "/admin/chooseus" },
            { label: "Challenges", path: "/admin/challenges" },
            { label: "Journey", path: "/admin/journey" },
            { label: "Are You Ready", path: "/admin/areyouready" },
            { label: "About Us", path: "/admin/aboutus" },
            { label: "Team", path: "/admin/team" },
            { label: "Contact Us", path: "/admin/contactus" },
            { label: "Footer", path: "/admin/footer" },
            { label: "Blogs", path: "/admin/blogs" },
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
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-6 py-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}