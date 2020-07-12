import MediaPlayer from "./MediaPlayer";
import Autoplay from "../plugins/Autoplay";
import AutoPause from "../plugins/AutoPause";
import Ads from "../plugins/Ads/index";

const video = document.querySelector("video");
const playButton: HTMLElement = document.getElementById("playButton");
const pauseButton: HTMLElement  = document.getElementById("muteButton");

const player = new MediaPlayer({
	el: video,
	plugins: [new Autoplay(), new AutoPause(), new Ads()]
});

playButton.onclick = () => player.togglePlay();
pauseButton.onclick = () => player.toggleMute();


