import { useState } from "react";

function SchemeRecommendation() {
  const [form, setForm] = useState({
    age: "",
    occupation: "",
    income: "",
    state: "",
  });

  const [recommendations, setRecommendations] = useState([]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRecommend = () => {
    const schemes = [];

    if (Number(form.age) < 25) {
      schemes.push("National Scholarship Portal");
    }

    if (form.occupation.toLowerCase().includes("farmer")) {
      schemes.push("PM-KISAN");
    }

    if (Number(form.income) < 300000) {
      schemes.push("Ayushman Bharat");
      schemes.push("PM Awas Yojana");
    }

    schemes.push("Digital India Services");

    setRecommendations(schemes);
  };

  return (
    <section id="schemes" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-700">
          Government Scheme Recommendation
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-10">
          Enter your details to receive personalized scheme recommendations.
        </p>

        <div className="bg-gray-50 rounded-2xl shadow-xl p-8">

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="number"
              name="age"
              placeholder="Age"
              value={form.age}
              onChange={handleChange}
              className="border rounded-xl p-4"
            />

            <input
              type="text"
              name="occupation"
              placeholder="Occupation"
              value={form.occupation}
              onChange={handleChange}
              className="border rounded-xl p-4"
            />

            <input
              type="number"
              name="income"
              placeholder="Annual Income"
              value={form.income}
              onChange={handleChange}
              className="border rounded-xl p-4"
            />

            <input
              type="text"
              name="state"
              placeholder="State"
              value={form.state}
              onChange={handleChange}
              className="border rounded-xl p-4"
            />

          </div>

          <button
            onClick={handleRecommend}
            className="mt-8 bg-blue-700 text-white px-8 py-3 rounded-xl hover:bg-blue-800 transition"
          >
            Recommend Schemes
          </button>

          {recommendations.length > 0 && (
            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-4">
                Recommended Schemes
              </h3>

              <ul className="space-y-3">
                {recommendations.map((scheme, index) => (
                  <li
                    key={index}
                    className="bg-blue-50 border border-blue-200 rounded-xl p-4"
                  >
                    ✅ {scheme}
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

export default SchemeRecommendation;