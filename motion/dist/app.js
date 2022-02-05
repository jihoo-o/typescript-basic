import { VideoComponent } from './components/page/item/video.js';
import { ImageComponent } from './components/page/item/image.js';
import { PageComponent } from './components/page/page.js';
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attatchTo(appRoot);
        const image = new ImageComponent('Image title', 'https://i.picsum.photos/id/516/200/300.jpg?hmac=hMEuvTcrLNhrMSSGnaRit4YgalzJJ66stNu-UT70DKw');
        image.attatchTo(appRoot, 'beforeend');
        const video = new VideoComponent('video title', 'https://www.youtube.com/watch?v=qwNCwzNOxk4');
        video.attatchTo(appRoot, 'beforeend');
    }
}
new App(document.querySelector('.document'));
