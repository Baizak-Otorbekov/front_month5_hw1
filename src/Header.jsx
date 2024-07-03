import { Link } from 'react-router-dom';
import './Header';
import './style.css';

const Header = () => {
  return (
    <div className="header">
      <Link to='/Home' className="logo">Logo</Link>
      <div className="nav-links">
        <Link to='/Home'>home</Link>
        <Link to='/page1'>page1</Link>
        <Link to='/page2'>page2</Link>
      </div>
    </div>
  );
};

export default Header;
