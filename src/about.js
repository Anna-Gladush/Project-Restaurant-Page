import Phone from './assets/images/icons/phone.svg';
import Clock from './assets/images/icons/clock.svg';
import Email from './assets/images/icons/email.svg';
import Map from './assets/images/icons/map.svg';
import Photo from './assets/images/oliver-boyers-sUGp7c63BbM-unsplash.jpg';
import { createDOM } from './createDOM.js';

const About = (()=>{
  const main = document.getElementById('content');
  const section = (parent, src, alt, text1, text2) => {
    const section = createDOM.create_div(parent, 'section');
    createDOM.create_img(src, alt, section)
    const half = createDOM.create_div(section, 'section-text');
    createDOM.create_p(half, text1);
    createDOM.create_p(half, text2);
  }
  const about = () => {
    const info = createDOM.create_div(main, 'contact')
    createDOM.create_h('h1', info, 'Contact Us');
    createDOM.create_p(info, "We'd be happy to recieve your messages!")
    createDOM.create_img(Photo, 'location-photo', info);    
    const div = createDOM.create_div(info, 'about');
    section(div, Phone, 'phone', 'PHONE', '28310-58250');
    section(div, Email, 'email', 'EMAIL', 'odysseas@gmail.com');
    section(div, Map, 'location', 'LOCATION', 'Xanthoudidu 25, Rethymon, 72178, Greece');
    section(div, Clock, 'clock', 'CLOCK', 'Mon – Wed: 7am – 8pm | Thu – Sun: 8am – 10pm');
    section()
  }
  return {
    about
  }
})()

export {About}