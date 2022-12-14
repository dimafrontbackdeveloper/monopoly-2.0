import React, { FC, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from './../assets/images/logo.png';

interface IHeader {
  headerRef?: any;
}

const Header: FC<IHeader> = ({ headerRef }) => {
  return (
    <header className="header" ref={headerRef}>
      <div className="header__row d-f ai-c jc-sb">
        <div className="header__left d-f ai-c">
          <p>
            <a className="link" href="#">
              Play-to-earn
            </a>
          </p>
          <p>
            <Link className="d-f ai-c" to="/leaderboard">
              Leaderboard
            </Link>
          </p>
          <p className="logo">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </p>
        </div>
        <div className="header__right d-f ai-c">
          <p>
            <button className="d-f">100 eth[$50]</button>
          </p>
          <p>
            <a className="d-f ai-c" href="#">
              Deposit
            </a>
          </p>
          <p>
            <a className="d-f ai-c" href="#">
              Withdraw
            </a>
          </p>
          <p>
            <Link className="d-f ai-c" to="/profile">
              <span>Username</span>
              <span></span>
            </Link>
          </p>
          <p>
            <div className="burger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
