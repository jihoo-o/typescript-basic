{
    interface Either<L, R> {
        left: () => L;
        right: () => R;
    }

    // leftValue와 rightValue의 타입을 유연하게
    class SimpleEither<L, R> implements Either<L, R> {
        constructor(private leftValue: L, private rightValue: R) {}

        left(): L {
            return this.leftValue;
        }

        right(): R {
            return this.rightValue;
        }
    }

    const either: Either<number, number> = new SimpleEither(1, 5);
    console.log(either.left());
    console.log(either.right());
    const best = new SimpleEither(4, 'hello');
    console.log(either.left());
    console.log(either.right());
}
