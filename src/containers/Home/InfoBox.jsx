import React from 'react';

import imageOne from '../../assets/310x180-1.jpg';
import imageTwo from '../../assets/310x180-2.jpg';
import imageThree from '../../assets/310x180-3.jpg';
import imageFour from '../../assets/310x180-4.jpg';

const HomeInfoBox = () => (
  <div className="home__info-box">
    <div className="home__info-box--item">
      <img
        className="home__item-image"
        alt="sepia landscape with sun"
        src={imageOne}
      />
      <h4>Lorem ipsum dolor #1</h4>
      <p className="home__info-box--p">
        Lorem ipsum dolor sit amet consectetur adipiscing elit, parturient fames
        odio litora porttitor.
      </p>
      <a href="#" className="btn-like">
        Read More
      </a>
    </div>
    <div className="home__info-box--item">
      <img
        className="home__item-image"
        alt="sepia landscape with sun"
        src={imageTwo}
      />
      <h4>Lorem ipsum dolor #2</h4>
      <p className="home__info-box--p">
        Lorem ipsum dolor sit amet consectetur adipiscing elit, parturient fames
        odio litora porttitor.
      </p>
      <a href="#" className="btn-like">
        Read More
      </a>
    </div>
    <div className="home__info-box--item">
      <img
        className="home__item-image"
        alt="sepia landscape with sun"
        src={imageThree}
      />
      <h4>Lorem ipsum dolor #3</h4>
      <p className="home__info-box--p">
        Lorem ipsum dolor sit amet consectetur adipiscing elit, parturient fames
        odio litora porttitor.
      </p>
      <a href="#" className="btn-like">
        Read More
      </a>
    </div>
    <div className="home__info-box--item">
      <img
        className="home__item-image"
        alt="sepia landscape with sun"
        src={imageFour}
      />
      <h4>Lorem ipsum dolor #4</h4>
      <p className="home__info-box--p">
        Lorem ipsum dolor sit amet consectetur adipiscing elit, parturient fames
        odio litora porttitor.
      </p>
      <a href="#" className="btn-like">
        Read More
      </a>
    </div>
  </div>
);

export default HomeInfoBox;
