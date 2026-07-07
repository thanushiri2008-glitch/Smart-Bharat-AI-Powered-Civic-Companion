import { Phone, ShieldAlert, Ambulance, Flame } from "lucide-react";

const emergencyServices = [
  {
    title: "Police",
    number: "112",
    icon: <ShieldAlert size={40} className="text-blue-600" />,
    color: "bg-blue-50",
  },
  {
    title: "Ambulance",
    number: "108",
    icon: <Ambulance size={40} className="text-green-600" />,
    color: "bg-green-50",
  },
  {
    title: "Fire Service",
    number: "101",
    icon: <Flame size={40} className="text-red-600" />,
    color: "bg-red-50",
  },
  {
    title: "Women Helpline",
    number: "181",
    icon: <Phone size={40} className="text-pink-600" />,
    color: "bg-pink-50",
  },
];

function Emergency() {
  return (
    <section id="emergency" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-700">
          Emergency Helplines
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-12">
          Quick access to important emergency contact numbers.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {emergencyServices.map((item, index) => (
            <div
              key={index}
              className={`${item.color} rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition`}
            >
              <div className="flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-2">
                {item.title}
              </h3>

              <p className="text-3xl font-bold text-blue-700">
                {item.number}
              </p>

              <a
                href={`tel:${item.number}`}
                className="inline-block mt-6 bg-blue-700 text-white px-5 py-2 rounded-xl hover:bg-blue-800 transition"
              >
                Call Now
              </a>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Emergency;