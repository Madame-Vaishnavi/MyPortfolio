import { Users, Calendar, Trophy } from "lucide-react";

export default function VoluntarySection() {
  const voluntaryExperiences = [
    {
      icon: Users,
      period: "Jan 2022 - Present",
      role: "Core Lead",
      organization: "Innogeeks",
      description: "Leading organizational efforts and mentoring students in AR/VR development, organizing national-level hackathons and tech events with 500+ participants.",
      achievements: [
        "Mentored 20+ students in AR/VR development using Unity3D and Vuforia",
        "Organized Innogeeks Winter of Code 2.0 & 3.0 and Innohacks 3.0",
        "Improved project execution efficiency by 30% through effective guidance"
      ],
      skills: ["Team Leadership", "Unity3D", "Vuforia", "Event Management"]
    },
    {
      icon: Calendar,
      period: "2023 - 2024",
      role: "Event Organizer",
      organization: "Innogeeks Winter of Code 2.0 & 3.0",
      description: "Organized and managed large-scale coding events promoting open-source contributions and skill development among students.",
      achievements: [
        "Successfully coordinated events with 300+ participants",
        "Managed mentor-student matching for effective learning",
        "Facilitated skill development workshops and coding sessions"
      ],
      skills: ["Event Management", "Project Coordination", "Community Building"]
    },
    {
      icon: Trophy,
      period: "2023",
      role: "Lead Organizer",
      organization: "Innohacks 3.0",
      description: "Spearheaded the organization of a national-level hackathon with participants from across India, managing logistics, judging, and overall event execution.",
      achievements: [
        "Coordinated national-level hackathon with 500+ participants",
        "Managed sponsorships and partnerships with tech companies",
        "Oversaw technical infrastructure and judging processes"
      ],
      skills: ["Hackathon Management", "Partnership Development", "Technical Coordination"]
    }
  ];

  return (
    <section id="voluntary" className="py-20 bg-gradient-to-br from-lavender-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex items-center mb-4">
            <span className="text-lavender-400 font-display text-sm font-medium mr-4" data-testid="section-number-005">005</span>
            <div className="h-px bg-lavender-200 flex-1"></div>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-6" data-testid="voluntary-title">Voluntary Experience</h2>
          <p className="text-lg text-gray-600 max-w-3xl" data-testid="voluntary-description">
            Leadership roles and community contributions through organizing tech events and mentoring
          </p>
        </div>

        <div className="space-y-8">
          {voluntaryExperiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-lavender-100" data-testid={`voluntary-card-${index}`}>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-lavender-100 rounded-2xl flex items-center justify-center">
                    <exp.icon className="text-lavender-500 h-8 w-8" data-testid={`voluntary-icon-${index}`} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-gray-900 mb-1" data-testid={`voluntary-role-${index}`}>
                        {exp.role}
                      </h3>
                      <p className="text-lavender-600 font-medium" data-testid={`voluntary-organization-${index}`}>
                        {exp.organization}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 mt-2 md:mt-0" data-testid={`voluntary-period-${index}`}>
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4" data-testid={`voluntary-description-${index}`}>
                    {exp.description}
                  </p>
                  <ul className="space-y-2 text-gray-600 mb-6">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start" data-testid={`voluntary-achievement-${index}-${achIndex}`}>
                        <div className="w-2 h-2 bg-lavender-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-lavender-100 text-lavender-700 px-3 py-1 rounded-full text-sm"
                        data-testid={`voluntary-skill-${index}-${skillIndex}`}
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