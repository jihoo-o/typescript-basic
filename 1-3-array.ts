{
    // Array
    const fruits: string[] = ['🍅', '🍌'];
    const scores: number[] = [1, 3, 4];
    /* <->
    const scores: Array<number> = [1, 3, 4]; */
    function printArray(fruits: readonly string[]) {}

    // Tuple -> interface, type alias, class
    let student: [string, number];
    student = ['name', 123];
    student[0]; // name
    student[1]; // 123
}
