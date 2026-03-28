import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Message" />
      <h1 className="headtext__cormorant">Our Culinary Philosophy</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Every dish we create carries a story of our land, our people, and our unwavering commitment to authentic Pakistani cuisine.</p>
        </div>
        <p className="p__opensans">Since opening our doors in 2010 along the historic NH-22 Indus Highway, our mission has been simple: to serve food that comforts the soul and brings people together. We source our spices from local farmers, prepare each meal with time-honored techniques, and infuse every recipe with the warmth of Pakistani hospitality. Whether it's our signature Sindhi Biryani or slow-cooked Nihari, we pour our hearts into every dish, ensuring that every guest leaves with a smile and a memorable dining experience.</p>
      </div>

      <div className="app__chef-sign">
        <p>Yasir Ali</p>
        <p className="p__opensans">Founder & Executive Chef</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;