import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src="/elements/halo.svg" alt="Halo Logo" className={styles.logo} />
        <button className={styles.menuIcon} onClick={toggleMenu}>
          ☰
        </button>
      </div>

      <ul className={`${styles.navLinks} ${isOpen ? styles.show : ''}`}>
        <li onClick={() => navigate('/')}>Home</li>
        <li onClick={() => navigate('/landing')}>Dashboard</li>
      </ul>
    </nav>
  );
};

export default Navbar;
