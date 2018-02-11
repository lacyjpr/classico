import React from 'react';

import introImg from '../assets/660x380.jpg';

const HomeIntroBox = () => (
  <div className="home__intro-box">
    <h4 className="home__intro-box--h4">Ullamcorper lacinia ut dis dictumst</h4>
    <p>Montes dis laoreet faucibus nullam conubia praesent commodo</p>
    <img
      className="home__item-image"
      alt="fancy cup of coffee"
      src={introImg}
    />
    <p>
      Pellentesque cum arcu cursus vulputate interdum class luctus quis nam
      etiam, hendrerit ante maecenas porttitor rutrum donec habitant malesuada
      placerat, nisi litora orci suspendisse posuere eu curabitur dignissim
      vestibulum.
    </p>
    <p>
      Cursus varius vitae ut tortor porttitor suscipit proin lacinia laoreet,
      faucibus condimentum nascetur vehicula ullamcorper sociosqu pretium
      interdum elementum blandit, consequat commodo justo egestas mauris
      tristique gravida pellentesque.
    </p>
    <p>
      Montes netus mollis placerat ornare sociis ultricies duis primis lectus,
      porttitor nullam aenean ac fringilla neque pharetra iaculis molestie
      tincidunt, cum a velit auctor parturient blandit vitae id.
    </p>
    <a href="#" className="btn-like">
      Read More
    </a>
  </div>
);

export default HomeIntroBox;
