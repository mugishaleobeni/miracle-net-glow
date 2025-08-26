import React from 'react';

interface SocialLink {
  href: string;
  ariaLabel: string;
  icon: string;
  color?: string;
  gradient?: string;
  glowColor?: string;
}

const socialLinks: SocialLink[] = [
  { href: 'https://facebook.com', ariaLabel: 'Facebook', icon: 'fab fa-facebook-f', color: '#1877F2', glowColor: '#1877F2' },
  { href: 'https://twitter.com', ariaLabel: 'Twitter', icon: 'fab fa-twitter', color: '#1DA1F2', glowColor: '#1DA1F2' },
  {
    href: 'https://instagram.com',
    ariaLabel: 'Instagram',
    icon: 'fab fa-instagram',
    gradient: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
    glowColor: '#dc2743',
  },
  { href: 'https://linkedin.com', ariaLabel: 'LinkedIn', icon: 'fab fa-linkedin-in', color: '#0A66C2', glowColor: '#0A66C2' },
  { href: 'https://youtube.com', ariaLabel: 'YouTube', icon: 'fab fa-youtube', color: '#FF0000', glowColor: '#FF0000' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#181838] py-2 sm:py-3 md:py-4 text-center w-full">
      <div className="max-w-screen-xl mx-auto">
        <div className="social-links flex justify-center flex-wrap gap-2 sm:gap-3 md:gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.ariaLabel}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              className="text-white text-lg sm:text-xl md:text-2xl relative hover:text-blue-400 transition-all duration-300 hover:shadow-[0_0_8px_2px] p-1 rounded-full"
              style={{
                ...(link.color ? { color: link.color } : {}),
                ...(link.glowColor ? { '--tw-shadow-color': link.glowColor } as React.CSSProperties : {}),
              }}
            >
              <i
                className={link.icon}
                style={link.gradient ? { background: link.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' } : undefined}
              ></i>
              {link.gradient && (
                <span
                  className="absolute inset-0 rounded-full"
                  style={{ background: link.gradient, zIndex: -1, padding: '2px' }}
                ></span>
              )}
            </a>
          ))}
        </div>
        <p className="text-white text-xs sm:text-sm mt-1 sm:mt-2">All Rights Reserved &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;