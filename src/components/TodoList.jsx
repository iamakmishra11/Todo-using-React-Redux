import TodoItem from "./todoItem";
import { useSelector } from "react-redux";

function TodoList () {
    const todos = useSelector(state => state.todoState.todos)
    return (
        <diV>
            Todo List : <br />
            {todos.map(todoItem => {
                return (
                    <TodoItem key= {todoItem.id} id={todoItem.id} text= {todoItem.text} isCompleted={todoItem.completed} />
                )
            })}
        </diV>
    )
}

export default TodoList;