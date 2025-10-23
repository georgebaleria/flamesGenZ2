import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import carousel1 from "@/assets/carousel-1.png";
import carousel2 from "@/assets/carousel-2.png";
import carousel3 from "@/assets/carousel-3.png";
import carousel4 from "@/assets/carousel-4.png";
import carousel5 from "@/assets/carousel-5.png";
import carousel6 from "@/assets/carousel-6.png";
import carousel7 from "@/assets/carousel-7.png";

const carouselImages = [
  { src: carousel1, alt: "Selena Gomez & Benny Blanco - Affection" },
  { src: carousel2, alt: "Prince William & Kate Middleton - Friends" },
  { src: carousel3, alt: "Taylor Swift & Travis Kelce - Lovers" },
  { src: carousel4, alt: "Beyoncé & Jay-Z - Affection" },
  { src: carousel5, alt: "Rihanna & ASAP Rocky - Enemies" },
  { src: carousel6, alt: "Justin Bieber & Hailey Baldwin - Marriage" },
  { src: carousel7, alt: "Shawn Mendes & Sabrina Carpenter - Marriage" },
];

export const CelebrityCarousel = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Celebrity Flames Checks
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what the FLAMES say about your favorite celebrity couples
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {carouselImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <div className="rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};
