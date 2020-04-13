import MediaPlayer from './MediaPlayer.js';

const video = document.querySelector('video');
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('muteButton');


const player = new MediaPlayer({el: video});
playButton.onclick = () => player.togglePlay();