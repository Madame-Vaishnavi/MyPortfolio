import { Trophy, Award, Star } from "lucide-react";

export default function AchievementsSection() {
  const achievements = [
    {
      icon: Trophy,
      title: "1st Place - HACKBLOCKS 1.0",
      organization: "BVP, Delhi & Microsoft",
      description: "Ranked 1st out of 100 teams in this prestigious hackathon",
      color: "text-yellow-500"
    },
    {
      icon: Award,
      title: "3rd Place - ACE HACKS 3.0",
      organization: "UEM, Jaipur & Rajasthan Police",
      description: "Secured 3rd position among 150 competing teams",
      color: "text-orange-500"
    },
    {
      icon: Star,
      title: "Spring Boot 3 Certification",
      organization: "Professional Certification",
      description: "Comprehensive certification covering Spring Framework and backend fundamentals",
      color: "text-green-500"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex items-center mb-4">
            <span className="text-lavender-400 font-display text-sm font-medium mr-4" data-testid="section-number-005">005</span>
            <div className="h-px bg-lavender-200 flex-1"></div>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="achievements-title">Achievements & Certifications</h2>
          <p className="text-xl text-gray-600 max-w-3xl" data-testid="achievements-description">
            Recognition for technical excellence and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-lavender-50 to-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-lavender-100 group"
              data-testid={`achievement-card-${index}`}
            >
              <div className="mb-6">
                <achievement.icon className={`${achievement.color} text-4xl mb-4 h-10 w-10 group-hover:scale-110 transition-transform duration-300`} data-testid={`achievement-icon-${index}`} />
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-2" data-testid={`achievement-title-${index}`}>
                  {achievement.title}
                </h3>
                <p className="text-lavender-600 font-medium text-sm mb-3" data-testid={`achievement-organization-${index}`}>
                  {achievement.organization}
                </p>
                <p className="text-gray-600 text-sm" data-testid={`achievement-description-${index}`}>
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}