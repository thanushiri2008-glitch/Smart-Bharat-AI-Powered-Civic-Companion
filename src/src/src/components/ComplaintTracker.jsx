import { useState } from "react";
import { Search, CheckCircle, Clock } from "lucide-react";

function ComplaintTracker() {
  const [complaintId, setComplaintId] = useState("");
  const [status, setStatus] = useState(null);

  const handleTrack = () => {
    if (!complaintId.trim()) {
      alert("Please enter a Complaint ID.");
      return;
    }

    // Demo status
    setStatus({
      id: complaintId,
      department: "Municipal Corporation",
      currentStatus: "In Progress",
      expectedResolution: "Within 3 Working Days",
    });
  };

  return (
    <section id="tracker" className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-700">
          Complaint Tracker
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-10">
          Enter your Complaint ID to check the latest status.
        </p>

        <div className="bg-white rounded-2xl shadow-xl p-8">

          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Enter Complaint ID (Example: SB-123456)"
              value={complaintId}
              onChange={(e) => setComplaintId(e.target.value)}
              className="flex-1 border rounded-xl p-4"
            />

            <button
              onClick={handleTrack}
              className="bg-blue-700 text-white px-6 rounded-xl hover:bg-blue-800 flex items-center gap-2"
            >
              <Search size={20} />
              Track
            </button>
          </div>

          {status && (
            <div className="mt-10">

              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">
                  Complaint Details
                </h3>

                <p><strong>Complaint ID:</strong> {status.id}</p>
                <p><strong>Department:</strong> {status.department}</p>
                <p><strong>Status:</strong> {status.currentStatus}</p>
                <p><strong>Expected Resolution:</strong> {status.expectedResolution}</p>
              </div>

              <div className="space-y-5">

                <div className="flex items-center gap-4">
                  <CheckCircle className="text-green-600" />
                  <span>Complaint Submitted</span>
                </div>

                <div className="flex items-center gap-4">
                  <Clock className="text-yellow-500" />
                  <span>Under Review</span>
                </div>

                <div className="flex items-center gap-4 opacity-50">
                  <CheckCircle />
                  <span>Resolved</span>
                </div>

              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}

export default ComplaintTracker;