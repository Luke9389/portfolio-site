/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from 'react';
import styles from './Projects.css';
import goodManors from '../../assets/good-manors-screen.png';
import mazeApi from '../../assets/maze-api-screen.png';
import chroma from '../../assets/chroma-screen.png';
import gitHub from '../../assets/github-logo.png';

const Projects = () => {
  // const [index, setIndex] = useState(0);

  // const nextProject = () => {
  //   setIndex(index + 1);
  // };

  // const prevProject = () => {
  //   setIndex(index - 1);
  // };

  const slide = '0';

  return (
    <section className={styles.Projects}>
      {/* <button
        onClick={() => { prevProject(); }}
        disabled={index === 0}
      >Prev</button>
      <p>{index}</p>
      <button
        onClick={() => { nextProject(); }}
        disabled={index === 2}
      >Next</button> */}
      <div className={styles.ProjectsWrapper}>
        <h1>Projects</h1>
        <ul className={styles.ProjectList} style={{
          'transform': `translateX(-${slide})`
        }}>
          <li className={styles.ProjectItem}>
            <img src={goodManors} className={styles.ProjectImage} />
            <div>
              <h2>Good Manors</h2>
              <p>Keep all of the relevant info about your home in one place with Good Manors. Create one or more digital homes with different drawers to keep track of it all.</p>
              <div className={styles.Resources}>
                <a href="https://github.com/Good-Manors" target="_blank">
                  <img src={gitHub} />
                </a>
                <a href="https://github.com/Good-Manors" target="_blank">
                  <img src={gitHub} />
                </a>
                <a href="https://github.com/Good-Manors" target="_blank">
                  <img src={gitHub} />
                </a>
              </div>
            </div>
          </li>
          <li className={styles.ProjectItem}>
            <img src={mazeApi} className={styles.ProjectImage} />
            <div>
              <h2>Maze API</h2>
              <p>Maze API is a RESTful API utilizing MongoDB/Express/Node that generates a variety of mazes from a selection of recursive algorithms. Users can sign up, receive a key, and request mazes with an extensive suite of parameters.</p>
            </div>
          </li>
          <li className={styles.ProjectItem}>
            <img src={chroma} className={styles.ProjectImage} />
            <div>
              <h2>Chroma Game</h2>
              <p>Bored? We have the perfect game for you, stimulate your color curiosity with Chroma! The game will give you a scrambled set of colors from a gradient, and the user will need to align them in order.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
