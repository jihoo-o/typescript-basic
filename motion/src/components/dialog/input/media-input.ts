import { BaseComponent } from '../../component.js';

export type MediaItem = {
    title: string;
    url: string;
};

export class MediaInputDialog extends BaseComponent<HTMLElement> {
    constructor() {
        super(`
        <div>
            <div class="dialog__holder">
                <label for="title" class="dialog-title">title</label>
                <input type="text" id="title"/>
            </div>
            <div class="dialog__holder">
                <label for="url" class="dialog-url">url</label>
                <input type="text" id="url"/>
            </div>
        </div>`);
    }

    getInfo(): MediaItem {
        const title = ((
            this.element.querySelector('#title') as HTMLInputElement
        ).value! || '') as string;
        const url = ((this.element.querySelector('#url') as HTMLInputElement)
            .value! || '') as string;
        return { title, url };
    }
}
