
import { Link } from 'react-router-dom';
import "./NavBar.css"
import logo from '../assets/BREACHWARNing.png'


const NavBar = () => {

  return (
    <nav>
      <img src={logo} alt="Logo" width="100" height="100" />
      
      <div className="side-links">
        <Link to="/"><h2>Home</h2></Link>
        <Link to="/layoff"><h2>Layoff Notices</h2></Link>
        <Link to="/breach"><h2>Data Breaches</h2></Link>
        <div className="buttons">
          <Link to='/login'>Login</Link>        
        </div>
      </div>     
    </nav>
  )
}

export default NavBar;