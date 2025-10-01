import { NavLink } from 'react-router-dom';
import profile from '../assets/profile.jpg'
import React, { useEffect, useState } from 'react';
import linkedinlogo from '../assets/linkedinlogo.png';

const Link = ({ href, children }) => (
  <a href={href} style={{textDecoration: 'none', color: "#0a507e"}}>
    {children}
  </a>
);

function Home() {
  useEffect(() => {
    document.title = "Home | Jose G Noriega";

    return () => {};
  }, []);

  return (
    <div style={{
      maxWidth: '650px',
      margin: '0 auto',
      padding: '10px',
    }}>
      
    <div style={{ lineHeight: '1.2', fontSize: '16px', fontFamily: 'Lora' }}>
      <div style={{ position: 'relative', display: 'flex' }}>
        <div><h2 style={{ fontSize: '20px', textAlign: 'left', color:'black' }}>Jose Noriega</h2></div>
        <div><a href="https://linkedin.com/in/jose-g-noriega/" target='_blank'><img src={linkedinlogo} style={{width: '2.5em', height: '2.5em', marginRight: '10px', marginTop: '10px', marginBottom: 'auto', display: 'block'}} /></a></div>
      </div>
        <p>
          I am Jose, a junior at <Link href='https://www.rice.edu/'>Rice University</Link> studying Mechanical Engineering. I am interested in Robotics, Aerospace, and Defense.
        </p>

        <h4 style={{ 
          fontSize: "16px", 
          textAlign: "left", 
          color: "#111",
        }}>
          About Me
        </h4>

        <p>
          San Diego native
          <br/><br/>
          Something else
        </p>

        <h4 style={{ 
          fontSize: "16px", 
          textAlign: "left", 
          color: "#111",
        }}>
          Projects
        </h4>
        
        <h4 style={{ 
          fontSize: "16px", 
          textAlign: "left", 
          color: "#111",
        }}>
          Work Experience
        </h4>
        <p>
          Currently, I lead the mechanical engineering team in the Rice Robotics Club where we are building a quadruped. Previously, I interned at General Atomics EMS in their Assembly, Integration, and Test team (AI&T) where I helped test new products and helped design and building proprietary testing fixures. 
          <br/><br/>
          <a href='/resume'>Click here, or the resume tab, to view my full resume</a>
        </p>
      </div>

    </div>
  );
}

export default Home;