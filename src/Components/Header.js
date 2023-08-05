import { Link } from "react-router-dom"

const Header = () => {
  return (
    <nav>
        <ul>
            <Link to="/">Home</Link>
            <span> | </span>
            <Link to="/login">Login</Link>
        </ul>
    </nav>
  )
}

export default Header