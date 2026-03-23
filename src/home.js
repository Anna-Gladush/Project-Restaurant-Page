import Photo from './assets/images/johnny-africa-kmeKsyjRCoA-unsplash.jpg';
import { createDOM } from './createDOM.js';
const Homepage = (()=>{
  const main = document.getElementById('content');

  const hero = () => {
    const hero = createDOM.create_div(main, 'hero');

    const left = createDOM.create_div(hero, 'left');
    createDOM.create_img(Photo, "hero-image", left)

    const right = createDOM.create_div(hero, 'right');

    createDOM.create_h('h1', right, 'A Journey Through Exquisite Flavors');

    createDOM.create_p(right, 'Authentic meditteranian cuisine at our restaurant,');
    createDOM.create_p(right, 'Join us for a delightful evening of great food and music!');
  }

  const work = () => {
    createDOM.create_div(main, 'line')
    const work = createDOM.create_div(main, 'work');

    const work_hours = createDOM.create_div(work, 'work-hours');

    createDOM.create_h('h2', work_hours, 'Opening Hours');
    createDOM.create_p(work_hours, '<span>Monday</span>: 7am - 8pm');
    createDOM.create_p(work_hours, '<span>Tuesday</span>: 7am - 8pm');
    createDOM.create_p(work_hours, '<span>Wednesday</span>: 7am - 8pm');
    createDOM.create_p(work_hours, '<span>Thursday</span>: 8am - 10pm');
    createDOM.create_p(work_hours, '<span>Friday</span>: 8am - 10pm');
    createDOM.create_p(work_hours, '<span>Saturday</span>: 8am - 10pm');
    createDOM.create_p(work_hours, '<span>Sunday</span>: 8am - 10pm');
  }
  const heropage = () => {
    hero();
    work();
  }
  return {
    heropage
  }
})()

export {Homepage}