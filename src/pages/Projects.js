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
          I like 3D Vision and Robotics, a lot of my projects are related to these. I also dabbled in some Rocketry, Software, and Materials stuff back in the day.
        </p>
      
        <ProjectList projlist={projlist} isHome={false}/>
      </div>
    </div>
  );
}

export default Projects;