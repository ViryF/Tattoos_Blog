import { Link } from 'react-router-dom'

const Nav = () => {

  return(
    <nav className='navbar'>
      <h4>Tattoo's Blog </h4>
      <Link to="/">Home</Link>
      <Link to='/categories'>Categories</Link>
      <div className='dot'></div>
    </nav>
  )
}

export default Nav