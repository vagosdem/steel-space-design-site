
import { Box, PackageOpen, Building } from "lucide-react";

const features = [
  {
    title: "Premium Materials",
    description: "Our products are crafted from high-grade steel and aluminum, ensuring longevity and durability.",
    icon: Box
  },
  {
    title: "Custom Designs",
    description: "Every space is unique. We create custom solutions that perfectly fit your specific requirements.",
    icon: PackageOpen
  },
  {
    title: "Professional Installation",
    description: "Our expert team handles everything from measurement to final installation with precision.",
    icon: Building
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-white">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-metal-900 mb-4">Why Choose Us</h2>
          <p className="text-metal-600 text-lg">
            Our commitment to quality and customer satisfaction sets us apart in the industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-metal-50 p-6 rounded-lg border border-metal-100">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-metal-900">{feature.title}</h3>
              <p className="text-metal-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-metal-900 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Expert Craftsmanship
              </h3>
              <p className="text-metal-200 mb-6">
                With over 15 years of experience in the industry, our skilled craftsmen bring expertise and precision to every project. We pride ourselves on attention to detail and superior workmanship.
              </p>
              <ul className="space-y-3 text-metal-200">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Precision manufacturing
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Quality control at every stage
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Durable finishes
                </li>
              </ul>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&h=600" 
                alt="Metal fabrication workshop" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
