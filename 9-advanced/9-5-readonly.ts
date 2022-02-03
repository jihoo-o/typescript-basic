{
    type ToDo = {
        title: string;
        description: string;
    };

    // 💩
    /* function display(todo: ToDo) {
        todo.title = 'change!' 
    } */

    // ✨
    function display(todo: Readonly<ToDo>) {
        // todo.title = 'change!'; ❌
    }
}
