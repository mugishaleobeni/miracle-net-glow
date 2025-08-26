import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faNetworkWired, 
  faShield, 
  faServer, 
  faWifi, 
  faCloud,
  faFilter,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'LAN/WAN', 'Security', 'Cloud', 'Wireless'];

  const projects = [
    {
      id: 1,
      title: 'Campus Network Design',
      category: 'LAN/WAN',
      description: 'Comprehensive network topology design for educational institution featuring redundant links, VLAN segmentation, and optimized routing protocols.',
      tools: 'Cisco Packet Tracer, Wireshark, Network Documentation',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      features: ['Multi-layer network architecture', 'VLAN implementation', 'Redundancy planning', 'Performance optimization'],
      icon: faNetworkWired
    },
    {
      id: 2,
      title: 'Firewall Security Setup',
      category: 'Security',
      description: 'Advanced firewall configuration and security policy implementation for enterprise network with intrusion detection and prevention systems.',
      tools: 'pfSense, Cisco ASA, Security Monitoring Tools',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      features: ['Multi-zone security', 'IDS/IPS configuration', 'Traffic analysis', 'Threat monitoring'],
      icon: faShield
    },
    {
      id: 3,
      title: 'Linux Server Deployment',
      category: 'Server',
      description: 'Complete Linux server setup with web services, SSH configuration, security hardening, and automated backup systems.',
      tools: 'Ubuntu Server, SSH, Apache, MySQL, SSL/TLS',
      image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=600&fit=crop',
      features: ['Service configuration', 'Security hardening', 'Automated backups', 'Performance monitoring'],
      icon: faServer
    },
    {
      id: 4,
      title: 'Wireless Network Optimization',
      category: 'Wireless',
      description: 'Wi-Fi network design and optimization for large office building with coverage analysis, interference mitigation, and security implementation.',
      tools: 'NetSpot, Wireshark, Wireless Controllers',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop',
      features: ['Coverage heatmap analysis', 'Interference reduction', 'Security protocols', 'Performance optimization'],
      icon: faWifi
    },
    {
      id: 5,
      title: 'Network Monitoring Dashboard',
      category: 'Monitoring',
      description: 'Comprehensive network monitoring system with real-time alerts, performance metrics, and automated reporting capabilities.',
      tools: 'Wireshark, Nagios, SNMP, Custom Scripts',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      features: ['Real-time monitoring', 'Automated alerts', 'Performance metrics', 'Historical analysis'],
      icon: faNetworkWired
    },
    {
      id: 6,
      title: 'Cloud Network Integration',
      category: 'Cloud',
      description: 'Hybrid cloud network setup connecting on-premises infrastructure with AWS cloud services using VPN and direct connect solutions.',
      tools: 'AWS, Azure, VPN Gateway, Terraform',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      features: ['Hybrid connectivity', 'VPN configuration', 'Load balancing', 'Disaster recovery'],
      icon: faCloud
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Projects Portfolio</h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Showcasing networking projects demonstrating expertise in secure, reliable, and modern IT systems.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'glass-button text-white glow-primary'
                    : 'glass-card text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <FontAwesomeIcon icon={faFilter} className="mr-2" />
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="glass-card overflow-hidden hover-scale group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="glass-button p-3 rounded-lg">
                      <FontAwesomeIcon icon={project.icon} className="text-xl text-primary" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="glass-button px-3 py-1 text-xs font-medium text-white rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {project.features.map((feature, idx) => (
                        <span key={idx} className="text-xs text-gray-300">• {feature}</span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-xs text-gray-400 mb-4">
                    <strong>Tools:</strong> {project.tools}
                  </p>
                  
                  <button className="glass-button w-full py-3 rounded-lg font-medium text-white hover:shadow-lg transition-all duration-300 group">
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold gradient-text mb-6">Ready to Start Your Project?</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Let's collaborate on your networking infrastructure needs and create innovative solutions together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="glass-button px-8 py-4 rounded-xl font-semibold text-white hover:shadow-xl transition-all duration-300 hover-scale glow-primary">
                Start a Project
              </button>
              <button className="glass-button px-8 py-4 rounded-xl font-semibold text-white hover:shadow-xl transition-all duration-300 hover-scale glow-accent">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;