
import { Link } from 'react-router-dom';
import "./NavBar.css"
import logo from '../assets/BREACHWARNing.png'


const NavBar = () => {

  return (
    <nav>
      <img src={logo} alt="Logo" width="100" height="100" />
      
      <div className="side-links">
        <Link to="/">Home</Link>
        <Link to="/layoff">Layoff Notices</Link>
        <Link to="/breach">Data Breaches</Link>
        <div className="buttons">
          <Link to='/login'>Login</Link>        
        </div>
      </div>     
    </nav>
  )
}

export default NavBar;