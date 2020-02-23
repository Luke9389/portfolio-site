import React from 'react';
import styles from './About.css';

const About = () => {
  return (
    <section className={styles.About}>
      <div className={styles.AboutMeWrapper}>
        <h1>About Me</h1>
        <p>I am a synth patch designer, board game optimizer, armchair philosopher, cat snuggler, beer taster, and software developer based in Portland, OR. I love learning new tools and applying them to creative work. Here to defend the internet from devs who think DRY = bland.</p>
      </div>
    </section>
  );
};

export default About;
