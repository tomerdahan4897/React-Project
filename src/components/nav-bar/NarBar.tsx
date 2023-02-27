import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import {BsFillPlayBtnFill} from 'react-icons/bs';
import css from './NavBar.module.scss';
import coverPic from '../../images/coverPic.jpg';
import {FaFacebookSquare} from 'react-icons/fa';
import {GrInstagram} from 'react-icons/gr';
import {FaTwitterSquare} from 'react-icons/fa';

const NavBar = () => {
    return (
      <>
      <Navbar expand="lg" className={css.main}>
      <Container>
        {/* Brand */}
        <NavLink   style={isActive => ({
                        color: isActive ? "rgb(250, 40, 40)" : "rgb(250, 40, 40)"
                    })} 
        to="/" className={`navbar-brand ${css.navLink}`}> 
        <BsFillPlayBtnFill/>
        <span className='m-2'>YouTube App</span> &nbsp;
        </NavLink>
                    
        {/* Burger: */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`${css.coll} me-auto`}>
            {/* Links: */}
              <div className={`${css.links} gap-2`}>
                <NavLink to="/" id={css.homeLink} className='nav-link text-white'>Home</NavLink>
                <NavLink to="/about" id={css.aboutLink} className='nav-link text-white'>About</NavLink>
                <NavLink to="/favorites" id={css.favoritesLink} className='nav-link text-white'>Favorites</NavLink>
              </div>
              <div className={`${css.social} d-flex flex-row gap-3`}>
                <NavLink to="https://www.facebook.com/youtube" target={'_blank'} className={`${css.soc} nav-link text-white`}><FaFacebookSquare size={27}/></NavLink>
                <NavLink to="https://twitter.com/YouTube" target={'_blank'} className={`${css.soc} nav-link text-white`}><FaTwitterSquare size={27}/></NavLink>
                <NavLink to="https://www.instagram.com/youtube/?igshid=YmMyMTA2M2Y%3D" target={'_blank'} className={`${css.soc} nav-link text-white`}><GrInstagram size={27}/></NavLink>
              </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <img height="400px" width="100%" src={coverPic} alt="music, piano" />
    </>
    )
}

export default NavBar;

