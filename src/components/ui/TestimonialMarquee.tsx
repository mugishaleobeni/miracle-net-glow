import React from 'react';

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "IT Director at TechCorp",
    content: "Miracle's network optimization reduced our downtime by 90%. Exceptional technical skills and professionalism.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b375?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Michael Chen",
    title: "CTO at DataFlow Solutions",
    content: "Outstanding firewall configuration and security implementation. Highly recommend for network infrastructure projects.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Emily Rodriguez",
    title: "Network Administrator",
    content: "Collaborated on campus network design. Miracle's expertise in Cisco technologies is impressive and reliable.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "David Park",
    title: "Cybersecurity Specialist",
    content: "Excellent work on VPN setup and security monitoring. Great attention to detail and system documentation.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Lisa Thompson",
    title: "Systems Engineer",
    content: "Professional Linux server deployment and maintenance. Quick problem-solving and excellent communication.",
    avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Ahmed Hassan",
    title: "Cloud Solutions Architect",
    content: "Seamless cloud integration and virtualization expertise. Miracle delivered beyond our expectations.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  }
];

const TestimonialMarquee: React.FC = () => {
  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-transparent via-white/5 to-transparent py-8">
      <div className="flex animate-marquee space-x-6">
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-72 glass-card p-6 hover-scale"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={testimonial.avatar}
                alt={`${testimonial.name} - ${testimonial.title}`}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/30 flex-shrink-0"
              />
              <div className="min-w-0 flex-1">
                <h4 className="text-white font-semibold text-sm truncate">{testimonial.name}</h4>
                <p className="text-xs text-gray-400 truncate">{testimonial.title}</p>
              </div>
            </div>
            <p className="text-gray-300 text-xs leading-relaxed line-clamp-4">
              "{testimonial.content}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialMarquee;