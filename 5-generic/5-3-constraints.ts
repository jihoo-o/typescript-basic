{
    interface Employee {
        pay(): void;
    }

    class FullTimeEmployee implements Employee {
        pay() {
            console.log('full time!');
        }

        workFullTime() {}
    }

    class PartTimeEmployee implements Employee {
        pay() {
            console.log('part time!');
        }
        workPartTime() {}
    }

    /**
     *  세부적인 타입을 인자로 받아 정말 추상적인 타입으로 다시 리턴하는 함수 💩
     * - 여기서 return되는 Employee는
     *   세부 클래스 정보 workFullTime, workPartTime을 잃어버림
     */
    function payBad(employee: Employee): Employee {
        employee.pay();
        return employee;
    }

    const kane = new FullTimeEmployee();
    const bob = new PartTimeEmployee();
    kane.workFullTime();
    bob.workPartTime();

    /**
     *  잃어버려서 사용할 수 없음 ꩜
     * const kaneAfterPay = payBad(kane);
     * const bobAfterPay = payBad(bob);
     * kane.workFullTime(); 😵
     * bob.workPartTime(); 😵
     */

    /**
     * Assertion으로 접근 가능하지만 .. 💩
     * const kaneAfterPay = payBad(kane) as FullTimeEmployee;
     * const bobAfterPay = payBad(bob) as PartTimeEmployee;
     * kane.workFullTime();
     * bob.workPartTime();
     */

    // ✨ Generic - contraints
    function pay<E extends Employee>(employee: E): E {
        employee.pay();
        return employee;
    }
    const halsey = new FullTimeEmployee();
    const ruke = new PartTimeEmployee();
    const halseyAfterPay = pay(halsey);
    const rukeAfterPay = pay(ruke);
    halseyAfterPay.workFullTime();
    rukeAfterPay.workPartTime();
}
