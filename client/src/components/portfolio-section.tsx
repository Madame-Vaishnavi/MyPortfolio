import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PortfolioSection() {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "FOMO Fix Event Booking App",
      category: "Mobile App",
      title: "FOMO Fix - Event Booking Mobile App",
      description: "Comprehensive event booking mobile application with 95% booking success rate. Built microservices-based backend with Spring Boot and Apache Kafka for event-driven messaging achieving 99.2% system uptime.",
      technologies: ["Flutter", "Spring Boot", "Apache Kafka", "SMTP"],
      link: "#",
      period: "Jun 2025 – Aug 2025"
    },
    {
      image: "https://images.unsplash.com/photo-1422565096762-bdb997a56a84?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Pet Adoption System",
      category: "Backend",
      title: "Pet Adoption System – Spring Boot App",
      description: "Architected a Spring Boot-based pet adoption platform with role-based authentication, boosting adoption efficiency by 40%. Streamlined database performance using JPA, Hibernate, and MySQL.",
      technologies: ["Spring Boot", "MySQL", "JPA", "Hibernate"],
      link: "#",
      period: "Jan 2025 – Mar 2025"
    },
    {
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Job Listing Platform",
      category: "Full Stack",
      title: "Job Listing Platform",
      description: "Engineered a scalable job listing platform with Spring Boot and MongoDB, cutting job search time by 35%. Enhanced system performance by 25% through efficient indexing, caching, and RESTful APIs.",
      technologies: ["Spring Boot", "MongoDB", "RESTful APIs", "Caching"],
      link: "#",
      period: "Nov 2024 – Jan 2025"
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
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500" data-testid={`project-period-${index}`}>
                      {project.period}
                    </span>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="text-lavender-400 hover:text-lavender-500 transition-colors h-5 w-5" />
                    </a>
                  </div>
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
