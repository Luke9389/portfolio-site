import React from 'react';
import styles from './Portfolio.css';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Tools from '../components/Tools/Tools';
import Contact from '../components/Contact/Contact';

const Portfolio = () => {
  return (
    <>
      <section className={styles.Portfolio}>
        <Hero />
        <About /> 
        <Tools />
        <Projects />
        <Contact />
      </section>
    </>
  );
};

export default Portfolio;
