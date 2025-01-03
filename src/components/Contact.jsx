import { FaEnvelope, FaTwitter, FaArtstation, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';

export function Contact() {
  const [showCopied, setShowCopied] = useState(false);

  const handleEmailClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('noxciel999@gmail.com');
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  return (
    <div className="contact-page">
      <h1>Contact</h1>
      <div className="contact-content">
        <p>Feel free to reach out through any of these platforms:</p>
        
        <div className="contact-links">
          {[
            {
              Icon: FaEnvelope,
              url: '#',
              title: 'Email',
              text: 'noxciel999@gmail.com',
              onClick: handleEmailClick,
              target: '_self'
            },
            {
              Icon: FaTwitter,
              url: 'https://x.com/NOXCIEL999',
              title: 'Twitter',
              text: '@NOXCIEL999',
              target: '_blank'
            },
            {
              Icon: FaArtstation,
              url: 'https://www.artstation.com/noxciel',
              title: 'Artstation',
              text: 'noxciel',
              target: '_blank'
            },
            {
              Icon: FaLinkedin,
              url: 'https://www.linkedin.com/in/isaac-liu-nox999',
              title: 'LinkedIn',
              text: 'Isaac Liu',
              target: '_blank'
            },
          ].map(({ Icon, url, title, text, onClick, target }) => (
            <div key={title} className="social-link-container">
              <a
                href={url}
                title={title}
                onClick={onClick}
                target={target}
                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                className="contact-link"
              >
                <Icon /> {text}
              </a>
              {title === 'Email' && showCopied && (
                <span className="copied-message">Copied!</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 