{
    const x = {};
    const y = {};
    console.log(x);
    console.log(y);
    console.log(x.__proto__ === y.__proto__);

    /**
     * 상속 구조
     * array -> Array -> Object
     */
    const array = [];
    console.log(array);

    console.clear();

    /**
     * 상속 구조
     * machine -> CoffeeMachine -> Object
     */
    function CoffeeMachine(beans) {
        this.beans = beans;

        // Instance member level
        /* this.makeCoffee = (shots) => {
            console.log('making..☕️');
        }; */
    }

    // Prototype member level
    CoffeeMachine.prototype.makeCoffee = (shots) => {
        console.log('making..☕️');
    };

    const machine1 = new CoffeeMachine(10);
    const machine2 = new CoffeeMachine(20);
    console.log(machine1);
    console.log(machine2);

    /**
     * 상속 구조
     * latteMachine -> LatteMachine -> CoffeeMachine -> Object
     */
    function LatteMachine(milk) {
        this.milk = milk;
    }
    LatteMachine.prototype = Object.create(CoffeeMachine.prototype);
    const latteMachine = new LatteMachine(123);
    console.log(latteMachine);
    latteMachine.makeCoffee(2);
}
