import { useNavigate } from 'react-router-dom';
import styles from '../styles/LandingPage.module.css';
import Button from '../components/Button';
import MapView from '../components/MapView';

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
      {/* <nav className={styles.navbar}>
        <img src="/elements/halo.svg" alt="Halo Logo" className={styles.logo} />
        <ul className={styles.navLinks}>
          <li onClick={handleGetStarted}>Get Started</li>
          <li onClick={handleContact}>Contact</li>
        </ul>
      </nav> */}

      <div className={styles.hero}>
        <h1 className={styles.heading}>Welcome to Halo</h1> 
        {/* typewriter font style? would be so cute */}

        <div className="mapContainer">
          <MapView />
        </div>

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
