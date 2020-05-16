class AutoPause {

    constructor(){
        this.threshold = 0.25
        this.IntersectionHandler = this.IntersectionHandler.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }

    

    run(player){
        console.log(player);
        this.player = player;

        const observer = new IntersectionObserver(this.IntersectionHandler, {
            threshold: this.threshold
        });

        observer.observe(this.player.media);


        document.addEventListener('visibilitychange', this.handleVisibilityChange)

    }

    IntersectionHandler(entries){
        const entry = entries[0];
        console.log(entry);

        
        const isVisible = entry.intersectionRatio >=this.threshold;

        ( isVisible ) ? this.player.play() : this.player.pause();
    
    }

    handleVisibilityChange(){
        const isVisible = document.visibilityState === 'visible';

        ( isVisible ) ? this.player.play() : this.player.pause();
    }
}

export default AutoPause;