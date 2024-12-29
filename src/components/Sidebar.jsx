import { NavLink } from 'react-router-dom';
import { FaEnvelope, FaFacebook, FaTwitter, FaArtstation, FaLinkedin, FaInstagram } from 'react-icons/fa';

export function Sidebar() {
  return (
    <nav className="sidebar">
      <h1>Noxciel</h1>
      <ul className="nav-links">
        {['ILLUSTRATIONS', 'SKETCHES', 'CONCEPT ART', 'TRADITIONAL', 'CONTACT', 'STORE'].map((link) => (
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
          { Icon: FaFacebook, url: '#', title: 'Facebook' },
          { Icon: FaTwitter, url: '#', title: 'Twitter' },
          { Icon: FaArtstation, url: '#', title: 'Artstation' },
          { Icon: FaLinkedin, url: '#', title: 'LinkedIn' },
          { Icon: FaInstagram, url: '#', title: 'Instagram' },
        ].map(({ Icon, url, title }) => (
          <a key={title} href={url} title={title}>
            <Icon />
          </a>
        ))}
      </div>
    </nav>
  );
} 