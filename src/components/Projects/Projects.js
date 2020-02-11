import React from 'react';
import styles from './Projects.css';
import goodManors from '../../assets/good-manors-screen.png';
import mazeApi from '../../assets/maze-api-screen.png';
import chroma from '../../assets/chroma-screen.png';

const About = () => {
  return (
    <section className={styles.About}>
      <h1 className={styles.Name}>Luke Donahue</h1>
      <h2>Projects</h2>
      <ul>
        <li>
          <div>
            <h2>Good Manors</h2>
            <p>Keep all of the relevant info about your home in one place with Good Manors. Create one or more digital homes with different drawers to keep track of it all.</p>
          </div>
          <img src={goodManors} />
        </li>

        <li>
          <div>
            <h2>Maze API</h2>
            <p>Maze API is a RESTful API utilizing MongoDB/Express/Node that generates a variety of mazes from a selection of recursive algorithms. Users can sign up, receive a key, and request mazes with an extensive suite of parameters.</p>
          </div>
          <img src={mazeApi} />
        </li>

        <li>
          <div>
            <h2>Chroma Game</h2>
            <p>Bored? We have the perfect game for you, stimulate your color curiosity with Chroma! The game will give you a scrambled set of colors from a gradient, and the user will need to align them in order.</p>
          </div>
          <img src={chroma} />
        </li>
      </ul>
    </section>
  );
};

export default About;
