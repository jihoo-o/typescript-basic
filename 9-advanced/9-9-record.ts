{
    type PageInfo = {
        title: string;
    };
    type Page = 'home' | 'about' | 'contact';

    /* ✨
    key: Page
    value: PageInfo */
    const nav: Record<Page, PageInfo> = {
        home: { title: 'Home' },
        about: { title: 'About' },
        contact: { title: 'contact' },
    };
}
