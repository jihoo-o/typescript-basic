import { BaseComponent } from '../../component.js';
import { TextItem } from '../../dialog/input/text-input.js';

export class NoteComponent extends BaseComponent<HTMLElement> {
    constructor({ title, body }: TextItem) {
        super(`
            <section class="note">
                <p class="note__title">title</p>
                <p class="note__content">contents</p>
            </section>`);

        const titleElement = this.element.querySelector(
            '.note__title'
        )! as HTMLParagraphElement;
        titleElement.textContent = title;

        const contentElement = this.element.querySelector(
            '.note__content'
        )! as HTMLParagraphElement;
        contentElement.textContent = body;
    }
}
