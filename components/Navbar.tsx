import Link from "next/link";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0">
            <Link href="/" className="font-bold text-gray-800 text-xl">
              My website
            </Link>
          </div>
          <ul className="flex">
            <li className="px-3 py-2">
              <Link
                href={"/"}
                className="font-medium text-gray-600 hover:text-gray-900"
              >
                Home
              </Link>
            </li>
            <li className="px-3 py-2">
              <Link
                href={"/about"}
                className="font-medium text-gray-600 hover:text-gray-900"
              >
                About
              </Link>
            </li>
            <li className="px-3 py-2">
              <Link
                href={"/contact"}
                className="font-medium text-gray-600 hover:text-gray-900"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
