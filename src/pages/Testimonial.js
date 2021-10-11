import React, { useEffect } from 'react';
import john from '../images/testimonial-images/john.svg';
import taya from '../images/testimonial-images/tanya.svg';
import iconPrev from '../images/testimonial-images/icon-prev.svg';
import iconNext from '../images/testimonial-images/icon-next.svg';
import patternQuotes from '../images/testimonial-images/pattern-quotes.svg';
import patternCurve from '../images/testimonial-images/pattern-curve.svg';
const users = [
  {
    name: 'Tanya Sinclair',
    role: 'Recent Customer',
    feedback: '“I am impressed! For signing up with RYZE, I can acccess my credit score report anytime and get new update once a month. ”',
    image: `${taya}`,
  },
  {
    name: 'John Tarkpor',
    role: 'Recent Customer',
    feedback:
      '“I am using Identity Protection as a safeguard to protect myself from a recent ID theft that involved a person impersonating a famous celebrity. I was duped because the con was very convincing. With RYZE I fell more secure with the knowledge that someone other than myself is looking over me. ”',

    image: `${john}`,
  },
];

export default function Login() {
  useEffect(() => {
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const image = document.querySelector('.image');
    const feedback = document.querySelector('.feedback');
    let slide = 0;

    const navigation = () => {
      // Check slide value
      if (slide > users.length - 1) {
        slide = 0;
      }
      image.innerHTML = `
    <img src=${users[slide].image} alt="">
    `;
      feedback.innerHTML = `
    <img src=${patternQuotes} alt="">
    <p>${users[slide].feedback}</p>
    <h4 class="name">${users[slide].name} <span class="role">${users[slide].role}</span></h4>
    `;
      slide++;
    };
    navigation();
    prevBtn.addEventListener('click', navigation);
    nextBtn.addEventListener('click', navigation);
  }, []);

  return (
    <div className="testimonial-section-container">
      <div className="testimonial-section">
        <div className="slider-container">
          <div className="image">{/* <img src={john} alt='' /> */}</div>
          <div className="navigation">
            <img className="prev" src={iconPrev} alt="" />
            <img className="next" src={iconNext} alt="" />
          </div>
        </div>
        <div className="feedback">
          <img src={patternQuotes} alt="" />
          {/* <p>
            “ I am impressed! For signing up with RYZE, I can acccess my credit
            score report anytime and get new update once a month. ”{' '}
          </p>
          <h4 className='name'>Tanya Sinclair</h4>
          <h4 className='role'>Recent customer</h4> */}
        </div>
        <img className="curve" src={patternCurve} alt="" />
      </div>
    </div>
  );
}
