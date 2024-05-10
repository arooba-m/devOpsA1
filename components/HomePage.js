import React, { useState, useEffect } from 'react';
import './HomePage.css';
import myImage from './assets/mypic.jpeg';

const HomePage = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className={`home-page ${fadeIn ? 'fade-in' : ''}`}>
      <div className="image-container">
        <div className="content">
          <h2>Welcome</h2>
        </div>
      </div>

      <div className='Myself'>
        <div className='personalInfo'>
          <h3>About Me</h3>
          <p>"Welcome to my digital sanctuary! I'm Arooba Moin, a curious soul navigating the realms of technology as a final year Computer Science student. 
          With a fervent passion for innovation and an insatiable appetite for learning, I dive deep into the ever-evolving landscape of code. Join me on this
           exhilarating journey as we explore the intersections of creativity and functionality, shaping tomorrow's digital frontier, one line of code at a time. 
           Let's embark on this odyssey together, fueled by curiosity, driven by passion, and bound by the endless possibilities of technology!"</p>
          
          <p>Email: aroobamoin7@gmail.com</p>
          <p>LinkedIn: <a href="https://linkedin.com/in/arooba-m">linkedin.com/in/arooba-m</a></p>
          <p>GitHub: <a href="https://github.com/arooba-m">github.com/arooba-m</a></p>
        </div>
        <div className='MyImage'>
          <img src={myImage} alt='Arooba Moin' />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
