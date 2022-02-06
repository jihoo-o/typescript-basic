import { TaskComponent } from './components/page/item/task.js';
import { VideoComponent } from './components/page/item/video.js';
import { ImageComponent } from './components/page/item/image.js';
import { PageComponent } from './components/page/page.js';
import { NoteComponent } from './components/page/item/note.js';

class App {
    private readonly page: PageComponent;
    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent();
        this.page.attatchTo(appRoot);

        // test
        const image = new ImageComponent(
            'Image title',
            'https://i.picsum.photos/id/516/200/300.jpg?hmac=hMEuvTcrLNhrMSSGnaRit4YgalzJJ66stNu-UT70DKw'
        );
        image.attatchTo(appRoot, 'beforeend');

        const video = new VideoComponent(
            'video title',
            'https://www.youtube.com/embed/ttL-20rz_cE'
        );
        video.attatchTo(appRoot, 'beforeend');

        /* const video2 = new VideoComponent(
            'video title',
            'https://www.youtube.com/watch?v=ttL-20rz_cE'
        );
        video2.attatchTo(appRoot, 'beforeend');

        const video3 = new VideoComponent(
            'video title',
            'https://www.youtube.com/embed/ttL-20rz_cE'
        );
        video3.attatchTo(appRoot, 'beforeend'); */

        const note = new NoteComponent('note title', 'note content');
        note.attatchTo(appRoot, 'beforeend');

        const task = new TaskComponent('task title', 'task content');
        task.attatchTo(appRoot, 'beforeend');
    }
}

new App(document.querySelector('.document')! as HTMLElement);
