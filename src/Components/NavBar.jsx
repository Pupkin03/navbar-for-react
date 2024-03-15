import { Link } from "react-router-dom"

const NavBar = () => {
    return (
      <div className='flex ml-20 justify-between w-[50rem] items-center'>
        <Link to="/">
        <p>Home</p>
        </Link>
        <Link to="/about">
        <p>about</p>
        </Link>
        <Link to="/careers">
        <p>careers</p>
        </Link>
      </div>
    )
  }
  
  export default NavBar