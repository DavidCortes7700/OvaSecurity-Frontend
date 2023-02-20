import { useState, useEffect } from 'react';
import hlogo from "images/horizontal-fondo-claro.png";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Link} from "react-router-dom";
 
function MenuBar(){
    const [isMenuVisible, setIsMenuVisible] = useState(true);
    const [previousScrollPosition, setPreviousScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;

      if (currentScrollPosition < previousScrollPosition) {
        setIsMenuVisible(true);
      } else {
        setIsMenuVisible(false);
      }

      setPreviousScrollPosition(currentScrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [previousScrollPosition]);

  const menuStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: '#fff',
    transition: 'transform 0.3s ease-in-out',
    transform: isMenuVisible ? 'translateY(0)' : 'translateY(-100%)',
  };

  return (
    <div className="menu-container" style={menuStyle}>
  <div className="logo">
    <img className="logo" src={hlogo} alt="logo" />
  </div>
  <ul className='menu-options'>
    <li>
      <Link to='/activities-teacher'>
        <a>Actividades</a>
      </Link>
    </li>
    <li>
      <Link to='/legalFramework-teacher'>
        <a>Marco Legal</a>
      </Link>
    </li>
    <li>
      <Link to='/books-teacher'>
        <a>Libros</a>
      </Link>
    </li>
    <li>
      <Link to='/videos-teacher'>
        <a>Videos</a>
      </Link>
    </li>
    <li>
      <Link to='/profile-teacher'>
        <AccountCircleIcon className='icon' style={{ fontSize: '4vw' }} />
      </Link>
    </li>
  </ul>
</div>

  );
}

export default MenuBar;
