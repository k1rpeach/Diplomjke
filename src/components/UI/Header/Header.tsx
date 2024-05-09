import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.clear(); // Очищаем localStorage
  };

  return (
    <header className="Header">
      <div className="Header__logo">
        {/* Переход на главную страницу */}
        <Link to={"/main"}></Link>
      </div>
      <div className="input-wrapper">
        <svg
          className="icon icon-search"
          viewBox="0 0 18 18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="glass"
            d="M13.1988 11.6083H12.3648L12.0691 11.3234C12.7289 10.5574 13.2112 9.65499 13.4813 8.6809C13.7514 7.70682 13.8028 6.6851 13.6317 5.68886C13.1355 2.7555 10.6861 0.413034 7.72986 0.0542773C6.69056 -0.0771269 5.63496 0.0308227 4.64383 0.369866C3.6527 0.708908 2.75231 1.27006 2.01155 2.01038C1.2708 2.75069 0.709324 3.65056 0.370083 4.64111C0.0308408 5.63166 -0.0771721 6.68664 0.0543092 7.72533C0.413276 10.6798 2.75712 13.1278 5.6922 13.6237C6.68902 13.7947 7.71134 13.7434 8.68599 13.4734C9.66065 13.2034 10.5635 12.7215 11.3301 12.0621L11.6151 12.3575V13.1911L16.1022 17.6755C16.5351 18.1082 17.2425 18.1082 17.6753 17.6755C18.1082 17.2429 18.1082 16.536 17.6753 16.1033L13.1988 11.6083ZM6.86412 11.6083C4.23521 11.6083 2.11309 9.48745 2.11309 6.86009C2.11309 4.23273 4.23521 2.11185 6.86412 2.11185C9.49302 2.11185 11.6151 4.23273 11.6151 6.86009C11.6151 9.48745 9.49302 11.6083 6.86412 11.6083Z"
          />
        </svg>
        <input type="search" id="search" name="search" placeholder="Поиск" />
      </div>
      <div className="profile-wrapper">
        {/* Переход на страницу профиля */}
        <Link to={"/profile"}>
          <img
            className="_no-select"
            src="/img/users/profile.jpg" // изменение пути на абсолютный
            alt="Profile"
          />
        </Link>
        <svg
          className={`icon icon-arrow ${isMenuOpen ? "_active" : ""}`}
          viewBox="0 0 12 6"
          xmlns="http://www.w3.org/2000/svg"
          onClick={toggleMenu}
        >
          <path
            id="arrow"
            d="M6 5.99999C5.8565 5.99999 5.71731 5.97708 5.58242 5.93128C5.44753 5.88548 5.33561 5.82441 5.24664 5.74808L0.295964 1.53435C0.0986543 1.36641 0 1.15267 0 0.893127C0 0.633586 0.0986543 0.419846 0.295964 0.251907C0.493273 0.0839689 0.744394 0 1.04933 0C1.35426 0 1.60538 0.0839689 1.80269 0.251907L6 3.82442L10.1973 0.251907C10.3946 0.0839689 10.6457 0 10.9507 0C11.2556 0 11.5067 0.0839689 11.704 0.251907C11.9013 0.419846 12 0.633586 12 0.893127C12 1.15267 11.9013 1.36641 11.704 1.53435L6.75336 5.74808C6.64574 5.83968 6.52915 5.90472 6.40359 5.94319C6.27803 5.98166 6.1435 6.0006 6 5.99999Z"
          />
        </svg>
        {isMenuOpen && (
          <div className="menu">
            <ul>
              {/* Переходы на страницы */}
              <Link to="/main"><li>Main</li></Link>
              <Link to="/profile"><li>Profile</li></Link>
              <Link to="/favorites"><li>Favorites</li></Link>
              <Link to="/" onClick={handleLogout}><li>Logout</li></Link>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
