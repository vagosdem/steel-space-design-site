import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { BlogSection } from "@/components/BlogSection";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import ProductDetail from "@/pages/ProductDetail";
import Products from "@/pages/Products";
import NotFound from "@/pages/NotFound";

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
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Toaster position="top-center" />
    </Router>
  );
}

export default App;
