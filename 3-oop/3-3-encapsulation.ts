{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    class CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT: number = 7; // class level
        private coffeeBeans: number = 0; // instance (object) level

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            } else {
                this.coffeeBeans += beans;
            }
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

    const maker1 = CoffeeMaker.makeMachine(32);
    maker1.fillCoffeeBeans(30);
    console.log(maker1.makeCoffee(2));
}
