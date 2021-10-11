import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import signupAnimation from '../animation/signup-two.json';
import MaterialLayout from '../components/Layout/MaterialLayout';
import CheckoutPage from '../components/CheckoutPage/CheckoutPage';

export default function Signup() {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector('#signup-animation'),
      animationData: signupAnimation,
    });
  }, []);

  return (
    <div className="signup-container">
      <div className="row containerOne">
        <div className="row">
          <div
            className="col-12 col-md-12 signup-form-container"
            // style={{ backgroundColor: 'transparent' }}
            // className='signup-form-container'
          >
            <MaterialLayout style={{ BaseAudioContext: 'green' }}>
              <CheckoutPage />
            </MaterialLayout>
          </div>
        </div>
      </div>
    </div>
  );
}
