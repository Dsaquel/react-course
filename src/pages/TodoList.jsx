import { useState } from 'react'
import FormTodoList from '../components/Todo-list/FormTodoList'
import Todos from '../components/Todo-list/Todos'

const TodoList = () => {
  const [todos, setTodos] = useState(['blabla', 'blibli'])
  return (
    <div>
      <FormTodoList setTodos={setTodos} />
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default TodoList
