import "./styles/styles.css";
import { Homepage } from "./home.js";
// import audioPlay from './assets/images/icons/play.svg'
// import audioStop from './assets/images/icons/pause.svg'
const home = document.getElementById('home');
home.addEventListener('click', () => {
  Homepage.heropage()
})

// const audioDisplay = document.getElementById('audiomic');
// audioDisplay.addEventListener('click', () => {
//   if (audioDisplay.classList.contains(play)) {
//     audioDisplay.bac = audioStop;
//   } else {
//     audioDisplay.src = audioPlay;
//   }
// })