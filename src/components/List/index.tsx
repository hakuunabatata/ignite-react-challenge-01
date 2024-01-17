import { Info, Todo } from '..'
import { Task } from '../../types'
import { FaClipboard as ClipboardIcon } from 'react-icons/fa'
import './style.css'

interface Props {
  tasks: Task[]
  onRemove: (index: number) => void
  onEnd: (index: number) => void
}

export const List = ({ onRemove, onEnd, tasks }: Props) => {
  return (
    <div className='listContainer'>
      <Info
        totalTasks={tasks.length}
        totalDone={tasks.filter(({ done }) => done).length}
      />
      {tasks?.length ? (
        tasks.map((item, index) => (
          <Todo
            key={index}
            item={item}
            onRemove={() => onRemove(index)}
            onFinish={() => onEnd(index)}
          />
        ))
      ) : (
        <div className='emptyContainer'>
          <ClipboardIcon />
          <div className='emptyText'>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      )}
    </div>
  )
}
