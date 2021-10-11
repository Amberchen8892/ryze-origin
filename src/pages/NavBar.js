import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Ryze from '../images/RYZE.png';

export default function NavBar() {
  const [navClassName, setNavClassName] = useState('navbar-container');
  const listenScrollEvent = (event) => {
    if (window.scrollY < 60) {
      return setNavClassName('navbar-container');
    } else if (window.scrollY > 65) {
      return setNavClassName('navbar-container-scroll');
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);
  return (
    <>
      <div id="content-desktop">
        <div className={navClassName}>
          <nav className="navbar navbar-expand-lg navbar-light bg-light container">
            <div className="container-fluid">
              <Link to="/">
                <img src={Ryze} width="15%" height="18%" alt="logo" />
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

                <ul className="navbar-nav ">
                  <li className="nav-item">
                    <Link to="/signup">
                      <button type="button" className="btn btn-outline-light" style={{ width: '150px' }}>
                        Sign Up{' '}
                      </button>
                    </Link>
                  </li>
                  <li className="nav-item" style={{ marginLeft: '10px' }}>
                    <Link to="/login">
                      <button type="button" className="btn btn-light btn-two" style={{ width: '150px' }}>
                        Member Login
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div id="content-mobile" className="nav-mobile">
        <div className={navClassName}>
          <div className="container">
            <div className="row">
              <div
                className="col-5"
                style={{
                  display: 'flex',
                  justifyContent: 'center',

                  paddingTop: '20px',
                }}
              >
                <Link to="/">
                  <img src={Ryze} width="70%" height="78%" alt="logo" />
                </Link>
              </div>
              <div
                className="col-7"
                style={{
                  textAlign: 'right',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div style={{ display: 'flex', flex: 'wrap' }}>
                  <Link to="/signup">
                    <button type="button" className="btn btn-outline-light" style={{ fontSize: '0.6rem', width: '7rem' }}>
                      Sign Up{' '}
                    </button>
                  </Link>
                  <Link to="/login">
                    <button
                      type="button"
                      className="btn btn-light btn-two"
                      style={{
                        width: '7rem',
                        marginLeft: '0.3rem',
                        fontSize: '0.6rem',
                      }}
                    >
                      Member Login
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
