import {
  FiTrash2 as TrashIcon,
  FiCheck as CheckIcon,
} from 'react-icons/fi'
import { Task } from '../../types'
import './styles.css'

interface Props {
  item: Task
  onRemove: () => void
  onFinish: () => void
}

export const Todo = ({ item, onRemove, onFinish }: Props) => {
  return (
    <div className='todoContainer'>
      <button
        className={
          item.finished ? 'todoCheckboxChecked' : 'todoCheckbox'
        }
        onClick={onFinish}
      >
        {item.finished && <CheckIcon />}
      </button>
      <div className={item.finished ? 'finishedTitle' : 'todoTitle'}>
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
