import { useState } from 'react'
import './App.css'
import Logo from './assets/logo.svg'
import { FiTrash } from 'react-icons/fi'
import { FiPlusCircle } from 'react-icons/fi'

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
      <img
        className='logo'
        src={Logo}
        alt='Todo'
      />
      <input
        type='text'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button
        onClick={addTodo}
        disabled={!value || todos.includes(value)}
      >
        <FiPlusCircle />
      </button>
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
