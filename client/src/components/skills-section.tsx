import { Palette, Code, Lightbulb } from "lucide-react";

export default function SkillsSection() {
  const skills = [
    {
      icon: Code,
      title: "Mobile Development",
      description: "Cross-platform mobile apps with Flutter and Dart",
      tools: ["Flutter", "Dart", "Android", "iOS"]
    },
    {
      icon: Lightbulb,
      title: "Backend Development", 
      description: "Scalable APIs and microservices architecture",
      tools: ["Spring Boot", "Node.js", "Express.js", "RESTful APIs"]
    },
    {
      icon: Palette,
      title: "Database & Cloud",
      description: "Database optimization and cloud integration",
      tools: ["MySQL", "PostgreSQL", "MongoDB", "Supabase", "Firebase"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-lavender-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex items-center mb-4">
            <span className="text-lavender-400 font-display text-sm font-medium mr-4" data-testid="section-number-002">002</span>
            <div className="h-px bg-lavender-200 flex-1"></div>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="skills-title">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl" data-testid="skills-description">
            A comprehensive toolkit honed through years of practice and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-lavender-100"
              data-testid={`skill-card-${index}`}
            >
              <div className="mb-6">
                <skill.icon className="text-lavender-500 text-3xl mb-4 h-8 w-8" data-testid={`skill-icon-${index}`} />
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-2" data-testid={`skill-title-${index}`}>
                  {skill.title}
                </h3>
                <p className="text-gray-600 text-sm" data-testid={`skill-description-${index}`}>
                  {skill.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.tools.map((tool, toolIndex) => (
                  <span 
                    key={toolIndex}
                    className="bg-lavender-100 text-lavender-700 px-3 py-1 rounded-full text-sm font-medium"
                    data-testid={`tool-tag-${index}-${toolIndex}`}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
