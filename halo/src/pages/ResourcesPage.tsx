import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import styles from '../styles/ResourcesPage.module.css';

export default function ResourcesPage() {
  const navigate = useNavigate();

  const resources = [
    {
      title: "Self-Defense Basics",
      description: "Learn essential self-defense techniques.",
      link: "https://www.healthline.com/health/womens-health/self-defense-tips-escape/",
    },
    {
      title: "Emergency Helplines",
      description: "List of emergency contacts for immediate help.",
      link: "https://www.thehotline.org/",
    },
    {
      title: "Safe Spaces",
      description: "Find nearby police stations and safe zones.",
      link: "https://maps.google.com/",
    },
  ];

  return (
    <div className={styles.container}>
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Women's Safety Resources
      </motion.h1>

      <div className={styles.resourceList}>
        {resources.map((resource, index) => (
          <motion.div
            key={index}
            className={styles.resourceCard}
            whileHover={{ scale: 1.05 }}
          >
            <h2>{resource.title}</h2>
            <p>{resource.description}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button
          onClick={() => navigate('/')}
          className={styles.backButton}
        >
          Back to Home
        </Button>
      </motion.div>
    </div>
  );
}

