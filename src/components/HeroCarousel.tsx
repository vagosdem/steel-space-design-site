
import { useState, useEffect, useRef, TouchEvent } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeroCarouselProps {
  images: string[];
}

export default function HeroCarousel({ images }: HeroCarouselProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const isMobile = useIsMobile();
  const carouselRef = useRef<HTMLDivElement>(null);

  // Navigate to previous image
  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  // Navigate to next image
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div 
      ref={carouselRef}
      className="md:w-1/2 relative h-[300px] sm:h-[400px] w-full"
      onTouchStart={(e: TouchEvent<HTMLDivElement>) => {
        const touchStartX = e.touches[0].clientX;
        (e.currentTarget as any).touchStartX = touchStartX;
      }}
      onTouchMove={(e: TouchEvent<HTMLDivElement>) => {
        const touchEndX = e.touches[0].clientX;
        (e.currentTarget as any).touchEndX = touchEndX;
      }}
      onTouchEnd={(e: TouchEvent<HTMLDivElement>) => {
        const touchStartX = (e.currentTarget as any).touchStartX;
        const touchEndX = (e.currentTarget as any).touchEndX;
        const difference = touchStartX - touchEndX;
        
        if (Math.abs(difference) > 50) {
          if (difference > 0) {
            setCurrentImage((prev) => (prev + 1) % images.length);
          } else {
            setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
          }
        }
      }}
    >
      {/* Navigation arrows */}
      <button 
        onClick={() => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)} 
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 p-2 rounded-full shadow-md transition-all"
        aria-label="Previous image"
      >
        <ArrowLeft size={24} />
      </button>
      
      <button 
        onClick={() => setCurrentImage((prev) => (prev + 1) % images.length)} 
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 p-2 rounded-full shadow-md transition-all"
        aria-label="Next image"
      >
        <ArrowRight size={24} />
      </button>
      
      {/* Images */}
      {images.map((image, index) => (
        <img 
          key={index}
          src={image} 
          alt={`Product showcase ${index + 1}`} 
          className={`w-full h-auto object-contain mx-auto rounded-2xl p-0 absolute top-0 left-0 ${
            currentImage === index ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000`}
          style={{ maxHeight: isMobile ? "300px" : "400px" }}
        />
      ))}
      
      {/* Indicators */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full ${currentImage === index ? 'bg-blue-600' : 'bg-gray-300'}`}
            onClick={() => setCurrentImage(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
