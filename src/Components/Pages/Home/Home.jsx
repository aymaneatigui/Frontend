import { useLogout } from '../../../Hooks/Authentication/useLogout'

const Home = () => {
  const { Logout } = useLogout();

  const handleLogout = (e) => {
    e.preventDefault()
    Logout();
  };
  
 return (
    <>
    <div>Home</div>
    <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Home