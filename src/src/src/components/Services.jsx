import { FileText, CreditCard, Car, Vote, Shield, Landmark } from "lucide-react";

const services = [
  {
    title: "Passport",
    icon: <FileText size={40} className="text-blue-600" />,
    description: "Apply for a new passport or renew an existing passport."
  },
  {
    title: "Aadhaar",
    icon: <CreditCard size={40} className="text-blue-600" />,
    description: "Update Aadhaar details and download your Aadhaar card."
  },
  {
    title: "Driving License",
    icon: <Car size={40} className="text-blue-600" />,
    description: "Apply, renew or check the status of your driving license."
  },
  {
    title: "Voter ID",
    icon: <Vote size={40} className="text-blue-600" />,
    description: "Register for voter ID and update voter information."
  },
  {
    title: "PAN Card",
    icon: <Shield size={40} className="text-blue-600" />,
    description: "Apply for a new PAN card or correct PAN details."
  },
  {
    title: "Government Schemes",
    icon: <Landmark size={40} className="text-blue-600" />,
    description: "Explore welfare schemes offered by the Government."
  }
];

function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-700">
          Government Services
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-12">
          Discover popular government services available through Smart Bharat.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
            >
              <div className="mb-4">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-5">
                {service.description}
              </p>

              <button className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;