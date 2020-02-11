import React from 'react';
import styles from './Portfolio.css';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';

const Portfolio = () => {
  return (
    <>
      <section className={styles.Portfolio}>
        <About /> 
        <Projects />
      </section>
    </>
  );
};

export default Portfolio;
