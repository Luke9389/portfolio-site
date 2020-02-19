import React from 'react';
import styles from './About.css';

const About = () => {
  return (
    <section className={styles.About}>
      <div className={styles.AboutMeWrapper}>
        <h1>About Me</h1>
        <p>I am a software developer based in Portland OR. I love learning new tools and applying them to creative work. Here to defend the internet from devs who think DRY means bland.</p>
      </div>
    </section>
  );
};

export default About;
