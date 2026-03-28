import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}> Experience culinary excellence where tradition meets innovation. Every dish tells a story, crafted with precision and passion using the finest locally-sourced ingredients. From our kitchen to your table, we invite you on a gastronomic journey that awakens the senses and creates unforgettable moments.</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.Hero_image} alt="header_img" />
    </div>
  </div>
);

export default Header;
