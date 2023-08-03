import { Outlet, Link } from "react-router-dom";
import '../styles/layout.css';

const Layout = () => {
  return (
    <header>
      <nav>
        <ul>
          <div className="pagination">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/info">Info</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
          </div>
          <div className="credentials">
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
          </div>
        </ul>
      </nav>
      <Outlet />
    </header>
  );
};

export default Layout;
