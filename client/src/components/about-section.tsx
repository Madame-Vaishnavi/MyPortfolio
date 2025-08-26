export default function AboutSection() {
  const tags = ["UI/UX Design", "Frontend Development", "Brand Strategy"];

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
              Building digital experiences with purpose and passion
            </h3>
            <p className="text-lg text-gray-600 mb-6" data-testid="about-description-1">
              With over 5 years of experience in digital design and development, I specialize in creating user-centered solutions that solve real problems. My approach combines strategic thinking with creative execution to deliver exceptional results.
            </p>
            <p className="text-lg text-gray-600 mb-8" data-testid="about-description-2">
              I believe in the power of collaboration and continuous learning. When I'm not designing, you'll find me exploring new technologies, mentoring junior designers, or contributing to open-source projects.
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
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500" 
              alt="Creative workspace setup" 
              className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 object-cover h-64"
              data-testid="about-image-1"
            />
            <img 
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="Design process sketches" 
              className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 mt-8 object-cover h-48"
              data-testid="about-image-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
