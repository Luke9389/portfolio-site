import React from 'react';
import styles from './Tools.css';
import jsLogo from '../../assets/js-logo.png';
import cssLogo from '../../assets/css-logo.png';
import htmlLogo from '../../assets/html-logo.png';
import reactLogo from '../../assets/react-logo.png';
import reduxLogo from '../../assets/redux-logo.png';
import nodeLogo from '../../assets/node-logo.png';
import expressLogo from '../../assets/express-logo.png';
import mongodbLogo from '../../assets/mongodb-logo.png';
import mongooseLogo from '../../assets/mongoose-logo.png';
import jestLogo from '../../assets/jest-logo.png';
import netlifyLogo from '../../assets/netlify-logo.png';
import herokuLogo from '../../assets/heroku-logo.png';
import p5Logo from '../../assets/p5-logo.png';

const About = () => {
  return (
    <section className={styles.Tools}>
      <div className={styles.ToolsWrapper}>
        <h1>Tools</h1>
        <ul className={styles.ToolList}>
          <li className={styles.ToolLogo}>
            <img src={jsLogo} className={styles.ToolLogoImg} />
          </li>
          <li className={styles.ToolLogo}>
            <img src={cssLogo} className={styles.ToolLogoImg} />
          </li>
          <li className={styles.ToolLogo}>
            <img src={htmlLogo} className={styles.ToolLogoImg} />
          </li>
          <li className={styles.ToolLogo}>
            <img src={reactLogo} className={styles.ToolLogoImg} />
          </li>
          <li className={styles.ToolLogo}>
            <img src={reduxLogo} className={styles.ToolLogoImg} />
          </li>
          <li className={styles.ToolLogo}>
            <img src={nodeLogo} className={styles.ToolLogoImg} />
          </li>
          <li className={styles.ToolLogo}>
            <img src={expressLogo} className={styles.ToolLogoImg} />
          </li>
          <li className={styles.ToolLogo}>
            <img src={mongodbLogo} className={styles.ToolLogoImg} />
          </li>
          <li className={styles.ToolLogo}>
            <img src={mongooseLogo} className={styles.ToolLogoImg} />
          </li>
          <li className={styles.ToolLogo}>
            <img src={jestLogo} className={styles.ToolLogoImg} />
          </li>
          <li className={styles.ToolLogo}>
            <img src={netlifyLogo} className={styles.ToolLogoImg} />
          </li>
          <li className={styles.ToolLogo}>
            <img src={herokuLogo} className={styles.ToolLogoImg} />
          </li>
          <li className={styles.ToolLogo}>
            <img src={p5Logo} className={styles.ToolLogoImg} />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
