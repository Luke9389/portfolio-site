/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import styles from './Projects.css';
import goodManors from '../../assets/good-manors-screen.png';
import mazeApi from '../../assets/maze-api-screen.png';
import chroma from '../../assets/chroma-screen.png';
import gitHub from '../../assets/github-logo.png';
import web from '../../assets/web-icon.png';


const Projects = () => {
  // const [index, setIndex] = useState(0);

  // const nextProject = () => {
  //   setIndex(index + 1);
  // };

  // const prevProject = () => {
  //   setIndex(index - 1);
  // };
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
        <ul className={styles.ProjectList}>
          <li className={styles.ProjectItem}>
            <div className={styles.ImgWrapper}>
              <img src={goodManors} className={styles.ProjectImage} />
            </div>
            <h2>Good Manors</h2>
            <p>Keep all of the relevant info about your home in one place with Good Manors. Create one or more digital homes with different drawers to keep track of it all.</p>

            <div className={styles.Resources}>
              <a href="https://github.com/Good-Manors" target="_blank">
                <img src={gitHub} />
              </a>
              <a href="https://good-manors.netlify.com/auth" target="_blank">
                <img src={web} />
              </a>
            </div>
          </li>

          <li className={styles.ProjectItem}>
            <div className={styles.ImgWrapper}>
              <img src={mazeApi} className={styles.ProjectImage} />
            </div>
            <h2>Maze API</h2>
            <p>Maze API is a RESTful API utilizing MongoDB/Express/Node that generates a variety of mazes from a selection of recursive algorithms. Users can sign up, receive a key, and request mazes with an extensive suite of parameters.</p>
            <div className={styles.Resources}>
              <a href="https://github.com/maze-api/maze-api" target="_blank">
                <img src={gitHub} />
              </a>
              <a href="https://maze-api.herokuapp.com/" target="_blank">
                <img src={web} />
              </a>
            </div>
          </li>

          <li className={styles.ProjectItem}>
            <div className={styles.ImgWrapper}>
              <img src={chroma} className={styles.ProjectImage} />
            </div>
            <h2>Chroma Game</h2>
            <p>Chroma is a relaxing in-browser game. Unscramble colors to make beautiful gradients, and add to your personal collection.</p>
            <div className={styles.Resources}>
              <a href="https://github.com/Chroma-Squad/chroma-game" target="_blank">
                <img src={gitHub} />
              </a>
              <a href="https://chroma-game.herokuapp.com/" target="_blank">
                <img src={web} />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
