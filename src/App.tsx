import CompleteButton from "./components/CompleteButton";
import TodoList from "./components/TodoList";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Выучить React" },
    { id: 2, title: "Создать компоненты" },
    { id: 3, title: "Понять stateful/stateless" },
    { id: 4, title: "Задеплоить проект" },
    { id: 5, title: "Сдать домашку" },
  ]);

  const [completedCount, setCompletedCount] = useState(0);

  const handleComplete = () => {
    setTodos(todos.slice(1))
    setCompletedCount(completedCount + 1);
  }

  return (
    <div>
      <TodoList todos={todos} />
      <CompleteButton count={completedCount} onClick={handleComplete} disabled={!todos.length} />
    </div>
  )
}

export default App
