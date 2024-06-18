import './index.css';
import Logo from '../../../../designs/img/argentBankLogo.png';


export const Header = () => {
    return (
      <div className='main-nav'>
            
            <a className="main-nav-logo" href="./index.html">
                <img src={Logo} alt='logo ArgentBank' className='main-nav-logo-image'/>
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div>
                <a className="main-nav-item" href="./sign-in.html">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </a>
            </div>
      </div>
    )
  }
  