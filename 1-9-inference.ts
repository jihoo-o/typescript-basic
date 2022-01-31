{
    /**
     * Type inrefence
     */
    let text = 'hello';
    // text = 1; // -> X

    function print(message = 'hello') {
        console.log(message);
    }
    print('hello');
    // print(1); // -> X

    function add(x: number, y: number) {
        return x + y; // -> return number
    }
    const result = add(1, 2); // -> number
}
