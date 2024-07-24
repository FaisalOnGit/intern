import Image from "next/image";
import turnedInLogo from "@/public/turnedin.svg";

function Navbar() {
  return (
    <nav className="py-1">
      <div className="container px-16 mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image
            src={turnedInLogo}
            alt="Turned In Logo"
            className="h-16 w-16"
          />
          <p className="text-custom-blue font-bold text-xl">Turned In</p>
        </div>
        <div className="space-x-4">
          <a href="/" className="text-black hover:text-gray-300">
            Home
          </a>
          <a href="/about" className="text-black hover:text-gray-300">
            Cek Pesanan
          </a>
          <a href="/gallery" className="text-black hover:text-gray-300">
            Order
          </a>
        </div>
        <div>
          <button className="bg-custom-blue hover:bg-custom-blue-hover text-white font-bold py-1 px-7 rounded">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
