import { useState } from "react";

const documents = {
  Passport: [
    "Aadhaar Card",
    "Birth Certificate",
    "Address Proof",
    "Passport-size Photograph"
  ],
  Aadhaar: [
    "Identity Proof",
    "Address Proof",
    "Mobile Number"
  ],
  "Driving License": [
    "Learner's License",
    "Age Proof",
    "Address Proof",
    "Passport-size Photograph"
  ],
  "PAN Card": [
    "Identity Proof",
    "Address Proof",
    "Date of Birth Proof"
  ],
  "Voter ID": [
    "Identity Proof",
    "Address Proof",
    "Passport-size Photograph"
  ]
};

function DocumentChecker() {
  const [service, setService] = useState("");

  return (
    <section id="documents" className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-700">
          Document Requirement Checker
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-10">
          Select a government service to view the required documents.
        </p>

        <div className="bg-white rounded-2xl shadow-xl p-8">

          <select
            className="w-full border rounded-xl p-4 mb-8"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="">Select a Service</option>
            {Object.keys(documents).map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          {service && (
            <div>

              <h3 className="text-2xl font-semibold mb-5">
                Required Documents for {service}
              </h3>

              <ul className="space-y-3">
                {documents[service].map((doc, index) => (
                  <li
                    key={index}
                    className="bg-blue-50 border border-blue-200 rounded-lg p-3"
                  >
                    ✅ {doc}
                  </li>
                ))}
              </ul>

              <button className="mt-8 bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition">
                Download Checklist
              </button>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}

export default DocumentChecker;