class AutoPause {

    constructor(){
        this.threshold = 0.25
    }



    run(player){

        this.player = player;

        const observer = new IntersectionObserver(this.IntersectionHandler, {
            threshold: this.threshold
        });

        observer.observe(this.player.media);


    }

    IntersectionHandler(entries){
        const entry = entries[0];
        console.log(entry);

        
        const isVisible = entry.intersectionRatio >=this.threshold;

        ( isVisible ) ? this.player.play() : this.player.pause();

        
        
    }
}

export default AutoPause;