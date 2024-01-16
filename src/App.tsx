import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState<string[]>(['aaa'])
  const [value, setValue] = useState('')

  const addTodo = () => {
    if (!todos.includes(value)) {
      setTodos(prev => [...prev, value])
      setValue('')
    }
  }

  const removeTodo = (index: number) => {
    setTodos(prev => prev.filter((_, idx) => idx !== index))
  }

  return (
    <>
      <input
        type='text'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button
        onClick={addTodo}
        disabled={!value || todos.includes(value)}
      >
        Add
      </button>
      <div>
        {todos.map((todo, index) => (
          <>
            <div key={index}>{todo}</div>
            <button onClick={() => removeTodo(index)}>Remove</button>
          </>
        ))}
      </div>
    </>
  )
}

export default App
