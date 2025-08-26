import { Palette, Code, Lightbulb } from "lucide-react";

export default function SkillsSection() {
  const skills = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user experiences",
      tools: [
        { name: "Figma", percentage: 95 },
        { name: "Adobe XD", percentage: 90 }
      ]
    },
    {
      icon: Code,
      title: "Frontend Development", 
      description: "Building responsive and interactive interfaces",
      tools: [
        { name: "React", percentage: 88 },
        { name: "JavaScript", percentage: 85 }
      ]
    },
    {
      icon: Lightbulb,
      title: "Brand Strategy",
      description: "Developing cohesive brand identities",
      tools: [
        { name: "Brand Development", percentage: 92 },
        { name: "Visual Identity", percentage: 90 }
      ]
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
              <div className="space-y-3">
                {skill.tools.map((tool, toolIndex) => (
                  <div key={toolIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700" data-testid={`tool-name-${index}-${toolIndex}`}>
                        {tool.name}
                      </span>
                      <span className="text-sm text-lavender-500" data-testid={`tool-percentage-${index}-${toolIndex}`}>
                        {tool.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-lavender-100 rounded-full h-2">
                      <div 
                        className="bg-lavender-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${tool.percentage}%` }}
                        data-testid={`progress-bar-${index}-${toolIndex}`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
