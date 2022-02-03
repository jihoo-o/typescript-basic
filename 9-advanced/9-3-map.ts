{
    type Video = {
        title: string;
        author: string;
        description: string;
    };

    // 💩
    /* type VideoOptional = {
        title?: string;
        author?: string;
    }; */

    // ✨
    type Optional<T> = {
        [P in keyof T]?: T[P]; // <-> for...in
    };

    // 1
    type VideoOptional = Optional<Video>;

    // 2
    type Animal = {
        name: String;
        age: number;
    };
    const animal: Optional<Animal> = {
        name: 'dog',
    };

    // 3
    type VideoOptioanlWithComment = Optional<Video> & {
        comment: string;
    };
    const videoWithComment: VideoOptioanlWithComment = {
        title: 'top 10',
        comment: 'awesome',
    };

    // ✨
    type ReadOnly<T> = {
        readonly [P in keyof T]: T[P];
    };
    const video: ReadOnly<Video> = {
        title: 'hi',
        author: 'liz',
        description: 'lalala',
    };
    // video.title = 'hello' ❌

    // ✨
    type Nullable<T> = { [P in keyof T]: T[P] | null };
    const obj2: Nullable<Video> = {
        title: null,
        author: null,
        description: null,
    };

    // ✨
    type Proxy<T> = {
        get(): T;
        set(value: T): void;
    };
    // wrap!
    type Proxify<T> = {
        [P in keyof T]: Proxy<T[P]>;
    };
}
