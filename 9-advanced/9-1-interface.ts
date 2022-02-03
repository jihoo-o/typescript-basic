{
    type PositionType = {
        x: number;
        y: number;
    };

    interface PositionInterface {
        x: number;
        y: number;
    }

    // ✌🏻 - object
    const obj1: PositionType = {
        x: 1,
        y: 1,
    };

    const obj2: PositionInterface = {
        x: 1,
        y: 1,
    };

    // ✌🏻 - class
    class Pos1 implements PositionType {
        x: number = 0;
        y: number = 0;
    }

    class Pos2 implements PositionInterface {
        x: number = 0;
        y: number = 0;
    }

    // ✌🏻 - extends
    interface ZPositionInterface extends PositionInterface {
        z: number;
    }
    type ZPositionType = PositionType & { z: number };

    // interface only - 결합
    /* interface PositionInterface {
        z: number;
    } */

    // type alias only - computed properties
    type Person = {
        name: string;
        age: number;
    };
    type Name = Person['name']; // string
}
