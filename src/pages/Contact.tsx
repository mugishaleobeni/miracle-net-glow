import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt,
  faGlobe,
  faPaperPlane,
  faUser,
  faTag,
  faComments,
  faHandshake
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedin, 
  faGithub, 
  faTwitter 
} from '@fortawesome/free-brands-svg-icons';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

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
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: faEnvelope,
      title: 'Email',
      value: 'miracle.networks@example.com',
      link: 'mailto:miracle.networks@example.com',
      description: 'Feel free to reach out for any inquiries'
    },
    {
      icon: faPhone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      description: 'Available Mon-Fri, 9 AM - 6 PM'
    },
    {
      icon: faMapMarkerAlt,
      title: 'Location',
      value: 'Tech City, State 12345',
      link: null,
      description: 'Open to remote opportunities'
    },
    {
      icon: faGlobe,
      title: 'Website',
      value: 'theodevworks.com',
      link: 'https://theodevworks.com',
      description: 'Portfolio and professional updates'
    }
  ];

  const socialLinks = [
    {
      icon: faLinkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/miracle-networks',
      username: '/in/miracle-networks'
    },
    {
      icon: faGithub,
      name: 'GitHub',
      url: 'https://github.com/miracle-networks',
      username: '/miracle-networks'
    },
    {
      icon: faTwitter,
      name: 'Twitter',
      url: 'https://twitter.com/miracle_networks',
      username: '@miracle_networks'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Get in Touch</h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Whether for collaboration, consultation, or networking opportunities, I'm just a message away. 
              Let's connect and build amazing networks together!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div data-aos="fade-right">
                <h2 className="text-3xl font-bold gradient-text-secondary mb-8">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={index}
                      className="glass-card p-6 hover-scale group"
                      data-aos="fade-right"
                      data-aos-delay={index * 100}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="glass-button p-3 rounded-lg group-hover:glow-primary transition-all duration-300">
                          <FontAwesomeIcon icon={info.icon} className="text-xl text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white mb-1">{info.title}</h3>
                          {info.link ? (
                            <a 
                              href={info.link}
                              className="text-primary hover:text-accent transition-colors duration-300 font-medium"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <span className="text-primary font-medium">{info.value}</span>
                          )}
                          <p className="text-gray-400 text-sm mt-1">{info.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div data-aos="fade-right" data-aos-delay="400">
                <h3 className="text-xl font-bold gradient-text-secondary mb-6">Connect on Social Media</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card p-4 hover-scale group transition-all duration-300"
                      title={`Follow on ${social.name}`}
                    >
                      <FontAwesomeIcon 
                        icon={social.icon} 
                        className="text-2xl text-primary group-hover:text-accent transition-colors duration-300" 
                      />
                    </a>
                  ))}
                </div>
                <div className="mt-4 space-y-2">
                  {socialLinks.map((social, index) => (
                    <div key={index} className="text-sm text-gray-400">
                      <span className="text-gray-300">{social.name}:</span> {social.username}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8" data-aos="fade-left">
              <h2 className="text-3xl font-bold gradient-text-secondary mb-8">Send a Message</h2>
              
              {submitMessage && (
                <div className="glass-button p-4 mb-6 text-center text-green-400 rounded-lg">
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      <FontAwesomeIcon icon={faUser} className="mr-2" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-transparent border border-white/20 backdrop-blur-sm p-3 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-transparent border border-white/20 backdrop-blur-sm p-3 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    <FontAwesomeIcon icon={faTag} className="mr-2" />
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-transparent border border-white/20 backdrop-blur-sm p-3 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                    placeholder="What would you like to discuss?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    <FontAwesomeIcon icon={faComments} className="mr-2" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full bg-transparent border border-white/20 backdrop-blur-sm p-3 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full glass-button py-4 rounded-xl font-semibold text-white transition-all duration-300 hover-scale ${
                    isSubmitting 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:shadow-xl glow-primary'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold gradient-text mb-6">Let's Connect and Build Networks Together!</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              I'm always excited to discuss new opportunities, share knowledge, and collaborate on innovative 
              networking projects. Whether you need consultation, want to explore partnership opportunities, 
              or simply want to connect with a fellow networking enthusiast, I'd love to hear from you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="glass-card p-6">
                <FontAwesomeIcon icon={faComments} className="text-3xl text-primary mb-3" />
                <h3 className="text-white font-semibold mb-2">Quick Response</h3>
                <p className="text-gray-400 text-sm">I typically respond within 24 hours</p>
              </div>
              <div className="glass-card p-6">
                <FontAwesomeIcon icon={faHandshake} className="text-3xl text-accent mb-3" />
                <h3 className="text-white font-semibold mb-2">Professional</h3>
                <p className="text-gray-400 text-sm">Dedicated to quality and excellence</p>
              </div>
              <div className="glass-card p-6">
                <FontAwesomeIcon icon={faGlobe} className="text-3xl text-primary mb-3" />
                <h3 className="text-white font-semibold mb-2">Global Reach</h3>
                <p className="text-gray-400 text-sm">Open to remote collaborations</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;