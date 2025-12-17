const TodoItem = ({ id, title }: { id: number, title: string }) => {
    return <li>{id}: {title}</li>
}

export default TodoItem
