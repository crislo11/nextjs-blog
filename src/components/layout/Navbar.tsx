import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold text-gray-800 hover:text-gray-600"
        >
          Home
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-gray-800 hover:text-gray-600">
            Blogs
          </Link>
        </div>
      </div>
    </nav>
  );
}
