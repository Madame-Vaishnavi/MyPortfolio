export default function AboutSection() {
  const tags = ["Flutter Development", "Spring Boot", "Full Stack Development", "Mobile Apps", "Backend APIs"];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex items-center mb-4">
            <span className="text-lavender-400 font-display text-sm font-medium mr-4" data-testid="section-number-001">001</span>
            <div className="h-px bg-lavender-200 flex-1"></div>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="about-title">About Me</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-display text-2xl font-semibold text-gray-900 mb-6" data-testid="about-subtitle">
              Building scalable mobile and web applications with modern technologies
            </h3>
            <p className="text-lg text-gray-600 mb-6" data-testid="about-description-1">
              I'm a Computer Science student specializing in AI/ML with hands-on experience in full-stack development. Currently pursuing B.Tech from KIET Group of Institutions with a CGPA of 8.1, I've worked on real-world applications serving thousands of users.
            </p>
            <p className="text-lg text-gray-600 mb-8" data-testid="about-description-2">
              As Core Lead at Innogeeks, I mentor 20+ students in AR/VR development and have led major tech events. I'm passionate about creating efficient, user-friendly applications and have won multiple hackathons including 1st place at HACKBLOCKS 1.0.
            </p>
            <div className="flex flex-wrap gap-3">
              {tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-lavender-100 text-lavender-700 px-4 py-2 rounded-full text-sm font-medium"
                  data-testid={`tag-${index}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="Creative workspace setup" 
              className="w-full rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 object-cover h-80"
              data-testid="about-image-1"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-lavender-100 rounded-2xl rotate-12 shadow-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
