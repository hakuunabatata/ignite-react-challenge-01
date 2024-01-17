import { FormEvent } from 'react'
import { FiPlusCircle } from 'react-icons/fi'
import './styles.css'

interface Props {
  onSubmit: () => void
  onChange: (value: string) => void
  hideButton: boolean
  value: string
}

export const Search = ({
  onChange,
  value,
  hideButton,
  onSubmit,
}: Props) => {
  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit()
  }
  return (
    <form
      className='container'
      onSubmit={submitForm}
    >
      <input
        className='searchInput'
        type='text'
        placeholder='Adicione uma nova tarefa'
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      {!hideButton && (
        <button
          type='submit'
          className='addButton'
          // onClick={onClick}
        >
          Criar
          <FiPlusCircle />
        </button>
      )}
    </form>
  )
}
