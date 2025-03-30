import React, { useState, useRef } from 'react';
import styles from '../styles/EmergencyButton.module.css';

const HOLD_DURATION = 3000; // milliseconds

export default function EmergencyButton() {
  const [holding, setHolding] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const animationRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);

  const handleMouseDown = () => {
    setHolding(true);
    startTimeRef.current = Date.now();

    animationRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const percent = Math.min((elapsed / HOLD_DURATION) * 100, 100);
      setProgress(percent);

      if (elapsed >= HOLD_DURATION) {
        clearInterval(animationRef.current!);
        clearTimeout(timerRef.current!);
        triggerEmergency();
      }
    }, 20);

    timerRef.current = setTimeout(() => {
      clearInterval(animationRef.current!);
    }, HOLD_DURATION);
  };

  const handleMouseUp = () => {
    setHolding(false);
    setProgress(0);
    clearTimeout(timerRef.current!);
    clearInterval(animationRef.current!);
  };

  const triggerEmergency = () => {
    alert('🚨 Emergency Triggered!');
  };

  return (
    <button
      className={styles.emergencyBtn}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
    >
      <div
        className={styles.progressOverlay}
        style={{ width: `${progress}%` }}
      />
      <span className={styles.label}>Emergency</span>
    </button>
  );
}
