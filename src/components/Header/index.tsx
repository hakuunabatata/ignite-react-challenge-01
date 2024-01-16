import Logo from '../../assets/logo.svg'
import './styles.css'

export const Header = () => (
  <div className='header'>
    <img
      className='logo'
      src={Logo}
      alt='Todo'
    />
  </div>
)
