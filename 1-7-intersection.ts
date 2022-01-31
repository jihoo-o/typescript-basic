{
    /**
     * Intersection Types: &
     */
    type Student = {
        name: string;
        score: number;
    };

    type Worker = {
        employeeId: number;
        work: () => void;
    };

    function internWork(person: Student & Worker) {
        console.log(
            person.name,
            person.score,
            person.employeeId,
            person.work()
        );
    }

    internWork({
        name: 'sh',
        score: 10,
        employeeId: 1,
        work: () => {},
    });
}
