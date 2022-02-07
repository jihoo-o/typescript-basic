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
import { MediaInputDialog } from './components/dialog/input/media-input.js';
import { TextInputDialog } from './components/dialog/input/text-input.js';

type InputComponentConstructor<T = MediaInputDialog | TextInputDialog> = {
    new (): T;
};

class App {
    private readonly page: Component & Composable;
    constructor(private appRoot: HTMLElement, private dialogRoot: HTMLElement) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attatchTo(this.appRoot);

        this.bindElementToDialog<MediaInputDialog>(
            '#new-image',
            MediaInputDialog,
            (inputDialog: MediaInputDialog) =>
                new ImageComponent({ ...inputDialog.getInfo() })
        );

        this.bindElementToDialog<MediaInputDialog>(
            '#new-video',
            MediaInputDialog,
            (inputDialog: MediaInputDialog) =>
                new VideoComponent({ ...inputDialog.getInfo() })
        );

        this.bindElementToDialog<TextInputDialog>(
            '#new-note',
            TextInputDialog,
            (inputDialog: TextInputDialog) =>
                new NoteComponent({ ...inputDialog.getInfo() })
        );

        this.bindElementToDialog<TextInputDialog>(
            '#new-task',
            TextInputDialog,
            (inputDialog: TextInputDialog) =>
                new TaskComponent({ ...inputDialog.getInfo() })
        );
    }

    private bindElementToDialog<T extends MediaInputDialog | TextInputDialog>(
        selector: string,
        InputComponent: InputComponentConstructor<T>,
        makeSection: (inputDialog: T) => Component
    ) {
        const element = document.querySelector(selector)! as HTMLButtonElement;
        element.addEventListener('click', () => {
            const dialog = new InputDialog();
            const inputDialog = new InputComponent();
            dialog.addChild(inputDialog);
            dialog.attatchTo(this.dialogRoot);

            dialog.setOnCloseListener(() => {
                dialog.removeFrom(this.dialogRoot);
            });
            dialog.setOnSubmitListener(() => {
                const section = makeSection(inputDialog);
                this.page.addChild(section);
                dialog.removeFrom(this.dialogRoot);
            });
        });
    }
}

new App(document.querySelector('.document')! as HTMLElement, document.body);
