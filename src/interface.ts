 
interface Todo {
    title:string,
    text:string
}

function showTodo(todo:Todo){
    return todo.title+':'+todo.text
}

let myTodo = {title:'Avengers',text:'Earth is on Holiday'}

console.log(showTodo(myTodo));