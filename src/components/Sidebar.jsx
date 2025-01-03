import { NavLink } from 'react-router-dom';
import { FaEnvelope, FaTwitter, FaArtstation, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';

export function Sidebar() {
  const [showCopied, setShowCopied] = useState(false);

  const handleEmailClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('noxciel999@gmail.com');
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  return (
    <nav className="sidebar">
      <NavLink to="/" className="site-title">
        <h1>Isaac Liu</h1>
      </NavLink>
      <ul className="nav-links">
        {['3D', '2D', 'ANIMATION', 'CONTACT'].map((link) => (
          <li key={link}>
            <NavLink to={`/${link.toLowerCase().replace(' ', '-')}`}>
              {link}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="social-links">
        {[
          { 
            Icon: FaEnvelope, 
            url: '#', 
            title: 'Email',
            onClick: handleEmailClick,
            target: '_self'
          },
          { 
            Icon: FaTwitter, 
            url: 'https://x.com/NOXCIEL999', 
            title: 'Twitter',
            target: '_blank'
          },
          { 
            Icon: FaArtstation, 
            url: 'https://www.artstation.com/noxciel', 
            title: 'Artstation',
            target: '_blank'
          },
          { 
            Icon: FaLinkedin, 
            url: 'https://www.linkedin.com/in/isaac-liu-nox999', 
            title: 'LinkedIn',
            target: '_blank'
          },
        ].map(({ Icon, url, title, onClick, target }) => (
          <div key={title} className="social-link-container">
            <a 
              href={url} 
              title={title}
              onClick={onClick}
              target={target}
              rel={target === '_blank' ? 'noopener noreferrer' : undefined}
            >
              <Icon />
            </a>
            {title === 'Email' && showCopied && (
              <span className="copied-message">Copied!</span>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
} 