class App {
    constructor(root: HTMLElement) {
        root.innerHTML = '<div>tmp</div>';
    }
}

new App(document.querySelector('.document') as HTMLElement);
