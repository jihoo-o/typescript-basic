{
    const BEANS_GRAM_PER_SHOT: number = 7;
    let coffeeBeans: number = 0;

    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    function makeCoffe(shots: number): CoffeeCup {
        if (coffeeBeans < shots * BEANS_GRAM_PER_SHOT) {
            throw new Error('Not enough coffee beans!');
        } else {
            coffeeBeans -= shots * BEANS_GRAM_PER_SHOT;
            return {
                shots,
                hasMilk: false,
            };
        }
    }

    coffeeBeans += 3 * BEANS_GRAM_PER_SHOT;
    const coffee = makeCoffe(2);
    console.log(coffee);
}
