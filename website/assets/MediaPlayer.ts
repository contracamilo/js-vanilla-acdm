class MediaPlayer {
	media: HTMLMediaElement;
	plugins: Array<any>;

	constructor(config: any) {
		this.media = config.el;
		this.plugins = config.plugins || [];
		this.initPlugins();
	}

	private initPlugins() {
		this.plugins.forEach((plugin) => {
			plugin.run(this);
		});
	}

	play() {
		this.media.play();
	}

	pause() {
		this.media.pause();
	}

	toggleMute() {
		this.media.muted = !this.media.muted;
	}

	togglePlay() {
		if (this.media.paused) {
			this.play();
		} else {
			this.pause();
		}
	}
}

if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("./../sw.js").catch((error) => console.log(error.message));
}

export default MediaPlayer;
