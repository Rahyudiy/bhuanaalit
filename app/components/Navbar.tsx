import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 pt-5 relative">
      <h1 className="font-bold text-lg font-poppins">BhuanaAlit</h1>

      <div className="flex justify-center absolute font-poppins left-1/2 -translate-x-1/2">
        <div className="flex gap-10 bg-blue-300 p-2 rounded-full shadow-md">
          <Link href="/" className="px-5 py-2 rounded-full hover:bg-white">
            Home
          </Link>
          <Link href="/" className="px-5 py-2 rounded-full hover:bg-white">
            Explore
          </Link>
          <Link href="/" className="px-5 py-2 rounded-full hover:bg-white">
            Stories
          </Link>
          <Link href="/" className="px-5 py-2 rounded-full hover:bg-white">
            About
          </Link>
        </div>
      </div>

      <button className="bg-black px-5 py-2 rounded-full text-white hover:bg-gray-800">
        start your journey
      </button>
    </nav>
  );
};
