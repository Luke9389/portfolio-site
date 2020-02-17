import React from 'react';
import styles from './Portfolio.css';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Tools from '../components/Tools/Tools';

const Portfolio = () => {
  return (
    <>
      <section className={styles.Portfolio}>
        <Hero />
        <About /> 
        <Tools />
        <Projects />
      </section>
    </>
  );
};

export default Portfolio;
