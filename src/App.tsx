import { useEffect, useState } from 'react'
import { Header, Search, Todo } from './components'
import { Task } from './types'

import './App.css'

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [task, setTask] = useState('')
  const [hideButton, setHideButton] = useState(false)

  const addTask = () => {
    if (!!task && !tasks.map(t => t.task).includes(task)) {
      setTasks(prev => [...prev, { task, finished: false }])
      setTask('')
    }
  }

  const removeTask = (index: number) => {
    setTasks(prev => prev.filter((_, idx) => idx !== index))
  }

  const finishTask = (index: number) => {
    setTasks(prev =>
      prev.map((item, idx) =>
        idx === index
          ? { task: item.task, finished: !item.finished }
          : item,
      ),
    )
  }

  useEffect(() => {
    setHideButton(!task || tasks.map(t => t.task).includes(task))
  }, [tasks, task])

  return (
    <>
      <Header />
      <Search
        hideButton={hideButton}
        onSubmit={addTask}
        onChange={setTask}
        value={task}
      />

      <div>
        {tasks.map((item, index) => (
          <Todo
            key={index}
            item={item}
            onRemove={() => removeTask(index)}
            onFinish={() => finishTask(index)}
          />
        ))}
      </div>
    </>
  )
}

export default App
