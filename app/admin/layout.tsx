import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold">Admin Panel</h2>
        <nav className="mt-4">
          <ul>
            <li className="mb-2">
              <Link href="/admin" className="block p-2 hover:bg-gray-700">
                Dashboard
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/admin/products"
                className="block p-2 hover:bg-gray-700"
              >
                Manage Products
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
