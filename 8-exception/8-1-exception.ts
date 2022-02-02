{
    function readFile(fileName: string): string {
        if (fileName === 'not exist!') {
            throw new Error(`file:${fileName} not exist!`);
        }
        return 'file contents📄';
    }

    function closeFile(fileName: string) {
        console.log('close the file');
    }

    function run() {
        const fileName = 'not exist!';
        try {
            console.log(readFile(fileName));
        } catch (e) {
            console.log(`Error: ${e}`);
            return;
        } finally {
            console.log('finally!');
            closeFile(fileName);
        }
    }

    run();
}
