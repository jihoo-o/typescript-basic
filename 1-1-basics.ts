{
    /**
     * JavaScript
     * Primitive: number, string, boolean, bigInt, symbol, null, undefined
     * Object: function, array ...
     */

    /**
     * TypeScript
     */

    // number
    const num: number = 3;

    // string
    const str: string = 'hello';

    // boolean
    const boal: boolean = false;

    // undefined
    let age: number | undefined;
    age = undefined;
    age = 20;
    function find(): number | undefined {
        return undefined;
    }

    // null
    let person: string | null;
    person = 'k';
    person = null;

    // unknown 💩
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    // any 💩
    let anything: any = 0;
    anything = 'hello';

    // void
    function print(): void {
        console.log('hello');
        return;
    }

    // never
    function throwError(message: string): never {
        // message -> server (log)

        throw new Error(message);
        /* while(true) {

        } */
    }

    // object 💩
    let obj: object;
    function acceptSomeObject(obj: object) {}
    acceptSomeObject({ name: 'k' });
    acceptSomeObject({ animal: 'dog' });
    acceptSomeObject(['name', 'animal']);
}
