import axios from "axios";
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import userContext from "../context/userContext";
import style from "./dicer/DicerStyle.module.css";
import PoolContainer from "./dicer/dicerPool";
const Header = () => {
  const navigate = useNavigate();
  const [checkStatus, setChange] = useState(false);
  const [show, setShow] = useState(false);
  const [isChildVisible, setIsChildVisible] = useState(false);

  const { isLoggedIn, setIsLoggedIn } = useContext(userContext);

  const handleSth = (e) => {
    setChange(!checkStatus);
    if (e.target.value === 0) {
      setShow(false);
    } else setShow(!show);
  };

  //
  const handleImageClick = () => {
    setIsChildVisible(!isChildVisible);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setIsChildVisible(!isChildVisible);
    }
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
    <>
      <nav role="navigation">
        <div id="menuToggle">
          <input checked={show} onClick={handleSth} readOnly type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <li onClick={handleSth}>
              {" "}
              <NavLink to="/">Home</NavLink>
            </li>
            {!isLoggedIn ? (
              <>
                <li onClick={handleSth}>
                  <NavLink to="/login">Login</NavLink>
                </li>

                <li onClick={handleSth}>
                  <NavLink to="/register">Register</NavLink>
                </li>
              </>
            ) : (
              <>
                <li tabindex="0">
                  <NavLink className="subtitle">Wiki</NavLink>
                  <ul className="submenu">
                    <li onClick={handleSth}>
                      <NavLink to="/völker">Völker</NavLink>
                    </li>
                    <li onClick={handleSth}>
                      <NavLink to="/klassen">Klassen</NavLink>
                    </li>
                    <li onClick={handleSth}>
                      <NavLink to="/hintergrund">Hintergrund</NavLink>
                    </li>
                    <li onClick={handleSth}>
                      <NavLink to="/gesinnung-sprachen">Gesinnung</NavLink>
                    </li>
                    <li onClick={handleSth}>
                      <NavLink to="/zauber">Zauber</NavLink>
                    </li>
                    <li onClick={handleSth}>
                      <NavLink to="/waffen">Waffen</NavLink>
                    </li>
                    <li onClick={handleSth}>
                      <NavLink to="/rüstung">Rüstung</NavLink>
                    </li>
                    <li onClick={handleSth}>
                      <NavLink to="/werkzeuge">Werkzeuge</NavLink>
                    </li>
                  </ul>
                </li>

                <li onClick={handleSth}>
                  <NavLink to="/myspells">Meine Zauber</NavLink>
                </li>

                <li onClick={logout}>
                  <NavLink>Logout</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-desktop">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            {!isLoggedIn ? (
              <>
                <li>
                  {" "}
                  <NavLink to="/login">Login</NavLink>
                </li>

                <li onClick={handleSth}>
                  <NavLink to="/register">Register</NavLink>
                </li>
              </>
            ) : (
              <>
                <li tabindex="0">
                  <NavLink className="subtitle">Wiki</NavLink>
                  <ul className="submenu">
                    <li>
                      <NavLink to="/völker">Völker</NavLink>
                    </li>
                    <li>
                      <NavLink to="/klassen">Klassen</NavLink>
                    </li>
                    <li>
                      <NavLink to="/hintergrund">Hintergrund</NavLink>
                    </li>
                    <li>
                      <NavLink to="/gesinnung-sprachen">Gesinnung</NavLink>
                    </li>
                    <li>
                      <NavLink to="/zauber">Zauber</NavLink>
                    </li>
                    <li>
                      <NavLink to="/waffen">Waffen</NavLink>
                    </li>
                    <li>
                      <NavLink to="/rüstung">Rüstung</NavLink>
                    </li>
                    <li>
                      <NavLink to="/abenteuerausrüstung">
                        Abenteuerausrüstung
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/werkzeuge">Werkzeuge</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/myspells">Meine Zauber</NavLink>
                </li>

                <li onClick={logout}>
                  <NavLink>Logout</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Würfel-logo */}
        <div className={style.dicerPool}>
          <img
            className={style.logo}
            src={require("../assets/logo.png")}
            alt="Logo"
            onClick={handleImageClick}
            onKeyDown={handleKeyDown}
            tabindex="0"
          />
        </div>
      </nav>

      {isChildVisible && (
        <div className={style.logoContainer}>
          <PoolContainer />
        </div>
      )}
    </>
  );
};

export default Header;
