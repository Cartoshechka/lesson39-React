import TodoItem from "./TodoItem";

const TodoList = ({ todos }: { todos: { id: number, title: string }[] }) => {
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem key={todo.id} {...todo} />
            ))}
        </ul>
    )
}

export default TodoList
