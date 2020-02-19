import React from 'react';
import hero from '../../assets/hero-screen.png';
import styles from './Hero.css';

const About = () => {
  return (
    <section className={styles.Hero}>
      <img src={hero} />
      <div className={styles.HeroOverlay}>
        <h1>Luke Donahue</h1>
        <p>Creative Coder</p>
      </div>
    </section>
  );
};

export default About;
