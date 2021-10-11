import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import signupAnimation from '../animation/signup.json';

export default function Login() {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector('#signup-animation'),
      animationData: signupAnimation,
    });
  }, []);

  return (
    <div className="login-container">
      <div className="wrap">
        <div className="row" style={{ marginTop: '30px' }}>
          <div className="col-12 col-md-7">
            <h2
              style={{
                color: '#21E6C1',
                textAlign: 'center',
                fontFamily: 'Roboto, san-serif',
                fontWeight: 'bolder',
                fontStyle: 'italic',
                fontSize: '2.5rem',
              }}
            >
              Thank you for being a member of RYZE
            </h2>
            <div id="signup-animation"></div>
          </div>
          <div
            className="col-12 col-md-5"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className="card custom-card" shadow>
              <div className="card-body">
                <form>
                  <h3
                    style={{
                      textAlign: 'center',
                      color: '#892CDC',
                      fontFamily: 'Lato, san-serif',
                      fontWeight: 'bolder',
                      fontSize: '2rem',
                    }}
                  >
                    {' '}
                    Log In{' '}
                  </h3>{' '}
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      Password
                    </label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                  </div>
                  <button type="submit" className="btn btn-primary login-btn">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
