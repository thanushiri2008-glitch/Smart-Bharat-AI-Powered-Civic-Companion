import { Github, Mail, Globe } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <h2 className="text-2xl font-bold mb-3">
              🇮🇳 Smart Bharat
            </h2>

            <p className="text-gray-300">
              AI Powered Civic Companion designed to simplify
              government services, complaint management, and
              citizen assistance using Generative AI.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#assistant" className="hover:text-white">AI Assistant</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#complaint" className="hover:text-white">Complaint</a></li>
              <li><a href="#tracker" className="hover:text-white">Tracker</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Contact
            </h3>

            <div className="space-y-3">

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>support@smartbharat.ai</span>
              </div>

              <div className="flex items-center gap-3">
                <Globe size={18} />
                <span>www.smartbharat.ai</span>
              </div>

              <div className="flex items-center gap-3">
                <Github size={18} />
                <span>GitHub Repository</span>
              </div>

            </div>

          </div>

        </div>

        <hr className="my-8 border-blue-700" />

        <div className="text-center text-gray-300">
          © 2026 Smart Bharat – AI Powered Civic Companion.
          Built for <strong>DEVENGERS PromptWars 2026</strong>.
        </div>

      </div>
    </footer>
  );
}

export default Footer;