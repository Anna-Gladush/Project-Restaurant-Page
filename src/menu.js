import Photo from './assets/images/trireme.png';
import { createDOM } from './createDOM.js';

const Menu = (() => {
  const main = document.getElementById('content');

  const card = (img, name, description, price) => {
    const grid = document.querySelector('.grid')
    const card = createDOM.create_div(grid, 'card');
    const img_div = createDOM.create_div(card, 'img-div');
    createDOM.create_img(img, name, img_div);
    const desc_div = createDOM.create_div(card, 'description-div');
    createDOM.create_h('h2', img_div, name);
    createDOM.create_p(img_div, description);
    const count = `$  ${price}`;
    createDOM.create_p(desc_div, count);
    const btn = document.createElement('button');
    btn.classList = 'add';
    desc_div.appendChild(btn);
  }
  const menu = () => {
    const menuHead = createDOM.create_h('h1', main, 'Our Menu');
    menuHead.className = 'menu-heading';
    createDOM.create_div(main, 'grid');
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