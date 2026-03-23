import "./styles/styles.css";
import { AudioPlay } from "./audio.js";
import { Homepage } from "./home.js";
import { Menu } from "./menu.js"

Homepage.heropage();
const home = document.getElementById('home');
home.addEventListener('click', () => {
  clear();
  Homepage.heropage();
})
const menu = document.getElementById('menu');
menu.addEventListener('click', () => {
  clear();
  Menu.menu();
})
AudioPlay();

const clear = () => {
  const main = document.getElementById('content');
  main.innerHTML = '';
}

