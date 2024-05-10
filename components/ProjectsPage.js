import React, { useState } from 'react';
import styled from 'styled-components';
import './ProjectsPage.css'; 

const ProjectsContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
`;

const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ProjectItem = styled.li`
  margin-bottom: 20px;
`;

const ProjectTitle = styled.h3`
  margin-bottom: 10px;
`;

const ProjectDescription = styled.div`
  margin-bottom: 10px;
`;

const projectsData = [
  {
    title: 'AudioElixir (a sound demixing solution) - FYP',
    description: [
      'Designed the prototype on Figma and developed an intuitive and interactive platform utilizing React.js for seamless demixing and manipulation of audio tracks.',
      'Directed the creation of comprehensive software requirement documents, leading to a 25% decrease in development iterations and a 30% improvement in project completion timelines.',
      'Trained a Wave-U-Net model, designed for audio source separation, on a dataset of audio recordings.'
    ],
    technology: 'React.js'
  },
  {
    title: 'Train Station Recommendation System',
    description: [
      'Implemented a recommendation system for hotels and train stations using a combination of content-based filtering and case-based filtering approaches.',
      'Developed a neural network for feature extraction and prediction of hotel ratings, achieving improved accuracy in personalized recommendations.',
      'Achieved a significant reduction in Mean Absolute Error (MAE) and Root Mean Squared Error (RMSE) through the integration of neural network predictions with content-based filtering, resulting in more accurate recommendations.'
    ],
    technology: 'Various'
  },
  {
    title: 'Facial Recognition using MTCNN, FaceNet and SVM',
    description: [
      'Developed a facial recognition system integrating MTCNN for face detection, FaceNet for feature extraction, and SVM for classification.',
      'Extracted faces from a dataset of celebrity images using MTCNN and implemented FaceNet to extract unique facial features.',
      'Trained an SVM model to classify facial embeddings, achieving high accuracy in identifying celebrity identities.'
    ],
    technology: 'MTCNN, FaceNet, SVM'
  },
  {
    title: 'Project Management Application',
    description: [
      'Engineered a customized project management application using Canvas app in Power Apps framework, streamlining team collaboration and boosting task efficiency by 40%.',
      'Integrated Power BI for data visualization, enhancing project insights and decision-making capabilities through interactive dashboards and reports.',
      'Utilized Figma to design intuitive canvas pages, ensuring a user-friendly interface and seamless navigation.'
    ],
    technology: 'Power Apps, Power BI, Figma'
  },
  {
    title: 'Shopify: An E-Commerce Website',
    description: [
      'Developed an e-commerce website utilizing React.js on the frontend for an intuitive user interface, coupled with Laravel on the backend for streamlined order processing and management.',
      'Customized platform for admin product management and user-friendly features, enhancing user engagement and shopping experience.'
    ],
    technology: 'React.js, Laravel'
  }
];

const ProjectsPage = () => {
  const [filter, setFilter] = useState('');
  
  const filteredProjects = projectsData.filter(project =>
    project.technology.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ProjectsContainer>
      <div className="image-container">
        <div className="content">
          <h2>Projects</h2>
        </div>
      </div>
      <Input
        type="text"
        placeholder="Filter by technology"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ProjectList>
        {filteredProjects.map((project, index) => (
          <ProjectItem key={index}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>
              {project.description.map((desc, i) => (
                <p key={i}>{desc}</p>
              ))}
            </ProjectDescription>
            <p>Technology: {project.technology}</p>
          </ProjectItem>
        ))}
      </ProjectList>
    </ProjectsContainer>
  );
}

export default ProjectsPage;
