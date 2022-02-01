{
    /**
     * Type Assertions 💩
     */

    function jsStrFunc(): any {
        return 'hello';
    }
    const result = jsStrFunc();

    // result.length // -> X
    console.log((result as string).length);
    console.log((<string>result).length);

    // 😱
    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1));

    // !
    function findNumbers(): number[] | undefined {
        return undefined;
    }
    const numbers = findNumbers();
    numbers!.push(2);

    const button = document.querySelector('class')!;
    console.log(button.nodeValue);
}
