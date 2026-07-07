import { Menu } from "lucide-react";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">
          🇮🇳 Smart Bharat
        </h1>

        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-blue-700">Home</a></li>
          <li><a href="#assistant" className="hover:text-blue-700">AI Assistant</a></li>
          <li><a href="#services" className="hover:text-blue-700">Services</a></li>
          <li><a href="#documents" className="hover:text-blue-700">Documents</a></li>
          <li><a href="#complaint" className="hover:text-blue-700">Complaint</a></li>
          <li><a href="#tracker" className="hover:text-blue-700">Track</a></li>
          <li><a href="#schemes" className="hover:text-blue-700">Schemes</a></li>
        </ul>

        <button className="md:hidden">
          <Menu size={28} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;