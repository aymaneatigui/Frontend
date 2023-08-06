import { Link } from "react-router-dom"

const Header = () => {
  return (
    <nav>
        <ul>
            <Link to="/">Home</Link>
            <span> | </span>
            <Link to="/login">Login</Link>
            <span> | </span>
            <Link to="/signup">Sign Up</Link>
            <span> | </span>
            <Link to="/users">Users</Link>
        </ul>
    </nav>
  )
}

export default Header