import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import trans from '../images/transunion.png';
import equifax from '../images/equifax-logo.png';
import exp from '../images/ExperianSmall.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-one">
        <Container>
          <Row>
            <Col xs={12} md={6} style={{ textAlign: 'center', paddingTop: '30px' }}>
              <h1
                style={{
                  color: '#12ae6d',
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  fontFamily: 'Roboto, san-serif',
                }}
              >
                Monitoring Your Credit Score
              </h1>
              <p
                style={{
                  color: 'white',
                  fontSize: '1rem',
                  fontFamily: 'Roboto, san-serif',
                }}
              >
                Staying on top of your credit’s health is a great financial habit.
              </p>
              <p
                style={{
                  color: 'white',
                  fontSize: '1rem',
                  fontFamily: 'Roboto, san-serif',
                }}
              >
                Get All-in-1 Protection from 3 Credit Bureaus
              </p>
              <div className="credit-bureaus">
                <Row style={{ paddingLeft: '30px', paddingRight: '30px' }}>
                  <Col sm={4}>
                    <img src={trans} width="40%" alt="TransUnion" />
                  </Col>
                  <Col sm={4}>
                    <img src={equifax} width="40%" alt="TransUnion" />
                  </Col>
                  <Col sm={4}>
                    <img src={exp} width="40%" alt="TransUnion" />
                  </Col>
                </Row>
              </div>
              <p
                style={{
                  color: 'white',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  fontFamily: 'Roboto, san-serif',
                }}
              >
                Start at $24.95/month
              </p>
              <Link to="/signup">
                <a href="#foo" className="btn btn-info footer-one-btn" role="button">
                  <span style={{ color: 'white', fontWeight: 'bold' }}>Enroll Now</span>
                </a>
              </Link>
            </Col>
            <Col xs={12} md={6} style={{ textAlign: 'center', paddingTop: '30px' }}>
              <h1
                style={{
                  color: '#12ae6d',
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  fontFamily: 'Roboto, san-serif',
                }}
              >
                Protecting Your Identity
              </h1>
              <p
                style={{
                  color: 'white',
                  fontSize: '1rem',
                  fontFamily: 'Roboto, san-serif',
                }}
              >
                Be notified when there are important changes to your credit reports.
              </p>
              <p
                style={{
                  color: 'white',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  fontFamily: 'Roboto, san-serif',
                }}
              >
                start at $9.99/month
              </p>
              <Link to="/signup">
                <a href="#foo" className="btn btn-info footer-one-btn" role="button">
                  <span style={{ color: 'white', fontWeight: 'bold' }}>Take Action</span>
                </a>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer-two">
        <div className="footer-dark">
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-md-3 item">
                  <h3>Questions</h3>
                  <ul>
                    <li>
                      <a href="/questions">
                        <span style={{ color: '#f0f9ff', fontWeight: 'bold' }}>Members FAQs</span>
                      </a>
                    </li>
                    <li>
                      {' '}
                      <a href="/questions">
                        <span style={{ color: '#f0f9ff', fontWeight: 'bold' }}>Credit FAQs</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 col-md-3 item">
                  <h3>About</h3>
                  <ul>
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>Terms of service</li>
                  </ul>
                </div>
                <div className="col-md-6 item text">
                  <h3>RYZE</h3>
                  <p>
                    Important Information: The credit score(s) you receive from us may not be the same scores used by lenders or other commercial users for credit decisions. There are various types of credit scores, and lenders may use a different type of credit score to make lending decisions than
                    the ones being offered.
                  </p>
                  <p>Under federal law you have the right to receive a Credit Report from each of the three nationwide consumer reporting agencies once every 12 months. A Credit Score is not included.</p>
                  <p>After verification of your identity, your scores are available for immediate online delivery securely. Scores shown are for illustrative purposes only.</p>
                  <p>
                    myryze.com provides you with the tools you need to access and monitor your financial profile through the program's credit reporting and monthly monitoring benefits. myryze.com Credit Monitoring and its benefit providers are not credit repair service providers and do not receive
                    fees for such services, nor are they credit clinics, credit repair or credit services organizations or businesses. Credit information is provided either by Transunion® and TransUnion Interactive, Inc. or Experian and CSIdentity Corporation.
                  </p>
                </div>
                {/* <div className="col item social"><a ><i class="fab fa-facebook-f"></i></a><a href="#"><i class="fab fa-instagram"></i></a><a href="#"><i class="fab fa-twitter"></i></a></div> */}
              </div>
              <p className="copyright" style={{ color: '#ffffff' }}>
                RYZE © 2021 All rights reserved
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
