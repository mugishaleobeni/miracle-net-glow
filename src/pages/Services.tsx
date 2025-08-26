import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faNetworkWired, 
  faShield, 
  faServer, 
  faWifi, 
  faCloud,
  faTools,
  faChalkboardTeacher,
  faVideo,
  faDesktop,
  faUserShield,
  faCog,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      icon: faNetworkWired,
      title: 'Network Design & Implementation',
      description: 'Complete network architecture planning and deployment for small to enterprise-level organizations.',
      features: ['Network topology design', 'Infrastructure planning', 'Equipment selection', 'Implementation roadmap'],
      pricing: 'Starting from $500'
    },
    {
      icon: faCog,
      title: 'Routing & Switching Configuration',
      description: 'Expert configuration of routers, switches, and network devices for optimal performance and security.',
      features: ['Router configuration', 'Switch management', 'VLAN setup', 'Protocol optimization'],
      pricing: 'Starting from $300'
    },
    {
      icon: faShield,
      title: 'Network Security & Firewall Setup',
      description: 'Comprehensive security implementation including firewalls, VPNs, and intrusion detection systems.',
      features: ['Firewall configuration', 'VPN implementation', 'Security policies', 'Threat monitoring'],
      pricing: 'Starting from $400'
    },
    {
      icon: faWifi,
      title: 'Wireless Network Setup & Optimization',
      description: 'Professional Wi-Fi network design, deployment, and optimization for maximum coverage and performance.',
      features: ['Coverage analysis', 'Access point placement', 'Security configuration', 'Performance tuning'],
      pricing: 'Starting from $250'
    },
    {
      icon: faServer,
      title: 'Server Administration (Linux/Windows)',
      description: 'Complete server setup, configuration, and ongoing maintenance for reliable system operations.',
      features: ['Server installation', 'Service configuration', 'Security hardening', 'Backup solutions'],
      pricing: 'Starting from $350'
    },
    {
      icon: faCloud,
      title: 'Cloud Integration & Virtualization',
      description: 'Hybrid cloud solutions connecting on-premises infrastructure with cloud platforms.',
      features: ['Cloud migration', 'Hybrid connectivity', 'Virtual machine setup', 'Disaster recovery'],
      pricing: 'Starting from $600'
    },
    {
      icon: faTools,
      title: 'Network Monitoring & Troubleshooting',
      description: 'Proactive network monitoring and rapid issue resolution to ensure optimal network performance.',
      features: ['Real-time monitoring', 'Performance analysis', 'Issue diagnosis', 'Resolution documentation'],
      pricing: 'Starting from $200'
    },
    {
      icon: faDesktop,
      title: 'IT Support & Maintenance',
      description: 'Comprehensive IT support including hardware troubleshooting and software maintenance.',
      features: ['Hardware diagnostics', 'Software support', 'System maintenance', 'User assistance'],
      pricing: 'Starting from $150'
    },
    {
      icon: faUserShield,
      title: 'Cybersecurity Consulting',
      description: 'Security assessments and recommendations to protect your network infrastructure from threats.',
      features: ['Security audits', 'Vulnerability assessment', 'Compliance consulting', 'Security training'],
      pricing: 'Starting from $450'
    },
    {
      icon: faChalkboardTeacher,
      title: 'IT & Networking Training/Workshops',
      description: 'Professional training sessions for your team on networking concepts and best practices.',
      features: ['Custom curriculum', 'Hands-on labs', 'Certification prep', 'Team workshops'],
      pricing: 'Starting from $300'
    },
    {
      icon: faCog,
      title: 'Operating System Installation & Configuration',
      description: 'Professional OS installation and configuration for workstations and servers.',
      features: ['OS installation', 'Driver configuration', 'Software setup', 'Performance optimization'],
      pricing: 'Starting from $100'
    },
    {
      icon: faVideo,
      title: 'CCTV Camera Installation & Network Integration',
      description: 'Security camera system setup with network integration for remote monitoring capabilities.',
      features: ['Camera installation', 'Network configuration', 'Remote access setup', 'Recording systems'],
      pricing: 'Starting from $400'
    }
  ];

  const serviceCategories = [
    { name: 'Networking', count: 4, color: 'text-primary' },
    { name: 'Security', count: 3, color: 'text-accent' },
    { name: 'IT Support', count: 3, color: 'text-green-400' },
    { name: 'Training', count: 2, color: 'text-yellow-400' }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Services I Offer</h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Professional IT & Networking services to optimize, secure, and manage your networks with cutting-edge solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center gradient-text mb-12" data-aos="fade-up">
            Service Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((category, index) => (
              <div 
                key={index}
                className="glass-card p-6 text-center hover-scale"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`text-3xl font-bold ${category.color} mb-2`}>{category.count}</div>
                <h3 className="text-white font-semibold">{category.name}</h3>
                <p className="text-gray-400 text-sm">Services Available</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center gradient-text mb-12" data-aos="fade-up">
            Complete Service Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="glass-card p-6 hover-scale group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center mb-4">
                  <div className="glass-button p-3 rounded-lg mr-4 group-hover:glow-primary transition-all duration-300">
                    <FontAwesomeIcon icon={service.icon} className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{service.title}</h3>
                    <div className="text-sm font-semibold text-accent">{service.pricing}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">What's Included:</h4>
                  <div className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-300">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <button className="glass-button w-full py-3 rounded-lg font-medium text-white hover:shadow-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center gradient-text mb-12" data-aos="fade-up">
            How I Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your needs and requirements' },
              { step: '02', title: 'Planning', desc: 'Designing optimal solutions for your infrastructure' },
              { step: '03', title: 'Implementation', desc: 'Professional deployment with minimal downtime' },
              { step: '04', title: 'Support', desc: 'Ongoing maintenance and optimization' }
            ].map((item, index) => (
              <div 
                key={index}
                className="glass-card p-6 text-center hover-scale"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-3xl font-bold gradient-text-secondary mb-4">{item.step}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold gradient-text mb-6">Ready to Get Started?</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Transform your network infrastructure with professional services tailored to your business needs. 
              Let's discuss your project and create the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="glass-button px-8 py-4 rounded-xl font-semibold text-white hover:shadow-xl transition-all duration-300 hover-scale glow-primary"
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                Get Free Consultation
              </Link>
              <Link 
                to="/projects" 
                className="glass-button px-8 py-4 rounded-xl font-semibold text-white hover:shadow-xl transition-all duration-300 hover-scale glow-accent"
              >
                View Past Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;