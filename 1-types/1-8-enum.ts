{
    /**
     * Enum
     */
    // JavaScript
    const DAYS_ENUM = Object.freeze({
        MONDAY: 0,
        TUESDAY: 1,
        WEDNESDAY: 2,
    });

    // TypeScript
    enum Days {
        Monday, // 0
        Tuesday, // 1
        Wednesday, // 2
        Thursday, // 3
        Friday, // 4
        Saturday, // 5
        Sunday, // 6
    }
    console.log(Days.Tuesday); // 1

    // 💩 타입이 보장되지 않는 경우
    let today: Days = Days.Thursday;
    today = Days.Wednesday;
    today = 10;

    // => union type is better ✨
    type u_Days = 'Monday' | 'Tuesday' | 'Wednesday';
    let u_day: u_Days = 'Monday';
}
