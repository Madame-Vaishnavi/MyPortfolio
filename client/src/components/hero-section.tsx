import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-lavender-100 via-white to-lavender-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" 
            alt="Professional headshot" 
            className="w-32 h-32 rounded-full mx-auto shadow-2xl border-4 border-white object-cover"
            data-testid="hero-image"
          />
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Creative <span className="text-lavender-500">Professional</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Crafting digital experiences that inspire and engage. Specializing in modern design solutions that bridge creativity and functionality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => scrollToSection("portfolio")}
            className="bg-lavender-500 text-white px-8 py-4 rounded-lg hover:bg-lavender-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            data-testid="button-view-work"
          >
            View My Work
          </Button>
          <Button 
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="border-2 border-lavender-500 text-lavender-500 px-8 py-4 rounded-lg hover:bg-lavender-50 transition-all duration-200"
            data-testid="button-contact"
          >
            Get In Touch
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <ChevronDown className="text-lavender-400 text-2xl h-8 w-8" />
        </div>
      </div>
    </section>
  );
}
