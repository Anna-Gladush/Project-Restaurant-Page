import "./styles/styles.css";
import { AudioPlay } from "./audio.js";
import { Homepage } from "./home.js";
import { Menu } from "./menu.js"
import { About } from "./about.js"

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
const about = document.getElementById('about');
about.addEventListener('click', () => {
  clear();
  About.about();
})
AudioPlay();

const clear = () => {
  const main = document.getElementById('content');
  main.innerHTML = '';
}

