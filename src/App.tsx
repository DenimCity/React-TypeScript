import React, { useState, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';


interface ITodo {
  text: string
  completed: boolean
}
type FormElement = React.FormEvent<HTMLFormElement>
export default function App(): JSX.Element {
  const [value, setValue] = useState<string>('')
  const [todos, setTodos] = useState<ITodo[]>([])




  const handleSubmit = (e: FormElement): void => {
    e.preventDefault()
    addToDo(value)
    setValue('')
  }

  const addToDo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, completed: false }]
    setTodos(newTodos)
  }

  const completeTodo = (index: number): void => {
    const newTodo: ITodo[] = [...todos]
    newTodo[index].completed = !newTodo[index].completed
    setTodos(newTodo)
  }

  const removeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }
  return (
    <Fragment >
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} required />
        <button type="submit">Add Todo</button>
      </form>
      <section>
        {todos.map((todo: ITodo, index: number) => (
          <Fragment key={index}>
            <div style={{ textDecoration: todo.completed ? 'line-through' : '' }} key={index}>{todo.text}</div>
            <button type="button" onClick={() => completeTodo(index)}>{todo.completed ? 'Incomplete' : 'Complete'}</button>
            <button type="button" onClick={() => removeTodo(index)}>x</button>
          </Fragment>
        )
        )}
      </section>
    </Fragment>
  );
}


