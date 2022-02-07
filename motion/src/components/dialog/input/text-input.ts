import { BaseComponent } from '../../component.js';

export type TextItem = {
    title: string;
    body: string;
};

export class TextInputDialog extends BaseComponent<HTMLElement> {
    constructor() {
        super(`
        <div>
            <div class="dialog__holder">
                <label for="title">title</label>
                <input type="text" class="dialog-title-input" id="title" />
            </div>
            <div class="dialog__holder">
                <label for="body">body</label>
                <textarea
                    rows="8"
                    id="body"
                    maxlength="300"
                ></textarea>
            </div>
        </div>`);
    }

    getInfo(): TextItem {
        const title = ((
            this.element.querySelector('#title') as HTMLInputElement
        ).value! || '') as string;
        const body = ((this.element.querySelector('#body') as HTMLInputElement)
            .value! || '') as string;
        return { title, body };
    }
}
