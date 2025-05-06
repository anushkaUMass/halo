import { useState, useRef } from 'react';
import styles from '../styles/EmergencyButton.module.css';

export default function EmergencyButton() {
  const [isHolding, setIsHolding] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleHoldStart = () => {
    setIsHolding(true);

    timeoutRef.current = setTimeout(() => {
      sendSOS();
      setIsHolding(false);
    }, 3000);
  };

  const handleHoldEnd = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsHolding(false);
  };

  const sendSOS = async () => {
    const payload = {
      userId: 'anushka01',
      location: '42.391, -72.523',
      timestamp: new Date().toISOString(),
    };

    try {
      const res = await fetch('http://localhost:4000/sos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      alert(data.message); // response from backend
    } catch (err) {
      console.error('SOS failed:', err);
    }
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