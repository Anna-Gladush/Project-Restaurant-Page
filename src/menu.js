import Photo from './assets/images/trireme.png'
const Menu = (() => {
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
    return p;
  }

  const create_h = (h, parent, text) => {
    const headline = document.createElement(h);
    headline.textContent = text;
    parent.appendChild(headline);
    return headline;
  }

  const create_img = (src, alt, parent) => {
    const img = document.createElement("IMG");
    img.src = src;
    img.alt = alt;
    parent.appendChild(img);
    return img;
  }

  const card = (img, name, description, price) => {
    const grid = document.querySelector('.grid')
    const card = create_div(grid, 'card');
    const img_div = create_div(card, 'img-div');
    create_img(img, name, img_div);
    const desc_div = create_div(card, 'description-div');
    create_h('h2', img_div, name);
    create_p(img_div, description);
    const count = `$  ${price}`;
    create_p(desc_div, count);
    const btn = document.createElement('button');
    btn.classList = 'add';
    desc_div.appendChild(btn);
  }
  const menu = () => {
    const menuHead = create_h('h1', main, 'Our Menu');
    menuHead.className = 'menu-heading';
    create_div(main, 'grid');
    card(Photo, 'Greek Salad', 'salad...', '12.00');
    card(Photo, 'Greek Salad', 'salad...', '12.00');
    card(Photo, 'Greek Salad', 'salad...', '12.00');
    card(Photo, 'Greek Salad', 'salad...', '12.00');
    card(Photo, 'Greek Salad', 'salad...', '12.00');
    card(Photo, 'Greek Salad', 'salad...', '12.00');
  }
  return {
    menu
  }
})()

export { Menu }