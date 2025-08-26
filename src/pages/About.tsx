import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faNetworkWired, 
  faShield, 
  faCloud, 
  faServer,
  faHandshake,
  faBrain,
  faComments,
  faClock,
  faLightbulb,
  faBullseye,
  faGraduationCap,
  faCertificate,
  faProjectDiagram,
  faGlobe,
  faDownload,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const competencies = [
    {
      icon: faNetworkWired,
      title: 'Network Design & Implementation',
      description: 'LAN, WAN, VLANs, Network Topologies, Infrastructure Planning'
    },
    {
      icon: faProjectDiagram,
      title: 'Routing & Switching',
      description: 'Cisco Packet Tracer, Router Configuration, Switch Management'
    },
    {
      icon: faShield,
      title: 'Network Security',
      description: 'Firewalls, VPNs, IDS/IPS, Access Control, Security Policies'
    },
    {
      icon: faCloud,
      title: 'Cloud & Virtualization',
      description: 'AWS, Azure, VMware, VirtualBox, Hybrid Networks'
    },
    {
      icon: faServer,
      title: 'Linux & Server Administration',
      description: 'System Setup, User Management, Service Configuration'
    }
  ];

  const softSkills = [
    { icon: faHandshake, title: 'Teamwork & Collaboration' },
    { icon: faBrain, title: 'Problem Solving' },
    { icon: faComments, title: 'Communication Skills' },
    { icon: faClock, title: 'Time Management' },
    { icon: faLightbulb, title: 'Critical Thinking' },
    { icon: faBullseye, title: 'Attention to Detail' }
  ];

  const highlights = [
    {
      icon: faGraduationCap,
      title: 'Education',
      description: 'Pursuing advanced studies in Networking & IT Infrastructure'
    },
    {
      icon: faCertificate,
      title: 'Certifications',
      description: 'CCNA, CompTIA Network+, Cybersecurity Fundamentals'
    },
    {
      icon: faProjectDiagram,
      title: 'Key Projects',
      description: 'Campus Network Design, Security Implementation, Server Deployment'
    },
    {
      icon: faGlobe,
      title: 'Career Goals',
      description: 'Becoming a Certified Network Engineer & Cybersecurity Expert'
    }
  ];

  const values = [
    'Security', 'Reliability', 'Innovation', 'Scalability', 'Collaboration'
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Header Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">About Miracle</h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              I am Miracle, a passionate networking student with a strong foundation in IT infrastructure, 
              network security, and system administration. My focus is on building secure, reliable, and 
              scalable networks that empower organizations in the digital era.
            </p>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12" data-aos="fade-up">
            Core Competencies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competencies.map((competency, index) => (
              <div 
                key={index}
                className="glass-card p-6 hover-scale glow-primary"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <FontAwesomeIcon icon={competency.icon} className="text-3xl text-primary mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{competency.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{competency.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12" data-aos="fade-up">
            Soft Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {softSkills.map((skill, index) => (
              <div 
                key={index}
                className="glass-card p-6 text-center hover-scale"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <FontAwesomeIcon icon={skill.icon} className="text-2xl text-accent mb-3" />
                <p className="text-white text-sm font-medium">{skill.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Highlights */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12" data-aos="fade-up">
            Professional Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="glass-card p-8 hover-scale"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <FontAwesomeIcon icon={highlight.icon} className="text-4xl text-primary mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{highlight.title}</h3>
                <p className="text-gray-300 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Vision */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Professional Values */}
            <div className="glass-card p-8" data-aos="fade-right">
              <h2 className="text-2xl font-bold gradient-text-secondary mb-6">Professional Values</h2>
              <div className="flex flex-wrap gap-3">
                {values.map((value, index) => (
                  <span 
                    key={index}
                    className="glass-button px-4 py-2 rounded-full text-sm font-medium text-white"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>

            {/* Vision */}
            <div className="glass-card p-8" data-aos="fade-left">
              <h2 className="text-2xl font-bold gradient-text-secondary mb-6">Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                My goal is to become a networking expert who designs secure, scalable, and future-ready 
                infrastructures that connect people and businesses worldwide. I believe in continuous learning 
                and staying at the forefront of emerging technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold gradient-text mb-6">Let's Build Something Amazing</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Ready to collaborate on your next network infrastructure project? 
              Let's connect and create secure, scalable solutions together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/resume" 
                className="glass-button px-8 py-4 rounded-xl font-semibold text-white hover:shadow-xl transition-all duration-300 hover-scale glow-primary"
              >
                <FontAwesomeIcon icon={faDownload} className="mr-2" />
                Download Resume
              </Link>
              <Link 
                to="/contact" 
                className="glass-button px-8 py-4 rounded-xl font-semibold text-white hover:shadow-xl transition-all duration-300 hover-scale glow-accent"
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;