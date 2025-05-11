
import { Package, Shield, Clock } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="bg-metal-50">
      <div className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="mb-6">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600 font-medium">
                About Our Company
              </div>
            </div>
            <h2 className="text-metal-900 mb-6">Crafting Quality Metal Storage Solutions Since 2005</h2>
            <p className="text-metal-600 mb-6">
              Our company specializes in designing and manufacturing premium metal lockers and closets for residential, commercial, and industrial spaces. We combine traditional craftsmanship with modern technology to create storage solutions that are both functional and aesthetically pleasing.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <Package className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-metal-900">Quality Materials</h4>
                  <p className="text-metal-600">We use only the highest quality metals and components in our products.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-metal-900">10-Year Warranty</h4>
                  <p className="text-metal-600">All our products come with a comprehensive warranty for your peace of mind.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-metal-900">On-Time Delivery</h4>
                  <p className="text-metal-600">We pride ourselves on meeting deadlines and delivering projects on schedule.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600 rounded-lg opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-lg opacity-20"></div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&h=600" 
                alt="Our workshop" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
