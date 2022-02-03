{
    const obj = {
        name: 'liz',
    };
    obj.name; // liz
    obj['name']; // liz

    type Animal = {
        name: string;
        age: number;
        gender: 'mail' | 'femail';
    };

    type Name = Animal['name']; // string
    const text: Name = 'Hellog';

    type Gender = Animal['gender']; // 'male' | 'female'

    type Keys = keyof Animal; // name | age | gender
    const key: Keys = 'gender';

    type Person = {
        name: string;
        gender: Animal['gender'];
    };
    const person: Person = {
        name: 'liz',
        gender: 'mail',
    };
}
