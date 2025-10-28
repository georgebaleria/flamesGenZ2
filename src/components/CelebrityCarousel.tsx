import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const carouselImages = [
  { 
    src: "/responsive/carousel-1-md.webp",
    srcSet: "/responsive/carousel-1-sm.webp 400w, /responsive/carousel-1-md.webp 800w, /responsive/carousel-1-lg.webp 1200w",
    sizes: "(max-width: 768px) 400px, (max-width: 1024px) 800px, 1200px",
    alt: "Selena Gomez and Benny Blanco FLAMES compatibility test result showing Affection",
    title: "Celebrity FLAMES Check: Selena Gomez & Benny Blanco"
  },
  { 
    src: "/responsive/carousel-2-md.webp",
    srcSet: "/responsive/carousel-2-sm.webp 400w, /responsive/carousel-2-md.webp 800w, /responsive/carousel-2-lg.webp 1200w",
    sizes: "(max-width: 768px) 400px, (max-width: 1024px) 800px, 1200px",
    alt: "Prince William and Kate Middleton FLAMES love calculator result showing Friends",
    title: "Royal FLAMES Check: Prince William & Kate Middleton"
  },
  { 
    src: "/responsive/carousel-3-md.webp",
    srcSet: "/responsive/carousel-3-sm.webp 400w, /responsive/carousel-3-md.webp 800w, /responsive/carousel-3-lg.webp 1200w",
    sizes: "(max-width: 768px) 400px, (max-width: 1024px) 800px, 1200px",
    alt: "Taylor Swift and Travis Kelce FLAMES relationship test result showing Lovers",
    title: "Celebrity FLAMES Check: Taylor Swift & Travis Kelce"
  },
  { 
    src: "/responsive/carousel-4-md.webp",
    srcSet: "/responsive/carousel-4-sm.webp 400w, /responsive/carousel-4-md.webp 800w, /responsive/carousel-4-lg.webp 1200w",
    sizes: "(max-width: 768px) 400px, (max-width: 1024px) 800px, 1200px",
    alt: "Beyoncé and Jay-Z FLAMES compatibility calculator result showing Affection",
    title: "Power Couple FLAMES Check: Beyoncé & Jay-Z"
  },
  { 
    src: "/responsive/carousel-5-md.webp",
    srcSet: "/responsive/carousel-5-sm.webp 400w, /responsive/carousel-5-md.webp 800w, /responsive/carousel-5-lg.webp 1200w",
    sizes: "(max-width: 768px) 400px, (max-width: 1024px) 800px, 1200px",
    alt: "Rihanna and ASAP Rocky FLAMES love test result showing Enemies",
    title: "Celebrity FLAMES Check: Rihanna & ASAP Rocky"
  },
  { 
    src: "/responsive/carousel-6-md.webp",
    srcSet: "/responsive/carousel-6-sm.webp 400w, /responsive/carousel-6-md.webp 800w, /responsive/carousel-6-lg.webp 1200w",
    sizes: "(max-width: 768px) 400px, (max-width: 1024px) 800px, 1200px",
    alt: "Justin Bieber and Hailey Baldwin FLAMES relationship calculator result showing Marriage",
    title: "Celebrity FLAMES Check: Justin Bieber & Hailey Baldwin"
  },
  { 
    src: "/responsive/carousel-7-md.webp",
    srcSet: "/responsive/carousel-7-sm.webp 400w, /responsive/carousel-7-md.webp 800w, /responsive/carousel-7-lg.webp 1200w",
    sizes: "(max-width: 768px) 400px, (max-width: 1024px) 800px, 1200px",
    alt: "Shawn Mendes and Sabrina Carpenter FLAMES compatibility test result showing Marriage",
    title: "Celebrity FLAMES Check: Shawn Mendes & Sabrina Carpenter"
  },
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
                      srcSet={image.srcSet}
                      sizes={image.sizes}
                      alt={image.alt}
                      title={image.title}
                      className="w-full h-auto object-contain"
                      loading="lazy"
                      decoding="async"
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
