import Photo from './assets/images/johnny-africa-kmeKsyjRCoA-unsplash.jpg'
const Homepage = (()=>{
  const main = document.getElementById('content');

  const create_div = (parent, class_name) => {
    const div = document.createElement('div');
    div.className = class_name;
    parent.appendChild(div);
    return div;
  }

  const create_p = (parent, text) => {
    const p = document.createElement('p');
    p.textContent = text;
    parent.appendChild(p);
  }

  const create_h = (h, parent, text) => {
    const headline = document.createElement(h);
    headline.textContent = text;
    parent.appendChild(headline);
  }

  const hero = () => {
    const hero = create_div(main, 'hero')

    let left = document.createElement('div');
    left.className = 'left';
    hero.appendChild(left);

    let img = document.createElement("IMG");
    img.src = Photo;
    img.alt = "hero-image";
    left.appendChild(img);

    let right = document.createElement('div');
    right.className = 'right';
    hero.appendChild(right);
    
    create_h('h1', right, 'A Journey Through Exquisite Flavors');

    create_p(right, 'Authentic meditteranian cuisine at our restaurant');
    create_p(right, 'Join us for a delightful evening of great food and music!');

  }

  const work = () => {
    let work = document.createElement('div');
    work.className = 'work';
    main.appendChild(work);

    let work_hours = document.createElement('div');
    work_hours.className = 'work-hours';
    work.appendChild(work_hours);

    create_h('h2', work_hours, 'Opening Hours');
    create_p(work_hours, 'Monday: 7am - 6pm');
    create_p(work_hours, 'Tuesday: 7am - 8pm');
    create_p(work_hours, 'Wednesday: 7am - 8pm');
    create_p(work_hours, 'Thursday: 7am - 10pm');
    create_p(work_hours, 'Friday: 7am - 10pm');
    create_p(work_hours, 'Saturday: 8am - 10pm');
    create_p(work_hours, 'Sunday: 10am - 10pm');
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