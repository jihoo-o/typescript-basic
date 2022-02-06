import { Composable } from './../page/page';
import { BaseComponent, Component } from '../component.js';

type OnCloseListener = () => void;
type OnSubmitListener = () => void;

export class InputDialog
    extends BaseComponent<HTMLElement>
    implements Composable
{
    closeListener?: OnCloseListener;
    submitListener?: OnSubmitListener;

    constructor() {
        super(`
            <div class="dialog-container">
                <section class="dialog">
                    <button class="close">x</button>
                    <div id="dialog__body"></div>
                    <button class="dialog__submit">add</button>
                </section>
            </div>
        `);
        const closeBtn = this.element.querySelector('.close')! as HTMLElement;
        closeBtn.onclick = () => {
            this.closeListener && this.closeListener();
        };

        const submit = this.element.querySelector(
            '.dialog__submit'
        )! as HTMLElement;
        submit.onclick = () => {
            this.submitListener && this.submitListener();
        };
    }
    setOnCloseListener(listener: OnCloseListener) {
        this.closeListener = listener;
    }
    setOnSubmitListener(listener: OnSubmitListener) {
        this.submitListener = listener;
    }
    addChild(child: Component): void {
        const body = this.element.querySelector(
            '#dialog__body'
        )! as HTMLElement;
        child.attatchTo(body);
    }
}

/* <div class="dialog__holder">
    <p class="dialog-title">title</p>
    <input type="text" class="dialog-title-input" />
</div>
<div class="dialog__holder">
    <p class="dialog-body">body</p>
    <textarea
        name="dialog-body"
        id="dialog-body"
        rows="8"
        class="dialog-body-input"
        maxlength="300"
    ></textarea>
</div> */
