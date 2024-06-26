import { NavLink } from "react-router-dom";
import './index.css';
import Logo from '../../../../designs/img/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from "@fortawesome/free-solid-svg-icons/faUserCircle";

export const Header = () => {
    return (
      <div className='main-nav'>
            <NavLink  to={'/'} className="main-nav-logo">
                <img src={Logo} alt='logo ArgentBank' className='main-nav-logo-image'/>
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>

            <div>
                <NavLink  to={'/SignIn'} className="main-nav-item">
                    {/* <i className="fa fa-user-circle"></i> */}
                    <FontAwesomeIcon icon={faUserCircle}/>
                    Sign In
                </NavLink>
            </div>
      </div>
    )
  }
  