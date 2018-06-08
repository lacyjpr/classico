import React from 'react';

import homeImg from '../../assets/home.jpg';
import HomeInfoBox from './HomeInfoBox';
import HomeIntroBox from './HomeIntroBox';
import HomeRelated from './HomeRelated';
import HomeCategories from './HomeCategories';
import HomeUseful from './HomeUseful';

import './home.scss';

const Home = () => (
  <div className="home">
    <img className="home__image" alt="sepia city skyline" src={homeImg} />
    <h2>Introduction</h2>
    <p className="home__intro">
      Lorem ipsum dolor sit amet consectetur adipiscing, elit purus volutpat
      duis eget mus arcu, pharetra nisi parturient vestibulum quisque.
    </p>
    <HomeInfoBox />
    <div className="home__bottom-content">
      <HomeIntroBox />
      <HomeRelated />
      <div className="home__links">
        <HomeCategories />
        <HomeUseful />
      </div>
    </div>
  </div>
);

export default Home;
