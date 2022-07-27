import { Link } from 'react-router-dom'

const Nav = () => {

  return(
    <nav className='navbar'>
      <h4>Placeholder</h4>
      <div>
        <Link to="/">Home</Link>
        <Link to='/categories'>Categories</Link>
      </div>
    </nav>
  )
}

export default Nav