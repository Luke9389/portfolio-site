import React from 'react';
import styles from './Portfolio.css';
import About from '../components/About/About';

const Portfolio = () => {
  return (
    <>
      <section className={styles.Portfolio}>
        <About /> 
        <div className={styles.Projects}></div>
        {/*  <Projects /> */}
      </section>
    </>
  );
};

export default Portfolio;
