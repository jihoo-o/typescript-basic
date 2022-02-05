{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    interface CommercialCoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
        fillCoffeeBeans(beans: number): void;
        clean(): void;
    }

    class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
        private static BEANS_GRAM_PER_SHOT: number = 7; // class level
        private coffeeBeans: number = 0; // instance (object) level

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans);
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            } else {
                this.coffeeBeans += beans;
            }
        }

        clean() {
            console.log('cleaning the machine...🧼');
        }

        private grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`);
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
        }

        private preheat() {
            console.log('heatingi up... 🔥');
        }

        private extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots} shots...☕️`);
            return {
                shots,
                hasMilk: false,
            };
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    /**
     * 인터페이스로 타입 제한하기
     */

    // Example 1
    const maker1: CoffeeMachine = CoffeeMachine.makeMachine(32);
    maker1.fillCoffeeBeans(30);
    maker1.makeCoffee(2);

    const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
    maker2.fillCoffeeBeans(30);
    maker2.makeCoffee(2);
    maker2.clean();

    // Example 2
    class AmateurUser {
        constructor(private machine: CoffeeMaker) {}
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
        }
    }

    class ProBarista {
        constructor(private machine: CommercialCoffeeMaker) {}
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            this.machine.fillCoffeeBeans(40);
            this.machine.clean();
        }
    }

    // Exapmle 3
    const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
    const amateur = new AmateurUser(maker);
    const pro = new ProBarista(maker);
    amateur.makeCoffee();
    pro.makeCoffee();
}
