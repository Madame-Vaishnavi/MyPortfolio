import { Check, ExternalLink } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      period: "Apr 2025 - Present",
      role: "Full Stack Developer",
      company: "SpeedSe Logistics",
      companyLink: "https://play.google.com/store/apps/details?id=com.speedse.logistics",
      appStoreLink: "https://apps.apple.com/app/speedse-logistics/id123456789",
      description: "Developing and maintaining a cross-platform truck booking mobile app using Flutter and Dart for Android and iOS, serving 500+ concurrent users with optimized backend APIs.",
      achievements: [
        "Reduced API response time by 40% through Node.js and Express.js optimization",
        "Implemented real-time geolocation improving logistics accuracy by 25%",
        "Built WebSocket integration for real-time notifications using Firebase"
      ],
      skills: ["Flutter", "Node.js", "Firebase", "Google Maps API"]
    },
    {
      period: "Dec 2024 - Feb 2025",
      role: "Flutter Developer",
      company: "Bharat Yaatri",
      companyLink: "https://play.google.com/store/apps/details?id=com.bharatyaatri.taxi",
      description: "Engineered and deployed a cross-platform taxi service app using Flutter, Dart, and Firebase for Android and iOS, supporting thousands of concurrent users.",
      achievements: [
        "Reduced user interaction delays by 50% through optimized Flutter implementation",
        "Achieved sub-100ms response times with Node.js backend integration",
        "Decreased crash rates by 30% through improved state management"
      ],
      skills: ["Flutter", "Dart", "Firebase", "RESTful APIs"]
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
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-display text-2xl font-semibold text-gray-900" data-testid={`experience-company-${index}`}>
                      {exp.company}
                    </h3>
                    <div className="flex items-center gap-2">
                      {exp.companyLink && (
                        <a 
                          href={exp.companyLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-lavender-500 hover:text-lavender-600 transition-colors text-sm"
                          data-testid={`experience-company-link-${index}`}
                        >
                          <ExternalLink className="h-4 w-4" />
                          Play Store
                        </a>
                      )}
                      {exp.appStoreLink && (
                        <a 
                          href={exp.appStoreLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-lavender-500 hover:text-lavender-600 transition-colors text-sm"
                          data-testid={`experience-appstore-link-${index}`}
                        >
                          <ExternalLink className="h-4 w-4" />
                          App Store
                        </a>
                      )}
                    </div>
                  </div>
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
