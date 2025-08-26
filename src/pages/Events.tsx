import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendarAlt, 
  faMapMarkerAlt, 
  faClock, 
  faUsers,
  faNetworkWired,
  faShield,
  faServer,
  faWifi,
  faCloud,
  faChalkboardTeacher,
  faFilter,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';
import Footer from '@/components/Footer';

const Events: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Workshops', 'Seminars', 'Conferences'];

  const events = [
    {
      id: 1,
      title: 'Cisco Networking Workshop',
      category: 'Workshops',
      type: 'Hands-on Workshop',
      date: '2024-03-15',
      time: '9:00 AM - 5:00 PM',
      location: 'Tech Center, Downtown',
      capacity: '25 participants',
      description: 'Comprehensive hands-on workshop covering Cisco routing and switching fundamentals, VLAN configuration, and network troubleshooting techniques.',
      topics: ['Router Configuration', 'Switch Management', 'VLAN Setup', 'Network Troubleshooting'],
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop',
      icon: faNetworkWired,
      status: 'Upcoming'
    },
    {
      id: 2,
      title: 'Cybersecurity Threats & Defense Seminar',
      category: 'Seminars',
      type: 'Educational Seminar',
      date: '2024-03-22',
      time: '2:00 PM - 4:00 PM',
      location: 'University Auditorium',
      capacity: '100 participants',
      description: 'In-depth seminar on current cybersecurity threats, defense strategies, and best practices for network security implementation.',
      topics: ['Threat Landscape', 'Security Protocols', 'Incident Response', 'Risk Management'],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop',
      icon: faShield,
      status: 'Registration Open'
    },
    {
      id: 3,
      title: 'Linux Server Administration Bootcamp',
      category: 'Workshops',
      type: 'Intensive Training',
      date: '2024-04-05',
      time: '9:00 AM - 6:00 PM',
      location: 'IT Training Lab',
      capacity: '20 participants',
      description: 'Intensive bootcamp covering Linux server deployment, configuration, security hardening, and maintenance best practices.',
      topics: ['Server Installation', 'Service Configuration', 'Security Hardening', 'Performance Monitoring'],
      image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=600&fit=crop',
      icon: faServer,
      status: 'Early Bird'
    },
    {
      id: 4,
      title: 'Cloud Networking Conference 2024',
      category: 'Conferences',
      type: 'Industry Conference',
      date: '2024-04-18',
      time: '8:00 AM - 6:00 PM',
      location: 'Convention Center',
      capacity: '500 participants',
      description: 'Annual conference focusing on cloud networking solutions, hybrid infrastructure, and emerging technologies in network virtualization.',
      topics: ['Hybrid Networks', 'Cloud Security', 'Network Automation', 'Future Technologies'],
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
      icon: faCloud,
      status: 'Featured Event'
    },
    {
      id: 5,
      title: 'Wi-Fi Optimization Training',
      category: 'Workshops',
      type: 'Technical Training',
      date: '2024-05-02',
      time: '1:00 PM - 5:00 PM',
      location: 'Wireless Lab',
      capacity: '15 participants',
      description: 'Specialized training on wireless network design, optimization, troubleshooting, and security implementation for enterprise environments.',
      topics: ['Coverage Analysis', 'Interference Mitigation', 'Performance Tuning', 'Security Protocols'],
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop',
      icon: faWifi,
      status: 'Coming Soon'
    },
    {
      id: 6,
      title: 'Network Monitoring & Analytics Workshop',
      category: 'Workshops',
      type: 'Hands-on Training',
      date: '2024-05-15',
      time: '10:00 AM - 4:00 PM',
      location: 'Monitoring Center',
      capacity: '30 participants',
      description: 'Comprehensive workshop on network monitoring tools, analytics, and proactive network management using Wireshark, Nagios, and other industry tools.',
      topics: ['Wireshark Analysis', 'Nagios Setup', 'Performance Metrics', 'Alert Configuration'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      icon: faChalkboardTeacher,
      status: 'Planning'
    }
  ];

  const filteredEvents = activeFilter === 'All' 
    ? events 
    : events.filter(event => event.category === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Upcoming': return 'text-green-400 bg-green-400/20';
      case 'Registration Open': return 'text-blue-400 bg-blue-400/20';
      case 'Early Bird': return 'text-yellow-400 bg-yellow-400/20';
      case 'Featured Event': return 'text-purple-400 bg-purple-400/20';
      case 'Coming Soon': return 'text-orange-400 bg-orange-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Events & Workshops</h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Stay updated on networking workshops, seminars, and professional events I attend or organize. 
              Join me in continuous learning and professional development.
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

      {/* Events Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredEvents.map((event, index) => (
              <div 
                key={event.id}
                className="glass-card overflow-hidden hover-scale group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="glass-button p-3 rounded-lg">
                      <FontAwesomeIcon icon={event.icon} className="text-xl text-primary" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(event.status)}`}>
                      {event.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="glass-button px-3 py-1 text-xs font-medium text-white rounded-full">
                      {event.type}
                    </span>
                    <span className="text-sm text-gray-400">{event.category}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">{event.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-300">
                      <FontAwesomeIcon icon={faCalendarAlt} className="mr-3 text-primary" />
                      {new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <FontAwesomeIcon icon={faClock} className="mr-3 text-primary" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3 text-primary" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <FontAwesomeIcon icon={faUsers} className="mr-3 text-primary" />
                      {event.capacity}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{event.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Topics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {event.topics.map((topic, idx) => (
                        <span key={idx} className="glass-button px-2 py-1 text-xs text-white rounded">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 glass-button py-3 rounded-lg font-medium text-white hover:shadow-lg transition-all duration-300">
                      Register Now
                    </button>
                    <button className="flex-1 glass-card py-3 rounded-lg font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300">
                      <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
                      Learn More
                    </button>
                  </div>
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
            <h2 className="text-3xl font-bold gradient-text mb-6">Want to Collaborate or Attend Together?</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Interested in organizing a custom workshop for your team or want to attend one of these events together? 
              Let's connect and expand our networking knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="glass-button px-8 py-4 rounded-xl font-semibold text-white hover:shadow-xl transition-all duration-300 hover-scale glow-primary">
                Contact Me
              </button>
              <button className="glass-button px-8 py-4 rounded-xl font-semibold text-white hover:shadow-xl transition-all duration-300 hover-scale glow-accent">
                Custom Workshop
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Events;