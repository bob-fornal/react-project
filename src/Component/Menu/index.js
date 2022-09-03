
import { NavLink, Outlet } from "react-router-dom";
import './Menu.css';

function Menu() {

  const linkClass = (isActive) => {
    console.log(isActive);
    return 'item nav-link ' + (isActive === true ? 'active': '');
  };

  return (
    <>
      <nav className="menu">
        <NavLink data-testid="home" className={ ({ isActive }) => linkClass(isActive) } to="home">HOME</NavLink>
        <NavLink data-testid="about" className={ ({ isActive }) => linkClass(isActive) } to="about">ABOUT</NavLink>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </>
  );
}

export default Menu;
