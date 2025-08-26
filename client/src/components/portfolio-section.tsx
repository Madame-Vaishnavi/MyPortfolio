import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PortfolioSection() {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "FOMO Fix Event Booking App",
      category: "Mobile App",
      title: "FOMO Fix - Event Booking App",
      description: "Comprehensive event booking mobile application with 95% booking success rate, built using Flutter and Spring Boot microservices.",
      technologies: ["Flutter", "Spring Boot", "Apache Kafka"]
    },
    {
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "SpeedSe Logistics App",
      category: "Full Stack",
      title: "SpeedSe Logistics - Truck Booking",
      description: "Cross-platform truck booking app serving 500+ concurrent users with real-time geolocation and 40% improved API response time.",
      technologies: ["Flutter", "Node.js", "Firebase"]
    },
    {
      image: "https://images.unsplash.com/photo-1422565096762-bdb997a56a84?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Pet Adoption System",
      category: "Backend",
      title: "Pet Adoption System",
      description: "Spring Boot-based pet adoption platform with role-based authentication, boosting adoption efficiency by 40%.",
      technologies: ["Spring Boot", "MySQL", "JPA"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex items-center mb-4">
            <span className="text-lavender-400 font-display text-sm font-medium mr-4" data-testid="section-number-003">003</span>
            <div className="h-px bg-lavender-200 flex-1"></div>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="portfolio-title">Featured Work</h2>
          <p className="text-xl text-gray-600 max-w-3xl" data-testid="portfolio-description">
            A selection of projects that showcase my approach to solving complex design challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-lavender-100"
              data-testid={`project-card-${index}`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.alt} 
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  data-testid={`project-image-${index}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span 
                    className="bg-lavender-100 text-lavender-700 px-3 py-1 rounded-full text-sm font-medium"
                    data-testid={`project-category-${index}`}
                  >
                    {project.category}
                  </span>
                  <ExternalLink className="text-lavender-400 group-hover:text-lavender-500 transition-colors h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-3" data-testid={`project-title-${index}`}>
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4" data-testid={`project-description-${index}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                      data-testid={`project-tech-${index}-${techIndex}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            className="bg-lavender-500 text-white px-8 py-4 rounded-lg hover:bg-lavender-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            data-testid="button-view-all-projects"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
