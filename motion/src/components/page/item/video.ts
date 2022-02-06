import { BaseComponent } from '../../component.js';

export class VideoComponent extends BaseComponent<HTMLElement> {
    constructor(title: string, url: string) {
        super(`
            <section class="video">
                <p class="video__title">title</p>
                <div class="video__player">
                    <iframe 
                        class="video__iframe" 
                    </iframe>
                </div>
            </section>`);

        const videoElement = this.element.querySelector(
            '.video__iframe'
        )! as HTMLIFrameElement;

        // -> Error state
        const convertedUrl = this.convertToEmbeddedUrl(url);
        if (convertedUrl === '') {
            window.alert('invalid video url!');
            return;
        } else {
            videoElement.src = convertedUrl;
        }

        const titleElement = this.element.querySelector(
            '.video__title'
        )! as HTMLParagraphElement;
        titleElement.textContent = title;
    }

    private convertToEmbeddedUrl(url: string): string {
        const reg =
            /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-_]{11}))|(?:youtu.be\/([a-zA-Z0-9-_]{11})))/;
        const match = url.match(reg);
        const videoId = match ? match[1] || match[2] : undefined;
        if (videoId) {
            return `https://www.youtube.com/embed/${videoId}`;
        } else {
            return '';
        }
    }
}
