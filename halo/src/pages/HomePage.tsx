import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  const navigate = useNavigate();

  const handleTransition = () => {
    setTimeout(() => {
      navigate('/landing');
    }, 500);
  };

  return (
    <div className={styles.container}>
      {/* Logo */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className={styles.logoContainer}
      >
        <img src="/elements/halo.svg" alt="Halo Logo" className={styles.logo} />
      </motion.div>

      {/* Emergency Button */}
      <Button
        onClick={() => alert('Emergency triggered!')}
        className={styles.buttonDanger}
      >
        Emergency
      </Button>

      {/* Transition Button */}
      <Button
        onClick={handleTransition}
        className={styles.buttonPrimary}
      >
        Swipe Up
      </Button>
    </div>
  );
}
