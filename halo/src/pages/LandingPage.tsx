import { useNavigate } from 'react-router-dom';
import styles from '../styles/LandingPage.module.css';
import Button from '../components/Button';
import MapView from '../components/MapView';
import EmergencyButton from '../components/EmergencyButton';

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
      {/* Navbar - you can uncomment and use your Navbar component if desired */}

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

      {/* Floating Emergency Button */}
      <EmergencyButton />
    </div>
  );
}
