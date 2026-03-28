import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Get in Touch" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">NH-22 National Indus Highway, Near Mehran University, Jamshoro, Sindh, Pakistan</p>
        <p className="p__cormorant" style={{ color: '#64FFDA', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Monday - Thursday: 11:00 am - 12:00 am</p>
        <p className="p__opensans">Friday - Sunday: 11:00 am - 2:00 am</p>
        <p className="p__opensans" style={{ marginTop: '1rem', color: '#64FFDA' }}>📞 +92 22 1234567</p>
        <p className="p__opensans">📧 info@yasirrestaurant.com</p>
      </div>
      <button 
        type="button" 
        className="custom__button" 
        style={{ marginTop: '2rem' }}
        onClick={() => window.open('https://maps.google.com/?q=Yasir+Restaurant+Rd,+Jamshoro+City,+Jamshoro,+Pakistan', '_blank')}
      >
        Get Directions on Google Maps
      </button>
    </div>

    <div className="app__wrapper_img">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.821119007998!2d68.2751193!3d25.444243299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c7904b090aa51%3A0xc7e2f321cc6b4536!2zWWFzaXIgUmVzdGF1cmFudNmK2KfYs9ixINix2YrYs9m92YjYsdmK2YbZvQ!5e0!3m2!1sen!2ssg!4v1774613785803!5m2!1sen!2ssg" 
        width="100%" 
        height="450" 
        style={{ border: 0, borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Yasir Restaurant Location on Google Maps"
      ></iframe>
    </div>
  </div>
);

export default FindUs;