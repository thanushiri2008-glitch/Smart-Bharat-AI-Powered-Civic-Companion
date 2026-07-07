import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-500 text-white min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
            🇮🇳 AI for Digital India
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
            Smart Bharat
          </h1>

          <h2 className="text-2xl mt-3 font-semibold">
            AI Powered Civic Companion
          </h2>

          <p className="mt-6 text-lg text-blue-100 leading-8">
            Access government services, discover public welfare schemes,
            check required documents, report civic issues, and receive
            personalized AI assistance—all from one intelligent platform.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
              Try AI Assistant
            </button>

            <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-blue-700 transition">
              Explore Services
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-white text-gray-800 rounded-3xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-blue-700 mb-6">
              AI Civic Assistant
            </h3>

            <div className="space-y-4">
              <div className="bg-blue-100 p-3 rounded-xl">
                👤 How can I apply for a Passport?
              </div>

              <div className="bg-green-100 p-3 rounded-xl">
                🤖 Visit the Passport Seva portal, register an account,
                complete the application form, upload the required documents,
                pay the applicable fee, and schedule an appointment.
              </div>

              <div className="bg-blue-100 p-3 rounded-xl">
                👤 What documents are required?
              </div>

              <div className="bg-green-100 p-3 rounded-xl">
                🤖 Aadhaar Card, Address Proof, Date of Birth Proof,
                Passport-size Photograph, and supporting documents based
                on your application type.
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;