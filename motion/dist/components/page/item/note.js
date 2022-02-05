import { BaseComponent } from '../../component.js';
export class NoteComponent extends BaseComponent {
    constructor(title, body) {
        super(`
            <section class="note">
                <p class="note__title">title</p>
                <p class="note__content">contents</p>
            </section>`);
        const titleElement = this.element.querySelector('.note__title');
        titleElement.textContent = title;
        const contentElement = this.element.querySelector('.note__content');
        contentElement.textContent = body;
    }
}
