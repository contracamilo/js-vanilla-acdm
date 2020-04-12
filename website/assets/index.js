const video = document.querySelector('video');
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('muteButton');

function MediaPlayer(config) {
  this.media = config.el;
};

MediaPlayer.prototype.play = function() {
  this.media.play();
};

MediaPlayer.prototype.pause = function() {
  this.media.pause();
};

MediaPlayer.prototype.togglePlay = function() {
  if(this.media.paused){
    this.play()
  }else {
    this.pause()
  }
}

const player = new MediaPlayer({el: video});

playButton.onclick = () => player.togglePlay();