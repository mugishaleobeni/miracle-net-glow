import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faDownload, 
  faGraduationCap, 
  faCertificate, 
  faNetworkWired,
  faShield,
  faServer,
  faWifi,
  faCloud,
  faTools,
  faHandshake,
  faBrain,
  faComments,
  faClock,
  faLightbulb,
  faBullseye,
  faEnvelope,
  faCalendarAlt,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';

const Resume: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Network Administration',
      institution: 'Tech University',
      duration: '2022 - 2025',
      location: 'City, State',
      gpa: '3.8/4.0',
      relevant: ['Network Fundamentals', 'Cybersecurity', 'System Administration', 'Cloud Computing']
    },
    {
      degree: 'Associate Degree in Information Technology',
      institution: 'Community College',
      duration: '2020 - 2022',
      location: 'City, State',
      gpa: '3.9/4.0',
      relevant: ['Computer Networks', 'Operating Systems', 'Database Management', 'Web Development']
    }
  ];

  const certifications = [
    {
      name: 'Cisco Certified Network Associate (CCNA)',
      issuer: 'Cisco Systems',
      status: 'In Progress',
      expected: 'Q2 2024',
      description: 'Comprehensive networking certification covering routing, switching, and network security.'
    },
    {
      name: 'CompTIA Network+',
      issuer: 'CompTIA',
      status: 'In Progress',
      expected: 'Q1 2024',
      description: 'Industry-standard certification for networking professionals and IT infrastructure.'
    },
    {
      name: 'Cybersecurity Fundamentals',
      issuer: 'Security Institute',
      status: 'Completed',
      date: '2023',
      description: 'Foundation-level cybersecurity certification covering security principles and practices.'
    },
    {
      name: 'Linux Professional Institute Certification (LPIC-1)',
      issuer: 'Linux Professional Institute',
      status: 'Planned',
      expected: 'Q3 2024',
      description: 'Linux system administration certification for server management and configuration.'
    }
  ];

  const experience = [
    {
      title: 'Network Lab Assistant',
      organization: 'Tech University',
      duration: 'Sep 2023 - Present',
      type: 'Part-time',
      responsibilities: [
        'Assist in setting up and maintaining networking lab equipment',
        'Support students with Cisco Packet Tracer simulations',
        'Document network configurations and troubleshooting procedures',
        'Collaborate with faculty on curriculum development'
      ]
    },
    {
      title: 'IT Support Intern',
      organization: 'Local Business Solutions',
      duration: 'Jun 2023 - Aug 2023',
      type: 'Internship',
      responsibilities: [
        'Provided technical support for 50+ users',
        'Configured and deployed workstations and network devices',
        'Assisted with network security assessments',
        'Created user documentation and training materials'
      ]
    },
    {
      title: 'Campus Network Design Project',
      organization: 'Academic Project',
      duration: 'Feb 2023 - May 2023',
      type: 'Project',
      responsibilities: [
        'Designed comprehensive network topology for educational institution',
        'Implemented VLAN segmentation and security policies',
        'Conducted performance analysis and optimization',
        'Presented findings to faculty and industry professionals'
      ]
    }
  ];

  const technicalSkills = [
    { category: 'Networking', skills: ['TCP/IP', 'Routing & Switching', 'VLANs', 'Network Protocols', 'Network Design'] },
    { category: 'Security', skills: ['Firewalls', 'VPNs', 'IDS/IPS', 'Security Policies', 'Risk Assessment'] },
    { category: 'Systems', skills: ['Linux Administration', 'Windows Server', 'Virtualization', 'Cloud Platforms'] },
    { category: 'Tools', skills: ['Cisco Packet Tracer', 'Wireshark', 'Nagios', 'pfSense', 'VMware'] }
  ];

  const softSkills = [
    { icon: faHandshake, name: 'Teamwork & Collaboration' },
    { icon: faBrain, name: 'Problem Solving' },
    { icon: faComments, name: 'Communication Skills' },
    { icon: faClock, name: 'Time Management' },
    { icon: faLightbulb, name: 'Critical Thinking' },
    { icon: faBullseye, name: 'Attention to Detail' }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Resume / CV</h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              Detailed overview of my education, experience, and professional skills in networking and IT infrastructure.
            </p>
            <button className="glass-button px-8 py-4 rounded-xl font-semibold text-white hover:shadow-xl transition-all duration-300 hover-scale glow-primary">
              <FontAwesomeIcon icon={faDownload} className="mr-2" />
              Download Resume (PDF)
            </button>
          </div>
        </div>
      </section>

      {/* Profile Snapshot */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="glass-card p-8 text-center" data-aos="fade-right">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-primary/30 glow-primary">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="Miracle - Networking Specialist"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold gradient-text-secondary mb-2">Miracle</h2>
                <p className="text-lg text-gray-300 mb-4">Networking Specialist</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center justify-center">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                    City, State
                  </div>
                  <div className="flex items-center justify-center">
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                    miracle.networks@example.com
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="glass-card p-8" data-aos="fade-left">
                <h3 className="text-xl font-bold gradient-text mb-4">Professional Summary</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Dedicated networking student with hands-on experience in network design, security implementation, 
                  and system administration. Passionate about creating secure, efficient, and scalable network 
                  infrastructures. Strong foundation in Cisco technologies, cybersecurity principles, and cloud 
                  computing with a commitment to continuous learning and professional development.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">3.8</div>
                    <div className="text-xs text-gray-400">Current GPA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">15+</div>
                    <div className="text-xs text-gray-400">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">4</div>
                    <div className="text-xs text-gray-400">Certifications</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">2+</div>
                    <div className="text-xs text-gray-400">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12" data-aos="fade-up">
            Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="glass-card p-8 hover-scale"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-primary font-semibold">{edu.institution}</p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <div className="text-gray-300 font-medium">{edu.duration}</div>
                    <div className="text-gray-400 text-sm">{edu.location}</div>
                    <div className="text-accent font-semibold">GPA: {edu.gpa}</div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.relevant.map((course, idx) => (
                      <span key={idx} className="glass-button px-3 py-1 text-xs text-white rounded-full">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12" data-aos="fade-up">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="glass-card p-6 hover-scale"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-start justify-between mb-4">
                  <FontAwesomeIcon icon={faCertificate} className="text-2xl text-primary mt-1" />
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    cert.status === 'Completed' ? 'text-green-400 bg-green-400/20' :
                    cert.status === 'In Progress' ? 'text-yellow-400 bg-yellow-400/20' :
                    'text-blue-400 bg-blue-400/20'
                  }`}>
                    {cert.status}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                <p className="text-primary font-semibold mb-2">{cert.issuer}</p>
                <p className="text-gray-300 text-sm mb-3">{cert.description}</p>
                <div className="text-xs text-gray-400">
                  {cert.date && `Completed: ${cert.date}`}
                  {cert.expected && `Expected: ${cert.expected}`}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12" data-aos="fade-up">
            Experience & Projects
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div 
                key={index}
                className="glass-card p-8 hover-scale"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-primary font-semibold">{exp.organization}</p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <div className="text-gray-300 font-medium">{exp.duration}</div>
                    <span className="glass-button px-3 py-1 text-xs text-white rounded-full">
                      {exp.type}
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Responsibilities & Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 text-sm">
                        <div className="w-1 h-1 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12" data-aos="fade-up">
            Skills & Competencies
          </h2>
          
          {/* Technical Skills */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-center gradient-text-secondary mb-8">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technicalSkills.map((category, index) => (
                <div 
                  key={index}
                  className="glass-card p-6"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <h4 className="text-lg font-bold text-white mb-4">{category.category}</h4>
                  <div className="space-y-2">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="text-gray-300 text-sm">{skill}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-xl font-bold text-center gradient-text-secondary mb-8">Soft Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {softSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="glass-card p-6 text-center hover-scale"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <FontAwesomeIcon icon={skill.icon} className="text-2xl text-accent mb-3" />
                  <p className="text-white text-sm font-medium">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold gradient-text mb-6">Ready to Collaborate?</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Interested in my background and skills? Let's discuss how we can work together on your networking projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="glass-button px-8 py-4 rounded-xl font-semibold text-white hover:shadow-xl transition-all duration-300 hover-scale glow-primary">
                <FontAwesomeIcon icon={faDownload} className="mr-2" />
                Download Full Resume
              </button>
              <button className="glass-button px-8 py-4 rounded-xl font-semibold text-white hover:shadow-xl transition-all duration-300 hover-scale glow-accent">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;