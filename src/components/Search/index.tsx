import { FormEvent } from 'react'
import { FaPlus as PlusIcon } from 'react-icons/fa'
import './style.css'

interface Props {
  onSubmit: () => void
  onChange: (value: string) => void
  disabled: boolean
  value: string
}

export const Search = ({
  onChange,
  value,
  disabled,
  onSubmit,
}: Props) => {
  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit()
  }
  return (
    <form
      className='searchContainer'
      onSubmit={submitForm}
    >
      <input
        className='searchInput'
        type='text'
        placeholder='Adicione uma nova tarefa'
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <button
        type='submit'
        className='addButton'
        disabled={disabled}
      >
        Criar
        <PlusIcon />
      </button>
    </form>
  )
}
