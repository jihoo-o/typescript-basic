import { BaseComponent } from '../../component.js';

export class NoteComponent extends BaseComponent<HTMLElement> {
    constructor(title: string, body: string) {
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
