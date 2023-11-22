// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className="header-container">
      <div>
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
        />
      </div>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          {' '}
          <li>About</li>{' '}
        </Link>
        <Link to="/contact">
          {' '}
          <li>Contact</li>{' '}
        </Link>
      </ul>
    </div>
  )
}

export default Header
