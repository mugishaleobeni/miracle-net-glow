import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faRobot, faUser } from '@fortawesome/free-solid-svg-icons';
import Orb from '../components/ui/Orb';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm Miracle's AI assistant. I can help answer questions about networking, IT services, projects, or anything else you'd like to know. How can I assist you today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('network') || message.includes('networking')) {
      return "I'd be happy to help with networking questions! Miracle specializes in network design, implementation, and security. Whether you're interested in Cisco technologies, network troubleshooting, or infrastructure planning, I can provide information about services and expertise. What specific networking topic would you like to discuss?";
    }
    
    if (message.includes('security') || message.includes('firewall') || message.includes('vpn')) {
      return "Security is a crucial aspect of modern networking! Miracle offers comprehensive security services including firewall configuration, VPN implementation, and network security assessments. Would you like to know more about specific security services or perhaps discuss a security challenge you're facing?";
    }
    
    if (message.includes('project') || message.includes('portfolio')) {
      return "Great question about projects! Miracle has worked on various networking projects including campus network design, firewall security setups, and Linux server deployments. Each project showcases different skills from Cisco Packet Tracer simulations to real-world security implementations. Would you like details about any specific project?";
    }
    
    if (message.includes('service') || message.includes('help') || message.includes('hire')) {
      return "Miracle offers a wide range of IT and networking services including network design & implementation, security setup, server administration, cloud integration, and IT support. Services are tailored to meet specific business needs with competitive pricing starting from $100-$600 depending on complexity. Would you like to discuss your specific requirements?";
    }
    
    if (message.includes('experience') || message.includes('background') || message.includes('qualification')) {
      return "Miracle is currently pursuing a Bachelor's in Network Administration with a 3.8 GPA, has hands-on experience as a Network Lab Assistant, and is working toward certifications including CCNA and CompTIA Network+. The background includes practical experience with Cisco technologies, security implementations, and server administration. Would you like more details about specific qualifications?";
    }
    
    if (message.includes('contact') || message.includes('reach') || message.includes('email')) {
      return "You can reach Miracle through several channels: Email at miracle.networks@example.com, phone at +1 (555) 123-4567, or connect via LinkedIn. Miracle typically responds within 24 hours and is open to discussing new opportunities, collaborations, or answering any technical questions you might have!";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello there! Welcome to Miracle's portfolio. I'm here to help you learn more about networking expertise, IT services, past projects, or answer any questions you might have about network infrastructure and technology. What would you like to explore?";
    }
    
    return "That's an interesting question! While I can provide information about Miracle's networking expertise, IT services, projects, and professional background, I'd recommend reaching out directly for more detailed discussions. You can contact Miracle at miracle.networks@example.com or through the contact page. Is there something specific about networking or IT services I can help clarify?";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: simulateAIResponse(inputMessage),
        sender: 'ai',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Orb */}
      <div className="fixed inset-0 z-0">
        <Orb hue={280} hoverIntensity={0.3} rotateOnHover={true} />
      </div>

      {/* Chat Interface */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-4xl h-[80vh] glass-card rounded-2xl overflow-hidden flex flex-col">
          
          {/* Header */}
          <div className="glass-nav p-6 border-b border-white/10">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 glass-button rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faRobot} className="text-xl text-primary" />
              </div>
              <div>
                <h1 className="text-xl font-bold gradient-text">AI Assistant</h1>
                <p className="text-sm text-gray-400">Ask me anything about Miracle's expertise</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-2xl ${
                    message.sender === 'user'
                      ? 'glass-button text-white'
                      : 'glass-card text-gray-100'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === 'user' ? 'bg-primary/20' : 'bg-accent/20'
                    }`}>
                      <FontAwesomeIcon 
                        icon={message.sender === 'user' ? faUser : faRobot} 
                        className={`text-sm ${
                          message.sender === 'user' ? 'text-primary' : 'text-accent'
                        }`} 
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm leading-relaxed">{message.content}</p>
                      <span className="text-xs text-gray-400 mt-2 block">
                        {message.timestamp.toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="glass-card p-4 rounded-2xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faRobot} className="text-sm text-accent" />
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="glass-nav p-6 border-t border-white/10">
            <div className="flex space-x-4">
              <div className="flex-1 relative">
                <textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about networking, projects, services, or anything else..."
                  className="w-full bg-transparent border border-white/20 backdrop-blur-sm p-4 pr-12 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 resize-none"
                  rows={1}
                  style={{ minHeight: '2.5rem' }}
                />
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className={`glass-button px-6 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover-scale ${
                  !inputMessage.trim() || isTyping
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:shadow-lg glow-primary'
                }`}
              >
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              Press Enter to send • This is a demo AI assistant
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChat;