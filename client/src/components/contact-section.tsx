import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "vaishnavi.singh.260104@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone", 
      content: "+91 9794801617"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Delhi-NCR, India"
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "#", icon: "fab fa-linkedin" },
    { name: "GitHub", href: "#", icon: "fab fa-github" },
    { name: "Email", href: "mailto:vaishnavi.singh.260104@gmail.com", icon: "fas fa-envelope" }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex items-center mb-4">
            <span className="text-lavender-400 font-display text-sm font-medium mr-4" data-testid="section-number-006">006</span>
            <div className="h-px bg-lavender-200 flex-1"></div>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="contact-title">Let's Connect</h2>
          <p className="text-xl text-gray-600 max-w-3xl" data-testid="contact-description">
            Ready to bring your next project to life? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4" data-testid={`contact-info-${index}`}>
                  <div className="w-12 h-12 bg-lavender-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-lavender-500 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-gray-900 mb-1" data-testid={`contact-info-title-${index}`}>
                      {info.title}
                    </h3>
                    <p className="text-gray-600" data-testid={`contact-info-content-${index}`}>
                      {info.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="font-display text-lg font-semibold text-gray-900 mb-6" data-testid="social-title">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-lavender-100 rounded-2xl flex items-center justify-center hover:bg-lavender-200 transition-colors duration-200"
                    data-testid={`social-link-${index}`}
                  >
                    <i className={`${social.icon} text-lavender-500`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-lavender-50 to-white rounded-3xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-lavender-200 focus:border-lavender-500 focus:ring-2 focus:ring-lavender-200 transition-colors duration-200"
                    required
                    data-testid="input-firstName"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-lavender-200 focus:border-lavender-500 focus:ring-2 focus:ring-lavender-200 transition-colors duration-200"
                    required
                    data-testid="input-lastName"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-lavender-200 focus:border-lavender-500 focus:ring-2 focus:ring-lavender-200 transition-colors duration-200"
                  required
                  data-testid="input-email"
                />
              </div>
              <div>
                <Label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-lavender-200 focus:border-lavender-500 focus:ring-2 focus:ring-lavender-200 transition-colors duration-200"
                  required
                  data-testid="input-subject"
                />
              </div>
              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-lavender-200 focus:border-lavender-500 focus:ring-2 focus:ring-lavender-200 transition-colors duration-200 resize-none"
                  required
                  data-testid="textarea-message"
                />
              </div>
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-lavender-500 text-white py-4 rounded-xl hover:bg-lavender-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                data-testid="button-submit"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
