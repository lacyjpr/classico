import React from 'react';

import itemOne from '../assets/240x120-1.jpg';
import itemTwo from '../assets/240x120-2.jpg';
import itemThree from '../assets/240x120-3.jpg';

const HomeRelated = () => (
  <div className="home__related">
    <h3 className="home__related--h3">Related Posts</h3>

    <div className="home__related--item">
      <div className="home__related--image">
        <img alt="old wrenches" src={itemOne} />
      </div>

      <div className="home__related--copy">
        <a href="#">
          <h4 className="home__related--h4">Lorem ipsum dolor</h4>
        </a>
        <p>
          Accumsan facilisis aptent aliquam phasellus parturient vivamus
          inceptos felis, ligula quisque metus dictumst.
        </p>
        <hr />
      </div>
    </div>

    <div className="home__related--item">
      <div className="home__related--image">
        <img alt="volcanic mountain" src={itemTwo} />
      </div>

      <div className="home__related--copy">
        <a href="#">
          <h4 className="home__related--h4">Lorem ipsum dolor</h4>
        </a>
        <p>
          Accumsan facilisis aptent aliquam phasellus parturient vivamus
          inceptos felis, ligula quisque metus dictumst.
        </p>
        <hr />
      </div>
    </div>

    <div className="home__related--item">
      <div className="home__related--image">
        <img alt="skyscrapers from below" src={itemThree} />
      </div>

      <div className="home__related--copy">
        <a href="#">
          <h4 className="home__related--h4">Lorem ipsum dolor</h4>
        </a>
        <p>
          Accumsan facilisis aptent aliquam phasellus parturient vivamus
          inceptos felis, ligula quisque metus dictumst.
        </p>
        <hr />
      </div>
    </div>
  </div>
);

export default HomeRelated;
