import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import FloatingChatButton from './ui/FloatingChatButton';
import DotGrid from './ui/DotGrid';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Layout: React.FC = () => {
  const location = useLocation();
  const isAIChatPage = location.pathname === '/ai-chat';

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Background Grid for all pages except AI Chat */}
      {!isAIChatPage && (
        <div className="fixed inset-0 z-0">
          <DotGrid
            dotSize={6}
            gap={40}
            baseColor="#4c1d95"
            activeColor="#7c3aed"
            proximity={120}
          />
        </div>
      )}
      
      {/* Main Content */}
      <div className="relative z-10">
        {!isAIChatPage && <Navbar />}
        <main>
          <Outlet />
        </main>
      </div>

      {/* Floating Chat Button - Hidden on AI Chat page */}
      {!isAIChatPage && <FloatingChatButton />}
    </div>
  );
};

export default Layout;