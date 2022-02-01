{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    class CoffeeMaker {
        static BEANS_GRAM_PER_SHOT: number = 7; // class level
        coffeeBeans: number = 0; // instance (object) level

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        makeCoffee(shots: number): CoffeeCup {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            } else {
                this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
                return {
                    shots,
                    hasMilk: false,
                };
            }
        }
    }

    // constructor
    const maker1 = new CoffeeMaker(32);
    console.log(maker1.makeCoffee(2));

    // static makeMachine
    const maker2 = CoffeeMaker.makeMachine(16);
}
