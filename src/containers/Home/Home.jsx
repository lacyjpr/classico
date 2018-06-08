import React from 'react';

import homeImg from '../../assets/home.jpg';
import InfoBox from './InfoBox';
import IntroBox from './IntroBox';
import Related from './Related';
import Categories from './Categories';
import Useful from './Useful';

import './home.scss';

const Home = () => (
  <div className="home">
    <img className="home__image" alt="sepia city skyline" src={homeImg} />
    <h2>Introduction</h2>
    <p className="home__intro">
      Lorem ipsum dolor sit amet consectetur adipiscing, elit purus volutpat
      duis eget mus arcu, pharetra nisi parturient vestibulum quisque.
    </p>
    <InfoBox />
    <div className="home__bottom-content">
      <IntroBox />
      <Related />
      <div className="home__links">
        <Categories />
        <Useful />
      </div>
    </div>
  </div>
);

export default Home;
