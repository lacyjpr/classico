import React from 'react';

import imgOne from '../../assets/100x100-1.jpg';
import imgTwo from '../../assets/100x100-2.jpg';
import imgThree from '../../assets/100x100-3.jpg';
import imgFour from '../../assets/100x100-4.jpg';
import imgFive from '../../assets/100x100-5.jpg';
import imgSix from '../../assets/100x100-6.jpg';

const Footer = () => (
  <div className="footer">
    <div className="footer__content">
      <h3 className="footer__content--h3">Habitant porta aliquet</h3>
      <div className="footer__content--gray">
        <p>
          Tincidunt interdum duis cras quis inceptos suscipit sed imperdiet,
          libero molestie convallis habitant.
        </p>
        <p>
          Curae mollis nullam dapibus curabitur hendrerit arcu duis, platea
          vitae euismod diam cursus.
        </p>
      </div>
    </div>

    <div className="footer__content">
      <h3 className="footer__content--h3">Lectus ridiculus ult</h3>
      <div className="footer__content--box">
        <div>
          <a href="#" className="footer__content--link">
            Odio eros eu
          </a>
        </div>
        <div>
          <a href="#" className="footer__content--link">
            Torquent facilisis
          </a>
        </div>
        <div>
          <a href="#" className="footer__content--link">
            Per arcu nascetur
          </a>
        </div>
        <div>
          <a href="#" className="footer__content--link">
            Imperdiet ullamcorper
          </a>
        </div>
        <div>
          <a href="#" className="footer__content--link">
            Quisque tempor
          </a>
        </div>
        <div>
          <a href="#" className="footer__content--link">
            A vel vitae
          </a>
        </div>
      </div>
    </div>

    <div className="footer__content">
      <h3 className="footer__content--h3">Vivamus varius ac</h3>
      <div className="footer__content--box">
        <p>
          A vel vitae velit himenaeos sociis diam eros mollis, ornare augue
          morbi id suscipit.
        </p>
        <hr />
        <p>
          A vel vitae velit himenaeos sociis diam eros mollis, ornare augue
          morbi id suscipit.
        </p>
        <hr />
        <p>
          A vel vitae velit himenaeos sociis diam eros mollis, ornare augue
          morbi id suscipit.
        </p>

        <a href="#" className="btn-like-gray">
          Read More
        </a>
      </div>
    </div>

    <div className="footer__content">
      <h3 className="footer__content--h3">Eget primis nisl</h3>
      <div className="footer__content--box">
        <div className="footer__content--images">
          <div className="footer__content--img-col">
            <img alt="image" src={imgOne} />
            <img alt="image" src={imgTwo} />
            <img alt="image" src={imgThree} />
          </div>
          <div className="footer__content--img-col">
            <img alt="image" src={imgFour} />
            <img alt="image" src={imgFive} />
            <img alt="image" src={imgSix} />
          </div>
        </div>

        <p>
          Felis sapien bibendum mollis magnis duis tellus pharetra, facilisis
          nascetur hac phasellus condimentum.
        </p>
        <a href="#" className="btn-like-gray">
          Browse
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
