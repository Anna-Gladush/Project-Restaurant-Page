import myAudioResource from './assets/audio/traditional-greek-music.mp3';
const AudioPlay = () => {
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
}

export { AudioPlay }
