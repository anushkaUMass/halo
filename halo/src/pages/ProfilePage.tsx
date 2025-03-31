import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import styles from '../styles/ProfilePage.module.css';

export default function ProfilePage() {
  const navigate = useNavigate();

  // localStorage
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('profileData');
    return savedData ? JSON.parse(savedData) : {
      username: '',
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      address: '',
      gender: '',
      pronouns: '',
    };
  });

  // first name is used in header
  const [savedFirstName, setSavedFirstName] = useState(() => {
    const savedData = localStorage.getItem('profileData');
    return savedData ? JSON.parse(savedData).firstName || '' : '';
  });

  // save to localStorage for field changes by the user
  useEffect(() => {
    localStorage.setItem('profileData', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedFirstName(formData.firstName);
    alert('Profile Saved!');
  };

  return (
    <div className={styles.container}>
      <motion.h1 
        className={styles.heading} 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        {savedFirstName ? `Hey, ${savedFirstName}!` : "Your Profile"}
      </motion.h1>

      <form className={styles.profileForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className={styles.inputField}
        />
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className={styles.inputField}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className={styles.inputField}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className={styles.inputField}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={styles.inputField}
        />
        <input
          type="text"
          name="address"
          placeholder="Home Address"
          value={formData.address}
          onChange={handleChange}
          className={styles.inputField}
        />

        {/* optional */}
        <select 
          name="gender" 
          value={formData.gender} 
          onChange={handleChange} 
          className={styles.inputField}
        >
          <option value="">Select Gender (Optional)</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Non-Binary">Non-Binary</option>
          <option value="Other">Other</option>
          <option value="Prefer not to say">Prefer not to say</option>
        </select>

        {/* optional */}
        <input
          type="text"
          name="pronouns"
          placeholder="Pronouns (Optional)"
          value={formData.pronouns}
          onChange={handleChange}
          className={styles.inputField}
        />

        <Button type="submit" className={styles.saveButton}>Save Profile</Button>
      </form>
    </div>
  );
}
