/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import styles from './Contact.css';
import gitHub from '../../assets/github-logo.png';
import linkedIn from '../../assets/linkedin-logo.png';

const Contact = () => {
  return (
    <section className={styles.Contact}>
      <h1>Contact</h1>
      <p>email: luke9389@gmail.com</p>
      <div className={styles.Resources}>
        <a href="https://github.com/Luke9389" target="_blank">
          <img src={gitHub} />
        </a>
        <a href="https://www.linkedin.com/in/luke-donahue-53461120/" target="_blank">
          <img src={linkedIn} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
