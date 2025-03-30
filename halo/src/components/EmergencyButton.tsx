import { useState, useRef } from 'react';
import styles from '../styles/EmergencyButton.module.css';

export default function EmergencyButton() {
  const [isHolding, setIsHolding] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleHoldStart = () => {
    setIsHolding(true);

    timeoutRef.current = setTimeout(() => {
      alert('🚨 Emergency triggered!');
      setIsHolding(false);
    }, 3000); // must hold 3 seconds
  };

  const handleHoldEnd = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsHolding(false);
  };

  return (
    <button
      className={styles.emergencyBtn}
      onMouseDown={handleHoldStart}
      onMouseUp={handleHoldEnd}
      onMouseLeave={handleHoldEnd}
      onTouchStart={handleHoldStart}
      onTouchEnd={handleHoldEnd}
    >
      <div
        className={styles.progressOverlay}
        style={{
          width: isHolding ? '100%' : '0%',
          transition: isHolding
            ? 'width 3s linear'
            : 'width 0.3s ease-out',
        }}
      />
      <span className={styles.label}>Hold for SOS</span>
    </button>
  );
}