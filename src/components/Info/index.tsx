import './style.css'

interface Props {
  totalTasks: number
  totalDone: number
}

export const Info = ({ totalTasks, totalDone: totalDone }: Props) => {
  return (
    <div className='infoContainer'>
      <div className='infoTextContainer'>
        <div className='createdText'>Tarefas criadas</div>
        <div className='infoNumber'>{totalTasks}</div>
      </div>
      <div className='infoTextContainer'>
        <div className='doneText'>Concluídas</div>
        <div className='infoNumber'>{totalDone}</div>
      </div>
    </div>
  )
}
