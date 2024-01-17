import { useState } from 'react'
import './App.css'
import { FiTrash } from 'react-icons/fi'
import { Header } from './components/Header'
import { Search } from './components'

function App() {
  const [todos, setTodos] = useState<string[]>(['aaa'])
  const [value, setValue] = useState('')

  const addTodo = () => {
    if (!!value && !todos.includes(value)) {
      setTodos(prev => [...prev, value])
      setValue('')
    }
  }

  const removeTodo = (index: number) => {
    setTodos(prev => prev.filter((_, idx) => idx !== index))
  }

  return (
    <>
      <Header />
      <Search
        hideButton={!value || todos.includes(value)}
        onSubmit={addTodo}
        onChange={setValue}
        value={value}
      />

      <div>
        {todos.map((todo, index) => (
          <>
            <div key={index}>{todo}</div>
            <button onClick={() => removeTodo(index)}>
              <FiTrash />
            </button>
          </>
        ))}
      </div>
    </>
  )
}

export default App
