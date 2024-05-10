import React, { useState, useEffect } from 'react';
import './EducationPage.css';
import a1 from './assets/a1.jpg';
import C1 from './assets/C1.png';
import C2 from './assets/C2.png';



const EducationPage = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className={`education-page ${fadeIn ? 'fade-in' : ''}`}>
      <div className="image-container">
        <div className="content">
          <h2>Education</h2>
        </div>
      </div>

      <div className='education-cards'>
        <EducationCard
          title='IGCSEs'
          imageSrc={a1}
          description='Al Salam Pvt School UAE'
          coursework = {[
            'English/Language Arts',
            'Mathematics',
            'Physics',
            'Chemistry',
            'Biology',
            'Social Studies',
            'History',
            'Physical Education',
            'Business',
            'Economics',
            'Accounting'
          ]}
        />
        <EducationCard
          title='Alevels'
          imageSrc={C1}
          description='Beaconhouse School System'
        />
        <EducationCard
          title='Bachelors'
          imageSrc={C2}
          description='FAST NUCES'
          coursework={[
            'DevOps',
            'Recommendation System',
            'Web Programming',
            'Design Defects and Restructuring',
            'Digital Transformation',
            'Artificial Intelligence'
          ]}
        />
      </div>
    </div>
  );
};

const EducationCard = ({ title, imageSrc, description, coursework }) => {
  return (
    <div className='education-card'>
      <img src={imageSrc} alt='Education' />
      <h3>{title}</h3>
      <p>{description}</p>
      {coursework && (
        <div className="coursework">
          <h4>Coursework</h4>
          <ul>
            {coursework.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};


export default EducationPage;
