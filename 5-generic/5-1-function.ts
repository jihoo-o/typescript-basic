{
    // 💩 check only NUMBER!
    function checkNotNullNumber(arg: number | null): number {
        if (arg == null) {
            throw new Error('not valid number');
        }
        return arg;
    }

    // 💩 what about 'any'?
    function checkNotNullAny(arg: any | null): any {
        if (arg == null) {
            throw new Error('not valid number');
        }
        return arg;
    }

    const result = checkNotNullAny(123); // Now result doesn't know the type. This is unsafe

    // ✨ Generic
    function checkNotNull<T>(arg: T | null): T {
        if (arg == null) {
            throw new Error('not valid number');
        }
        return arg;
    }
    const number = checkNotNull(123);
    const boal: boolean = checkNotNull(true);
}
