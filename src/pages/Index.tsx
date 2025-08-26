import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faNetworkWired, 
  faDesktop, 
  faShield, 
  faWifi, 
  faLock, 
  faTools, 
  faServer,
  faCloud, 
  faChartLine,
  faDownload,
  faEnvelope,
  faCube
} from '@fortawesome/free-solid-svg-icons';
import SplitText from '../components/ui/SplitText';
import TextType from '../components/ui/TextType';
import TestimonialMarquee from '../components/ui/TestimonialMarquee';

const Index: React.FC = () => {
  const skills = [
    { icon: faNetworkWired, title: 'Networking Fundamentals', desc: 'TCP/IP, DNS, DHCP' },
    { icon: faDesktop, title: 'Cisco Technologies', desc: 'Packet Tracer, Routing & Switching' },
    { icon: faShield, title: 'Network Security', desc: 'Firewalls, VPNs, IDS/IPS' },
    { icon: faWifi, title: 'Wireless Networking', desc: 'Wi-Fi Setup & Optimization' },
    { icon: faLock, title: 'Cybersecurity', desc: 'Security Protocols & Monitoring' },
    { icon: faTools, title: 'IT Support', desc: 'Hardware & Software Troubleshooting' },
    { icon: faServer, title: 'Linux Administration', desc: 'Server Setup & Management' },
    { icon: faCloud, title: 'Cloud Platforms', desc: 'AWS, Azure, GCP Basics' },
    { icon: faCube, title: 'Virtualization', desc: 'VMware, VirtualBox' },
    { icon: faChartLine, title: 'Monitoring Tools', desc: 'Wireshark, Nagios' }
  ];

  const achievements = [
    { icon: faNetworkWired, number: '10+', title: 'Networking Labs Completed' },
    { icon: faShield, number: '3', title: 'Cybersecurity Challenges Solved' },
    { icon: faTools, number: '5+', title: 'IT Support Projects Done' },
    { icon: faLock, number: '4', title: 'Certifications in Progress' }
  ];

  const projects = [
    {
      title: 'Campus Network Design',
      description: 'Comprehensive network topology design for educational institution using Cisco Packet Tracer.',
      tools: 'Cisco Packet Tracer, Wireshark',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop'
    },
    {
      title: 'Firewall Security Setup',
      description: 'Advanced firewall configuration and security policy implementation for enterprise network.',
      tools: 'pfSense, Cisco ASA',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop'
    },
    {
      title: 'Linux Server Deployment',
      description: 'Complete Linux server setup with web services, SSH configuration, and security hardening.',
      tools: 'Ubuntu Server, SSH, Apache',
      image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&h=400&fit=crop'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
          <div className="glass-card p-12 mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <SplitText text="Miracle" className="gradient-text" />
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-4">
              Networking Specialist | IT Enthusiast
            </h2>
            <div className="text-lg md:text-xl text-gray-400 mb-8 min-h-[2em]">
              <TextType 
                text="Building connected, secure, and efficient systems for tomorrow."
                speed={80}
                delay={2000}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/resume" 
                className="glass-button px-8 py-4 rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300 hover-scale"
              >
                <FontAwesomeIcon icon={faDownload} className="mr-2" />
                View Resume
              </Link>
              <Link 
                to="/contact" 
                className="glass-button px-8 py-4 rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300 hover-scale"
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card p-8 text-center" data-aos="fade-up">
            <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-primary/30 glow-primary">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Miracle - Networking Specialist"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold gradient-text-secondary mb-4">About Miracle</h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
              I'm a networking student passionate about secure systems, IT infrastructure, and modern connectivity solutions. 
              My focus is on building robust, scalable networks that empower organizations in the digital era.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Showcase */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12" data-aos="fade-up">
            Technical Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="glass-card p-6 text-center hover-scale glow-primary"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <FontAwesomeIcon icon={skill.icon} className="text-3xl text-primary mb-4" />
                <h4 className="text-white font-semibold mb-2">{skill.title}</h4>
                <p className="text-gray-400 text-sm">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12" data-aos="fade-up">
            Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="glass-card p-8 text-center hover-scale pulse-glow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <FontAwesomeIcon icon={achievement.icon} className="text-4xl text-accent mb-4" />
                <div className="text-3xl font-bold gradient-text-secondary mb-2">{achievement.number}</div>
                <p className="text-gray-300 text-sm">{achievement.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12" data-aos="fade-up">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="glass-card overflow-hidden hover-scale"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <p className="text-xs text-gray-400 mb-4">Tools: {project.tools}</p>
                  <Link 
                    to="/projects"
                    className="glass-button px-4 py-2 rounded-lg text-sm font-medium text-white hover:shadow-lg transition-all duration-300"
                  >
                    View Full Project
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <div className="glass-card p-12">
            <h3 className="text-3xl font-bold gradient-text mb-6">Ready to Connect?</h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Let's work together to build secure, reliable, and innovative network solutions for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="glass-button px-8 py-4 rounded-xl font-semibold text-white hover:shadow-xl transition-all duration-300 hover-scale glow-primary"
              >
                Hire Me
              </Link>
              <Link 
                to="/services" 
                className="glass-button px-8 py-4 rounded-xl font-semibold text-white hover:shadow-xl transition-all duration-300 hover-scale glow-accent"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12" data-aos="fade-up">
            What Clients Say
          </h3>
        </div>
        <TestimonialMarquee />
      </section>
    </div>
  );
};

export default Index;