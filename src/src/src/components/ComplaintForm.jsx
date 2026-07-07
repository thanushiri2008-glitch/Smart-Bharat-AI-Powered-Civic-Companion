import { useState } from "react";

function ComplaintForm() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    location: "",
    description: "",
  });

  const [complaintId, setComplaintId] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = "SB-" + Math.floor(100000 + Math.random() * 900000);

    setComplaintId(id);

    alert("Complaint Submitted Successfully!");

    setForm({
      name: "",
      category: "",
      location: "",
      description: "",
    });
  };

  return (
    <section id="complaint" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-700">
          Report a Public Issue
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-10">
          Report civic issues such as potholes, garbage, broken streetlights,
          drainage problems, or water leakage.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 shadow-xl rounded-2xl p-8 space-y-5"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
            required
          />

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
            required
          >
            <option value="">Select Category</option>
            <option>Pothole</option>
            <option>Garbage</option>
            <option>Street Light</option>
            <option>Water Leakage</option>
            <option>Road Damage</option>
            <option>Drainage</option>
          </select>

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
            required
          />

          <textarea
            rows="5"
            name="description"
            placeholder="Describe the issue..."
            value={form.description}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
            required
          />

          <input
            type="file"
            className="w-full border rounded-xl p-3"
          />

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-4 rounded-xl hover:bg-blue-800 transition"
          >
            Submit Complaint
          </button>

        </form>

        {complaintId && (
          <div className="mt-8 bg-green-100 border border-green-300 rounded-xl p-5 text-center">
            <h3 className="text-xl font-bold text-green-700">
              Complaint Submitted Successfully!
            </h3>

            <p className="mt-2">
              Complaint ID:
            </p>

            <p className="text-2xl font-bold mt-2">
              {complaintId}
            </p>

            <p className="mt-2 text-gray-600">
              Save this ID to track your complaint.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}

export default ComplaintForm;