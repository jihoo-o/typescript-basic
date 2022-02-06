import { BaseComponent, Component } from '../component.js';

export interface Composable {
    addChild(child: Component): void;
}

type OnCloseListener = () => void;
type SectionContainerConstructor = {
    new (): SectionContainer; // 생성자
};

interface SectionContainer extends Component, Composable {
    setOnCloseListener(listener: OnCloseListener): void;
}

export class PageItemComponent
    extends BaseComponent<HTMLElement>
    implements SectionContainer
{
    private closeListener?: OnCloseListener;
    constructor() {
        super(`
        <li class="page-item">
            <section class="page-item__body"></section>
            <div class="page-item__controls">
                <button class="close">x</button>
            </div>
        </li>`);

        const closeBtn = this.element.querySelector(
            '.close'
        )! as HTMLButtonElement;
        closeBtn.onclick = () => {
            this.closeListener && this.closeListener();
        };
    }

    addChild(child: Component) {
        const container = this.element.querySelector(
            '.page-item__body'
        )! as HTMLElement;
        child.attatchTo(container);
    }

    setOnCloseListener(listener: OnCloseListener) {
        this.closeListener = listener;
    }
}

export class PageComponent
    extends BaseComponent<HTMLUListElement>
    implements Composable
{
    constructor(private pageItemConstructor: SectionContainerConstructor) {
        super('<ul class="page"></ul>');
    }

    addChild(section: Component) {
        const itemWrapper = new this.pageItemConstructor();
        itemWrapper.addChild(section);
        itemWrapper.attatchTo(this.element, 'beforeend');
        itemWrapper.setOnCloseListener(() => {
            itemWrapper.removeFrom(this.element);
        });
    }
}
