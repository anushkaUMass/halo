import { useNavigate } from 'react-router-dom';
import styles from '../styles/LandingPage.module.css';
import Button from '../components/Button';

export default function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    alert('Get Started clicked!');
  };

  const handleContact = () => {
    alert('Contact Us clicked!');
  };

  return (
    <div className={styles.container}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <img src="/elements/halo.svg" alt="Halo Logo" className={styles.logo} />
        <ul className={styles.navLinks}>
          <li onClick={handleGetStarted}>Get Started</li>
          <li onClick={handleContact}>Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className={styles.hero}>
        <h1 className={styles.heading}>Welcome to Halo</h1>
        <p className={styles.subheading}>
          Experience the best platform for seamless interaction and innovation.
        </p>

        {/* CTA Buttons */}
        <div className={styles.buttons}>
          <Button
            onClick={handleGetStarted}
            className={styles.primaryButton}
          >
            Get Started
          </Button>
          <Button
            onClick={handleContact}
            className={styles.secondaryButton}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
