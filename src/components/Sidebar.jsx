import { NavLink } from 'react-router-dom';
import { FaEnvelope, FaTwitter, FaArtstation, FaLinkedin } from 'react-icons/fa';

export function Sidebar() {
  return (
    <nav className="sidebar">
      <h1>Isaac Liu</h1>
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
          { Icon: FaEnvelope, url: '#', title: 'Email' },
          { Icon: FaTwitter, url: '#', title: 'Twitter' },
          { Icon: FaArtstation, url: '#', title: 'Artstation' },
          { Icon: FaLinkedin, url: '#', title: 'LinkedIn' },
        ].map(({ Icon, url, title }) => (
          <a key={title} href={url} title={title}>
            <Icon />
          </a>
        ))}
      </div>
    </nav>
  );
} 