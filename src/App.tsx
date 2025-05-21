import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { BlogSection } from "@/components/BlogSection";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import ProductDetail from "@/pages/ProductDetail";

function Home() {
  return (
    <>
      <HeroSection />
      <BlogSection />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <LeadCaptureForm />
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Toaster position="top-center" />
    </Router>
  );
}

export default App;
