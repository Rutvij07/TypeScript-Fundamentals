function showTodo(todo) {
    return todo.title + ':' + todo.text;
}
var myTodo = { title: 'Avengers', text: 'Earth is on Holiday' };
console.log(showTodo(myTodo));
