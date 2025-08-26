import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4 animate-fadeIn">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-0.5 bg-lavender-400"></div>
              <span className="text-lavender-400 font-medium uppercase tracking-wider text-sm">
                Get In Touch
              </span>
              <div className="w-12 h-0.5 bg-lavender-400"></div>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to create scalable applications? I'd love to discuss your project and explore how we can collaborate to build innovative solutions.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-slideInFromRight">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-lavender-100 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-lavender-500" />
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600" data-testid="contact-email">
                    vaishnavi.singh.260104@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-lavender-100 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-lavender-500" />
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600" data-testid="contact-phone">
                    +91 9794801617
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-lavender-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-lavender-500" />
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-600" data-testid="contact-location">
                    Delhi-NCR, India
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-lavender-200">
              <h4 className="font-semibold text-gray-900 mb-6">Connect With Me</h4>
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://www.linkedin.com/in/vaishnavi-singh-945827257/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-lavender-100 hover:bg-lavender-200 rounded-full flex items-center justify-center transition-colors duration-300"
                  data-testid="social-linkedin"
                >
                  <Linkedin className="w-5 h-5 text-lavender-500" />
                </a>
                <a 
                  href="https://github.com/Madame-Vaishnavi" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-lavender-100 hover:bg-lavender-200 rounded-full flex items-center justify-center transition-colors duration-300"
                  data-testid="social-github"
                >
                  <Github className="w-5 h-5 text-lavender-500" />
                </a>
                <a 
                  href="https://leetcode.com/u/user2130U/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-lavender-100 hover:bg-lavender-200 rounded-full flex items-center justify-center transition-colors duration-300"
                  data-testid="social-leetcode"
                >
                  <svg className="w-5 h-5 fill-lavender-500" viewBox="0 0 24 24">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                  </svg>
                </a>
                <a 
                  href="mailto:vaishnavi.singh.260104@gmail.com" 
                  className="w-12 h-12 bg-lavender-100 hover:bg-lavender-200 rounded-full flex items-center justify-center transition-colors duration-300"
                  data-testid="social-email"
                >
                  <Mail className="w-5 h-5 text-lavender-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}