import { BaseComponent } from '../../component.js';

export class TaskComponent extends BaseComponent<HTMLElement> {
    constructor(title: string, body: string) {
        super(`
            <section class="task">
                <input type="checkbox" class="task__check"/>
                <div class="task__holder">
                    <p class="task__title">title</p>
                    <p class="task__content">contents</p>
                </div>
            </section>`);

        const titleElement = this.element.querySelector(
            '.task__title'
        )! as HTMLParagraphElement;
        titleElement.textContent = title;

        const contentElement = this.element.querySelector(
            '.task__content'
        )! as HTMLParagraphElement;
        contentElement.textContent = body;
    }
}
