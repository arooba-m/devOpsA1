import React, { useState, useEffect } from "react";

import "./CertificationPage.css";

const CertificationPage = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className={`Certification-page ${fadeIn ? "fade-in" : ""}`}>
      <div className="image-container">
        <div className="content">
          <h2>Certification</h2>
        </div>
      </div>

      <div className="Certification-cards">
        <CertificationCard
          title="Scrum Foundation Professional Certification - SFPC™"
          description="Scrum Foundation Professional Certification holders have developed entry-level skills in Scrum that endorse their fundamental knowledge in this framework. They have demonstrated an understanding of the empirical Scrum pillars of transparency, inspection, and adaptation."
        />
        <CertificationCard
          title="Developers Day 2023 Hackathon Competition"
          description="Achieved 3rd place as a team in the Developers Day 2023 Hackathon Competition."
        />
        <CertificationCard
          title="Coders Cup 2020"
          description="First place winner of the Coders Cup during Freshman year."
        />
      </div>
    </div>
  );
};

const CertificationCard = ({ title, description }) => {
  return (
    <div className="Certification-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CertificationPage;
