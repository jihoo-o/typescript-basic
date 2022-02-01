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

    // Getter, Setter
    class User {
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }
        private internalAge = 4;
        get age(): number {
            return this.internalAge;
        }
        set age(num: number) {
            if (num < 0) {
                throw new Error('age should be over 0');
            }
            this.internalAge = num;
        }
        /**
         *  parameter 앞의 키워드 <->
         *  private firstName: string;
            private lastName: string;
            this.firstName = firstName;
            this.lastName = lastName;
            */
        constructor(private firstName: string, private lastName: string) {}
        set _firstName(firstName: string) {
            this.firstName = firstName;
        }
    }
    const user = new User('Steve', 'Jobs');
    console.log(user.fullName); // Steve Jobs
    user._firstName = 'Jane';
    console.log(user.fullName); // Jane Jobs

    console.log(user.age);
    user.age = 6; // setter
    console.log(user.age);
}
