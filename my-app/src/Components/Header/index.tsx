import { NavLink } from "react-router-dom";
import './index.css';
import Logo from '../../../../designs/img/argentBankLogo.png';



export const Header = () => {
    return (
      <div className='main-nav'>
            
            {/* <a className="main-nav-logo" href="./index.html"> */}
            <NavLink  to={'/'} className="main-nav-logo">
                <img src={Logo} alt='logo ArgentBank' className='main-nav-logo-image'/>
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            {/* </a> */}
            <div>
                {/* <a className="main-nav-item" href="./sign-in.html"> */}
                <NavLink  to={'/SignIn'} className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </NavLink>
                {/* </a> */}
            </div>
      </div>
    )
  }
  