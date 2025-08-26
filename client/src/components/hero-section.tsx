import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "../assets/profile-photo.jpg";

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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-lavender-500">Full Stack</span> Developer
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Full Stack Developer specializing in Flutter, Spring Boot, and scalable mobile applications. Passionate about creating innovative solutions that enhance user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={profilePhoto} 
                alt="Vaishnavi Singh - Professional headshot" 
                className="w-80 h-96 rounded-3xl shadow-2xl border-4 border-white object-cover hover:shadow-3xl transition-all duration-300"
                data-testid="hero-image"
              />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-lavender-200 rounded-2xl rotate-12 -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-lavender-100 rounded-full -z-10"></div>
            </div>
          </div>
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
