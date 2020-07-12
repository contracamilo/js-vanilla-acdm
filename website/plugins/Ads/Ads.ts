import addList from './ad-list';

export interface Ad {
    imageUrl: string,
    title: string,
    url: string
    body: string
}

const ALL_ADS = addList;


class Ads {
    private static instance: Ads;
    private ads: Ad[];

    private constructor() {
        this.initAds();
    }

    static getInstance(){
        if(!Ads.instance){
            Ads.instance = new Ads();
        }

        return Ads.instance 
    }

    private initAds(){
        this.ads = [...ALL_ADS];
    }

    getAd(){
        if(this.ads.length === 0){
            this.initAds();
        }
        return this.ads.pop();
    }
}

export default Ads;