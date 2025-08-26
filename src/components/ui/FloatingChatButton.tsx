import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const FloatingChatButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/ai-chat')}
      className="fixed bottom-6 right-6 w-16 h-16 glass-button text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 pulse-glow hover-scale"
      aria-label="Open AI Chat"
    >
      <FontAwesomeIcon icon={faComments} className="text-xl" />
    </button>
  );
};

export default FloatingChatButton;