import { useEffect, useState } from 'react'
import { Header, List, Search } from './components'
import { Task } from './types'

import './App.css'

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [task, setTask] = useState('')
  const [hideButton, setHideButton] = useState(false)

  const addTask = () => {
    if (!!task && !tasks.map(t => t.task).includes(task)) {
      setTasks(prev => [...prev, { task, done: false }])
      setTask('')
    }
  }

  const removeTask = (index: number) => {
    setTasks(prev => prev.filter((_, idx) => idx !== index))
  }

  const endTask = (index: number) => {
    setTasks(prev =>
      prev.map((item, idx) =>
        idx === index ? { task: item.task, done: !item.done } : item,
      ),
    )
  }

  useEffect(() => {
    setHideButton(!task || tasks.map(t => t.task).includes(task))
  }, [tasks, task])

  return (
    <div className='container'>
      <Header />
      <Search
        disabled={hideButton}
        onSubmit={addTask}
        onChange={setTask}
        value={task}
      />

      <List
        tasks={tasks}
        onRemove={removeTask}
        onEnd={endTask}
      />
    </div>
  )
}

export default App
