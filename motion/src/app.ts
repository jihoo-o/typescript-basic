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

class App {
    private readonly page: Component & Composable;
    constructor(appRoot: HTMLElement) {
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
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(document.body);
            });
            dialog.setOnSubmitListener(() => {
                // 섹션을 만들어서 페이지에 추가함
                dialog.removeFrom(document.body);
            });
            dialog.attatchTo(document.body);
        });
    }
}

new App(document.querySelector('.document')! as HTMLElement);
