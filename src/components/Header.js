import axios from "axios";
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import userContext from "../context/userContext";

const Header = () => {
  const navigate = useNavigate();
  const [checkStatus, setChange] = useState(false);
  const [show, setShow] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useContext(userContext);

  const handleSth = (e) => {
    setChange(!checkStatus);
    if (e.target.value === 0) {
      setShow(false);
    } else setShow(!show);
  };

  const logout = async (e) => {
    setIsLoggedIn(false);
    setChange(!checkStatus);
    const response = await axios.get(
      "http://localhost:3001/user/delete-cookie",
      { withCredentials: true }
    );
    if (response) {
      return navigate("/");
    }
    if (e.target.value === 0) {
      setShow(false);
    } else setShow(!show);
  };

  return (
    <nav role="navigation">
      <div id="menuToggle">
        <input checked={show} onClick={handleSth} readOnly type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <NavLink to="/">
            <li onClick={handleSth}>Home</li>
          </NavLink>
          <NavLink to="/zauber">
            <li onClick={handleSth}>Zauber</li>
          </NavLink>
          {!isLoggedIn ? (
            <>
              <NavLink to="/login">
                <li onClick={handleSth}>Login</li>
              </NavLink>
              <NavLink to="/register">
                <li onClick={handleSth}>Register</li>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/myspells">
                <li onClick={handleSth}>Meine Zauber</li>
              </NavLink>
              <NavLink>
                <li onClick={logout}>Logout</li>
              </NavLink>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-desktop">
        <ul>
          <NavLink to="/">
            <li onClick={handleSth}>Home</li>
          </NavLink>
          {!isLoggedIn ? (
            <>
              <NavLink to="/login">
                <li onClick={handleSth}>Login</li>
              </NavLink>
              <NavLink to="/register">
                <li onClick={handleSth}>Register</li>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/myspells">
                <li onClick={handleSth}>Meine Zauber</li>
              </NavLink>
              <NavLink>
                <li onClick={logout}>Logout</li>
              </NavLink>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
