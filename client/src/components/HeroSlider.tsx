import { useSlider } from "@/hooks/use-slider";
import { useEffect, useRef } from "react";
import { Link } from "wouter";

type SlideContent = {
  backgroundImage: string;
  title: string;
  description: string;
  cta1Text: string;
  cta1Link: string;
  cta2Text: string;
  cta2Link: string;
};

const slides: SlideContent[] = [
  {
    backgroundImage: "http://res.cloudinary.com/ddygzamv4/image/upload/v1747648800/qkkkfdoroocyewiuttk6.png",
    title: "Shaping Future Leaders",
    description:
      "Poornima Institute of Engineering & Technology offers world-class education to create future innovators and leaders.",
    cta1Text: "Explore Programs",
    cta1Link: "/programs",
    cta2Text: "Virtual Tour",
    cta2Link: "/virtual-tour",
  },
  {
    backgroundImage: "https://res.cloudinary.com/ddygzamv4/image/upload/v1747648799/wtpxhkysf8xeghjg7uha.png",
    title: "Excellence in Education",
    description:
      "Discover state-of-the-art facilities and advanced curriculum designed for tomorrow's professionals.",
    cta1Text: "Apply Now",
    cta1Link: "/apply",
    cta2Text: "Learn More",
    cta2Link: "/about",
  },
  {
    backgroundImage: "/assets/images/naaca.png",
    title: "NAAC Accredited with Grade A",
    description:
      "We are proud to be recognized for our commitment to quality education and student success.",
    cta1Text: "Our Achievements",
    cta1Link: "/achievements",
    cta2Text: "Student Success",
    cta2Link: "/success-stories",
  },
];

export default function HeroSlider() {
  const { currentSlide, goToSlide, nextSlide, prevSlide } = useSlider({
    totalSlides: slides.length,
    autoPlayInterval: 6000,
  });

  const slideContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (slideContainerRef.current) {
      const slideHeight = window.innerWidth <= 768 ? "450px" : "650px";
      slideContainerRef.current.style.height = slideHeight;
    }
  }, []);

  return (
    <section className="hero-slider relative overflow-hidden">
      <div ref={slideContainerRef} className="slider-container h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide h-full bg-cover bg-center absolute inset-0 transition-all duration-1000 ${
              index === currentSlide
                ? "opacity-100 z-10 scale-100"
                : "opacity-0 z-0 scale-105"
            }`}
            style={{ backgroundImage: `url('${slide.backgroundImage}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-black/60 flex items-center">
              <div className="container mx-auto px-4 lg:px-0">
                <div className="max-w-2xl animate-fadeIn">
                  <h2 className="text-white font-heading font-bold text-3xl md:text-5xl mb-6 leading-tight drop-shadow-md">
                    {slide.title}
                  </h2>
                  <p className="text-white text-lg md:text-xl mb-8 drop-shadow-md">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href={slide.cta1Link}
                      className="btn-secondary rounded-lg shadow-md hover-lift"
                    >
                      {slide.cta1Text}
                    </Link>
                    <Link
                      href={slide.cta2Link}
                      className="btn-outline border-white text-white hover:bg-white hover:text-primary rounded-lg shadow-md"
                    >
                      {slide.cta2Text}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300"
          aria-label="Previous slide"
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300"
          aria-label="Next slide"
        >
          <i className="fas fa-chevron-right"></i>
        </button>

        {/* Slider Dots Navigation */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full focus:outline-none transition-all duration-300 ${
                index === currentSlide
                  ? "bg-secondary w-8"
                  : "bg-white/60 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
