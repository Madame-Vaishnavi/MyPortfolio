import { Check } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      period: "2022 - Present",
      role: "Senior UX Designer",
      company: "TechFlow Solutions",
      description: "Leading design initiatives for enterprise software solutions, focusing on user experience optimization and design system development. Collaborating with cross-functional teams to deliver scalable design solutions.",
      achievements: [
        "Increased user engagement by 45% through redesigned dashboard interface",
        "Built comprehensive design system used across 5+ product teams",
        "Mentored 3 junior designers in UX best practices and design thinking"
      ],
      skills: ["Design Systems", "User Research", "Team Leadership"]
    },
    {
      period: "2020 - 2022",
      role: "UX Designer",
      company: "Digital Innovations Inc",
      description: "Focused on mobile app design and user interface development for consumer-facing applications. Specialized in creating intuitive user experiences for diverse user demographics.",
      achievements: [
        "Designed mobile app with 4.8-star rating and 100K+ downloads",
        "Conducted user testing sessions that improved conversion by 30%"
      ],
      skills: ["Mobile Design", "Prototyping", "User Testing"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-lavender-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex items-center mb-4">
            <span className="text-lavender-400 font-display text-sm font-medium mr-4" data-testid="section-number-004">004</span>
            <div className="h-px bg-lavender-200 flex-1"></div>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="experience-title">Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl" data-testid="experience-description">
            Building expertise through diverse roles and challenging projects
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 group" data-testid={`experience-card-${index}`}>
              <div className="md:w-1/4">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-lavender-100 group-hover:shadow-lg transition-all duration-300">
                  <div className="w-8 h-8 bg-lavender-500 rounded-full mb-4"></div>
                  <div className="text-lavender-500 font-medium text-sm mb-1" data-testid={`experience-period-${index}`}>
                    {exp.period}
                  </div>
                  <div className="text-gray-900 font-semibold" data-testid={`experience-role-${index}`}>
                    {exp.role}
                  </div>
                </div>
              </div>
              <div className="md:w-3/4">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-lavender-100 group-hover:shadow-lg transition-all duration-300">
                  <h3 className="font-display text-2xl font-semibold text-gray-900 mb-3" data-testid={`experience-company-${index}`}>
                    {exp.company}
                  </h3>
                  <p className="text-gray-600 mb-4" data-testid={`experience-description-${index}`}>
                    {exp.description}
                  </p>
                  <ul className="space-y-2 text-gray-600 mb-6">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start" data-testid={`achievement-${index}-${achIndex}`}>
                        <Check className="text-lavender-500 mt-1.5 mr-3 text-sm h-4 w-4 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-lavender-100 text-lavender-700 px-3 py-1 rounded-full text-sm"
                        data-testid={`experience-skill-${index}-${skillIndex}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
