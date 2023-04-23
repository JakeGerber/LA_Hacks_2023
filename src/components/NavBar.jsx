
import { Link } from 'react-router-dom';
import "./NavBar.css"


const NavBar = () => {

  return (
    <nav>
      <h1>Nav Bar/CompanyLogo</h1>
      
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