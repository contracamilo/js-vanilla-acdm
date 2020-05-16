import MediaPlayer from "./MediaPlayer.js";
import Autoplay from "../plugins/Autoplay.js";
import AutoPause from "../plugins/AutoPause.js";

const video = document.querySelector("video");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("muteButton");

const player = new MediaPlayer({
	el: video,
	plugins: [new Autoplay(), new AutoPause()]
});
playButton.onclick = () => player.togglePlay();
pauseButton.onclick = () => player.toggleMute();
