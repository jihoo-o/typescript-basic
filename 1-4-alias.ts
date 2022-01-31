{
    /**
     * Type Aliases
     */
    type Text = string;
    const name: Text = 'Jane';
    const address: Text = 'Liz';
    type Student = {
        name: string;
        age: number;
    };
    const student: Student = {
        name: 'sh',
        age: 20,
    };

    /**
     * String Literal Types
     */
    type Name = 'name';
    let shName: Name;
    shName = 'name';
    type JSON = 'json';
    const json: JSON = 'json';

    type Boal = true;
    const isCat: Boal = true;
}
