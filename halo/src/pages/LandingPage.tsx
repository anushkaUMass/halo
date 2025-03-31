import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/LandingPage.module.css';
import Button from '../components/Button';
import MapView from '../components/MapView';
import EmergencyButton from '../components/EmergencyButton';

export default function LandingPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'home' | 'map' | 'contact'>('home');

  const handleGetStarted = () => {
    alert('Get Started clicked!');
  };

  const handleContact = () => {
    alert('Contact Us clicked!');
  };

  return (
    <div className={styles.wrapper}>
      {/* ======= Mobile Layout ======= */}
      <div className={styles.mobileLayout}>

        <div
          className={`${styles.mobileTabContent} ${activeTab === 'home' ? styles.bg : ''}`}
          style={{ display: activeTab === 'home' ? 'flex' : 'none' }}
        >
          <h1 className={styles.mobileHeading}>Welcome to Halo</h1>
        </div>

 
        <div
          className={`${styles.mobileTabContent} ${activeTab === 'map' ? styles.map : ''}`}
          style={{ display: activeTab === 'map' ? 'block' : 'none' }}
        >
          <MapView />
        </div>


        <div
          className={styles.mobileTabContent}
          style={{
            display: activeTab === 'contact' ? 'flex' : 'none',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <h1 className={styles.mobileHeading}>Let's Get In Touch!</h1>
          <Button onClick={handleGetStarted} className={styles.primaryButton}>Get Started</Button>
          <Button onClick={handleContact} className={styles.secondaryButton}>Contact Us</Button>
        </div>

        <div className={styles.mobileNavbarTabs}>
          <button
            className={activeTab === 'home' ? styles.active : ''}
            onClick={() => setActiveTab('home')}
          >
            Home
          </button>
          <button
            className={activeTab === 'map' ? styles.active : ''}
            onClick={() => setActiveTab('map')}
          >
            Map
          </button>
          <button
            className={activeTab === 'contact' ? styles.active : ''}
            onClick={() => setActiveTab('contact')}
          >
            Contact
          </button>
        </div>
      </div>

      {/* ======= desktop ======= */}
      <div className={styles.desktopLayout}>
        <div className={styles.desktopContentSection}>
          <nav className={styles.desktopNavbar}>
            <img src="/elements/halo.svg" alt="Halo Logo" className={styles.desktopLogo} />
            <ul className={styles.desktopNavLinks}>
              <li onClick={handleGetStarted}>Get Started</li>
              <li onClick={handleContact}>Contact</li>
            </ul>
          </nav>

          <div className={styles.desktopHero}>
            <h1 className={styles.desktopHeading}>Welcome to Halo</h1>
            <div className={styles.desktopButtons}>
              <Button onClick={handleGetStarted} className={styles.primaryButton}>
                Get Started
              </Button>
              <Button onClick={handleContact} className={styles.secondaryButton}>
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        <div className={styles.desktopMapOverlay}>
          <MapView />
        </div>
      </div>

      <EmergencyButton />
    </div>
  );
}
