import {
  FaTrashAlt as TrashIcon,
  FaCheck as CheckIcon,
} from 'react-icons/fa'
import { Task } from '../../types'
import './style.css'

interface Props {
  item: Task
  onRemove: () => void
  onEnd: () => void
}

export const Todo = ({ item, onRemove, onEnd }: Props) => {
  return (
    <div className='todoContainer'>
      <button
        className={item.done ? 'todoCheckboxChecked' : 'todoCheckbox'}
        onClick={onEnd}
      >
        {item.done && <CheckIcon />}
      </button>
      <div className={item.done ? 'doneTitle' : 'todoTitle'}>
        {item.task}
      </div>
      <button
        className='todoTrash'
        onClick={onRemove}
      >
        <TrashIcon />
      </button>
    </div>
  )
}
