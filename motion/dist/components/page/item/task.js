import { BaseComponent } from '../../component.js';
export class TaskComponent extends BaseComponent {
    constructor(title, body) {
        super(`
            <section class="task">
                <input type="checkbox" />
                <div class="task__holder">
                    <p class="task__title">title</p>
                    <p class="task__content">contents</p>
                </div>
            </section>`);
        const titleElement = this.element.querySelector('.task__title');
        titleElement.textContent = title;
        const contentElement = this.element.querySelector('.task__content');
        contentElement.textContent = body;
    }
}
