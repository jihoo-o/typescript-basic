import { InputDialog } from './components/dialog/dialog.js';
import { TaskComponent } from './components/page/item/task.js';
import { VideoComponent } from './components/page/item/video.js';
import { ImageComponent } from './components/page/item/image.js';
import {
    Composable,
    PageComponent,
    PageItemComponent,
} from './components/page/page.js';
import { NoteComponent } from './components/page/item/note.js';
import { Component } from './components/component.js';
import {
    MediaInputDialog,
    MediaItem,
} from './components/dialog/input/media-input.js';
/* import {
    TextInputDialog,
    TextItem,
} from './components/dialog/input/text-input.js'; */

class App {
    private readonly page: Component & Composable;
    constructor(appRoot: HTMLElement, dialogRoot: HTMLElement) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attatchTo(appRoot);

        // test
        const image = new ImageComponent(
            'Image title',
            'https://i.picsum.photos/id/516/200/300.jpg?hmac=hMEuvTcrLNhrMSSGnaRit4YgalzJJ66stNu-UT70DKw'
        );
        this.page.addChild(image);

        const video = new VideoComponent(
            'video title',
            'https://www.youtube.com/embed/ttL-20rz_cE'
        );
        this.page.addChild(video);

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
        this.page.addChild(note);

        const task = new TaskComponent('task title', 'task content');
        this.page.addChild(task);

        const imageBtn = document.querySelector(
            '#new-image'
        )! as HTMLButtonElement;
        imageBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const mediaInputDialog = new MediaInputDialog();
            dialog.addChild(mediaInputDialog);
            dialog.attatchTo(dialogRoot);

            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListener(() => {
                const { title, url }: MediaItem = mediaInputDialog.getInfo();
                const newImage = new ImageComponent(title, url);
                this.page.addChild(newImage);
                dialog.removeFrom(dialogRoot);
            });
        });
    }
}

new App(document.querySelector('.document')! as HTMLElement, document.body);
