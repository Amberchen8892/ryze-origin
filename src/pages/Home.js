import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import AOS from 'aos';
import 'aos/dist/aos.css';
import animationData from '../animation/home-section-one.json';
import animationReport from '../animation/report.json';
import animationQuestions from '../animation/question-list.json';
import animationProtect from '../animation/identity-protection.json';
import clock from '../images/clock.png';
import report from '../images/report.png';
import question from '../images/question.png';
import Testimonial from './Testimonial';
import { Link } from 'react-router-dom';

export default function Home() {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector('#home-data'),
      animationData: animationData,
    });
  }, []);
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector('#item-one-graph'),
      animationData: animationReport,
    });
  }, []);
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector('#item-two-graph'),
      animationData: animationProtect,
    });
  }, []);
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector('#item-three-graph'),
      animationData: animationQuestions,
    });
  }, []);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="home">
        <div className=" section-one">
          <div className="row" style={{ minHeight: '70vh' }}>
            <div
              className="col-12 col-md-6"
              style={{
                marginTop: '100px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div id="home-data"></div>
            </div>
            <div className="col-12 col-md-6">
              <div className="glass-card" style={{ color: 'white' }}>
                <div style={{ width: '80%' }}>
                  <h1
                    style={{
                      color: '#29BB89',
                      fontFamily: 'Playfair Display, san-serif',
                      fontWeight: 'bolder',
                      fontSize: '5rem',
                    }}
                  >
                    Credit Score{' '}
                  </h1>
                  <h1
                    style={{
                      color: '#892CDC',
                      fontFamily: 'Playfair Display, san-serif',
                      fontWeight: 'bold',
                      fontSize: '3rem',
                    }}
                  >
                    Monitoring Services
                  </h1>
                  <p
                    style={{
                      color: '#f5f8ff',
                      fontSize: '1.2rem',
                      marginBottom: '50px',
                    }}
                  >
                    In today's world, a lot of things depend on your credit-loan approvals, insurance premiums, even the success of job applications. Having a good grasp on your credit can help you get ahead in life and save you time and money.
                  </p>
                  <Link to="/signup">
                    <a href="#foo" className="cta">
                      <span style={{ fontSize: '0.9rem', color: 'white' }}>Sign Up Now</span>
                      <svg width="1rem" height="1.2rem" viewBox="0 0 13 10">
                        <path style={{ stroke: 'white' }} d="M1,5 L11,5"></path>
                        <polyline style={{ stroke: 'white' }} points="8 1 12 5 8 9"></polyline>
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ width: '100%', backgroundColor: 'white !important' }}>
        <div className=" container section-two">
          <div className="row section-two-text">
            <div className="col-12 col-md-4">
              <img src={clock} width="25%" height="25%" alt="Monitoring" />

              <h1
                style={{
                  marginTop: '20px',
                  fontFamily: 'Lato, san-serif',
                  fontWeight: 'bolder',
                  fontSize: '2.5rem',
                }}
              >
                Credit Monitoring
              </h1>
              <p style={{ padding: '0px 10px' }}>A simple and innovative way to view your credit report. Inquiries can happen anytime, that’s why we monitor all three of your credit reports 24/7 and 365 days a year.</p>
            </div>
            <div className="col-12 col-md-4">
              <img src={report} width="25%" height="25%" alt="Monitoring" />

              <h1
                style={{
                  marginTop: '20px',
                  fontFamily: 'Lato, san-serif',
                  fontWeight: 'bolder',
                  fontSize: '2.5rem',
                }}
              >
                Identity Protection
              </h1>
              <p style={{ padding: '0px 10px' }}>With your name and social security number, imposters can open credit cards,take out a loan and even open new bank accounts. RYZE helps you to act immediately whenever anything suspicious occurs.</p>
            </div>
            <div className="col-12 col-md-4">
              <img src={question} width="25%" height="25%" alt="Monitoring" />

              <h1
                style={{
                  marginTop: '20px',
                  fontFamily: 'Lato, san-serif',
                  fontWeight: 'bolder',
                  fontSize: '2.5rem',
                }}
              >
                Credit FAQs
              </h1>
              <p style={{ padding: '0px 10px' }}>Know what your score and reports mean with help from our credit education center.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-three">
        <h1
          style={{
            textAlign: 'center',
            marginBottom: '30px',
            fontFamily: 'Playfair Display, san-serif',
            fontWeight: 'bolder',
            fontSize: '3rem',
            color: '#892cdc',
          }}
        >
          What can RYZE do for you?
        </h1>
        <div>
          <div className="item-one">
            <div className="row">
              <div
                className="col-12 col-md-6"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div id="item-one-graph" style={{ width: '40%', height: '50%s' }} data-aos="flip-up"></div>
              </div>
              <div
                className="col-12 col-md-6"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div className="design-card" data-aos="fade-left">
                  <h1
                    style={{
                      fontFamily: 'Roboto, san-serif',
                      fontWeight: 'bolder',
                      fontSize: '2.5rem',
                      color: '#12ae6d',
                      fontStyle: 'italic',
                    }}
                  >
                    Credit Monitoring
                  </h1>
                  <p>
                    A credit monitoring service acts as both a personal assistant and watchdog when it comes to your credit. <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>RYZE's</span> credit report monitoring service gives you frequent access to <span>THREE CREDIT BUREAUS's</span> credit
                    history, so you can check your credit report as often as you like.{' '}
                  </p>
                  <p style={{ marginBottom: '30px' }}>Monthly Membership for just $24.95 automatically billed to account</p>
                  <Link to="/signup">
                    <a href="#foo" className="cta">
                      <span style={{ fontSize: '0.9rem', color: 'white' }}>Start Now</span>
                      <svg width="1rem" height="1.2rem" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5" style={{ stroke: 'white' }}></path>
                        <polyline style={{ stroke: 'white' }} points="8 1 12 5 8 9"></polyline>
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="item-two">
            <div className="row" style={{ marginTop: '50px' }}>
              <div
                className="col-12 col-md-6"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div id="item-two-graph" style={{ width: '50%', height: '60%' }} data-aos="flip-up"></div>
              </div>
              <div
                className="col-12 col-md-6"
                style={{
                  paddingTop: '30px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div className="design-card" data-aos="fade-left">
                  <h1
                    style={{
                      fontFamily: 'Roboto, san-serif',
                      fontWeight: 'bolder',
                      fontSize: '2.5rem',
                      fontStyle: 'italic',
                      color: '#12ae6d',
                    }}
                  >
                    Identity Protection
                  </h1>
                  <p>
                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>RYZE</span> won't prevent you from being targeted by identity thieves, but it can certainly help mitigate the damage. Getting alerts whenever changes occur on your credit report or to your score can be a great way to cut
                    identity thieves off at the pass.
                  </p>
                  <p style={{ marginBottom: '30px' }}>Monthly Membership for just $9.99 automatically billed to account</p>
                  <Link to="/signup">
                    <a href="#foo" className="cta">
                      <span style={{ fontSize: '0.9rem', color: 'white' }}>Action Now</span>
                      <svg width="1rem" height="1.2rem" viewBox="0 0 13 10">
                        <path style={{ stroke: 'white' }} d="M1,5 L11,5"></path>
                        <polyline style={{ stroke: 'white' }} points="8 1 12 5 8 9"></polyline>
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="item-three">
            <div className="row" style={{ marginTop: '50px' }}>
              <div
                className="col-12 col-md-6"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div id="item-three-graph" style={{ width: '50%', height: '60%s' }} data-aos="flip-up"></div>
              </div>
              <div
                className="col-12 col-md-6"
                style={{
                  paddingTop: '30px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div className="design-card" data-aos="fade-left">
                  <h1
                    style={{
                      fontFamily: 'Roboto, san-serif',
                      fontWeight: 'bolder',
                      fontSize: '2.5rem',
                      fontStyle: 'italic',
                      color: '#12ae6d',
                    }}
                  >
                    Frequently Asked Questions
                  </h1>
                  <p>Get the answers you need to commonly asked questions about managing your credit.</p>

                  <Link to="questions">
                    <a href="#foo" className="cta">
                      <span style={{ fontSize: '0.9rem', color: 'white' }}>Get Answers</span>
                      <svg width="1rem" height="1.2rem" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5" style={{ stroke: 'white' }}></path>
                        <polyline points="8 1 12 5 8 9" style={{ stroke: 'white' }}></polyline>
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial-section-container">
        <Testimonial />
      </div>
    </>
  );
}
