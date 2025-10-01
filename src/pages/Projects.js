import React from 'react';
import { ProjectList } from '../components/ProjectList';
import projlist from '../contents/ProjList';

function Projects() {
  return (
    <div style={{
      maxWidth: '650px',
      margin: '0 auto',
      padding: '10px',
    }}>
      <div style={{ lineHeight: '1.2', fontSize: '16px', fontFamily: 'Lora' }}>

        <p style={{marginBottom: '20px'}}>
          I like Robotics, Aerospace, and Engineering design. I have worked on a variety of mechanical engineering applications to broaden my scope of what is possible with engineering.
        </p>
      
        <ProjectList projlist={projlist} isHome={false}/>
      </div>
    </div>
  );
}

export default Projects;