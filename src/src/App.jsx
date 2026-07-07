import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Chatbot from "./components/Chatbot";
import Services from "./components/Services";
import DocumentChecker from "./components/DocumentChecker";
import ComplaintForm from "./components/ComplaintForm";
import ComplaintTracker from "./components/ComplaintTracker";
import SchemeRecommendation from "./components/SchemeRecommendation";
import Emergency from "./components/Emergency";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main>
        <Hero />
        <Chatbot />
        <Services />
        <DocumentChecker />
        <ComplaintForm />
        <ComplaintTracker />
        <SchemeRecommendation />
        <Emergency />
      </main>

      <Footer />
    </div>
  );
}

export default App;