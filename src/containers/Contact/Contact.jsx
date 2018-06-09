import React from 'react';

import contactImg from '../../assets/contact.jpg';

import './contact.scss';

const Contact = () => (
  <div className="contact">
    <img
      className="contact__image"
      alt="city at night reflected in water"
      src={contactImg}
    />
    <h2>Contact Page</h2>
  </div>
);

export default Contact;
