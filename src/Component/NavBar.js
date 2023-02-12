import './nav.css';
import { NavLink } from 'react-router-dom';
const NavBar = () => {

  return (
    <>
      <div className="nav">
        {/* <h1>Piyush Yadav</h1> */}
        <NavLink to='/'><h1>Piyush Yadav</h1></NavLink>
        <div className="nav-bar">
          <ul>
          <li><NavLink className="nav-link" to='/'>Home</NavLink></li>
            {/* <li><a href="#">Home</a></li> */}
            <li><NavLink className="nav-link" to='/skill'>Skills</NavLink></li>
            {/* <li><a href="#">Skill</a></li> */}
            <li><NavLink  className="nav-link" to='/Experience'>Experience</NavLink></li>
            {/* <li><a href="#">Experience</a></li> */}
            {/* <li><a href="#">Education</a></li> */}
            <li><NavLink className="nav-link" to='/Education'>Education</NavLink></li>
            {/* <li><a href="#">Contact</a></li> */}
            <li><NavLink  className="nav-link" to='/Contact '>Contact</NavLink></li>
          </ul>
          </div>
      </div>
    </>
  )
}

export default NavBar