import "./styles/styles.css";
import { Homepage } from "./home.js";
import myAudioResource from './assets/audio/traditional-greek-music.mp3';
// import audio from './assets/music/traditional-greek-music.mp3'
// import audioStop from './assets/images/icons/pause.svg'
const home = document.getElementById('home');
home.addEventListener('click', () => {
  Homepage.heropage()
})

const myAudio = new Audio(myAudioResource);
myAudio.volume = 0.1;
myAudio.loop = true;
myAudio.autoplay = true;

const audioBTN = document.querySelector('.audio-btn');
audioBTN.addEventListener('click', () => {
  if (audioBTN.classList.contains('play')){
    myAudio.pause();
    audioBTN.classList.remove('play');
    audioBTN.classList.add('pause');
  } else if (audioBTN.classList.contains('pause')){
    myAudio.loop = true;
    myAudio.play();
    audioBTN.classList.remove('pause');
    audioBTN.classList.add('play');
  }
})
//   if (audioDisplay.classList.contains(play)) {
//     audioDisplay.bac = audioStop;
//   } else {
//     audioDisplay.src = audioPlay;
//   }
// })


