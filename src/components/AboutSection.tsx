import { Package, Shield, Clock, Award, Users, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
const fadeIn = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0
  }
};
export default function AboutSection() {
 return (
   <section id="about" className="bg-metal-800 text-white relative">
      {/* Transition gradient at the top */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-metal-800 w-full"></div>

      {/* Content */}
      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Steel Space Design
            </p>
            <p className="text-lg mb-6">
              Welcome to Steel Space Design, where innovation meets craftsmanship
              in the world of steel structures. We are a leading provider of
              high-quality steel design and construction services, dedicated to
              transforming visions into reality.
            </p>
            <p className="text-lg mb-6">
              With a passion for precision and a commitment to excellence, our
              team of experienced professionals specializes in creating robust and
              aesthetically pleasing steel solutions for a wide range of
              applications. From industrial facilities and commercial buildings to
              residential structures and artistic installations, we have the
              expertise to handle projects of any scale and complexity.
            </p>
            <p className="text-lg">
              At Steel Space Design, we believe in pushing the boundaries of what
              is possible with steel. We embrace the latest technologies and
              design principles to deliver innovative solutions that are not only
              structurally sound but also visually striking. Our collaborative
              approach ensures that we work closely with our clients,
              understanding their unique requirements and translating them into
              functional and inspiring steel spaces.
            </div>
          </div>
          <div className="lg:w-1/2">
            {/* Placeholder for an image or illustration */}
            <div className="bg-metal-700 rounded-lg overflow-hidden">
              <img
                src="/path/to/your/image.jpg" // Replace with your image path
                alt="About Steel Space Design"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Transition gradient at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-metal-800 w-full"></div>
    </section>
  );
}