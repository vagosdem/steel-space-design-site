
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="bg-white">
      <div className="container-section flex flex-col lg:flex-row lg:items-center lg:gap-12">
        <div className="lg:w-1/2 space-y-6 animate-fade-in">
          <h1 className="font-bold text-metal-900 leading-tight">
            Premium Metal Storage <br className="hidden sm:inline" />
            <span className="text-blue-600">Built to Last</span>
          </h1>
          <p className="text-lg md:text-xl text-metal-600 max-w-2xl text-pretty">
            Robust metal lockers and closets designed for both residential and commercial spaces. 
            Built with quality materials and meticulous craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button size="lg" className="text-base">Explore Products</Button>
            <Button size="lg" variant="outline" className="text-base">Request a Quote</Button>
          </div>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <div className="bg-metal-100 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1541623089466-8e46c03d4d27?auto=format&fit=crop&w=800&h=600" 
              alt="Premium metal lockers" 
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
