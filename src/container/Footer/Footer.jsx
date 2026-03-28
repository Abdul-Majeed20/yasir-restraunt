import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">NH-22 National Indus Highway, Jamshoro, Sindh, Pakistan</p>
        <p className="p__opensans">+92 22 1234567</p>
        <p className="p__opensans">+92 300 1234567</p>
        <p className="p__opensans">info@yasirrestaurant.com</p>
      </div>

      <div className="app__footer-links_logo">
        <h2 id='app__navbar-logo'>Yasir Restaurant</h2>
        <p className="p__opensans">&quot;Serving authentic Pakistani flavors with warmth and hospitality since 2010.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Thursday:</p>
        <p className="p__opensans">11:00 am - 12:00 am</p>
        <p className="p__opensans">Friday - Sunday:</p>
        <p className="p__opensans">11:00 am - 02:00 am</p>
        <p className="p__opensans" style={{ marginTop: '1rem', color: '#64FFDA' }}>Open 7 Days a Week</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">© 2024 Yasir Restaurant. All rights reserved. | Built with ❤️ in Jamshoro</p>
    </div>

  </div>
);

export default Footer;