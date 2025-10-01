import profile from '../assets/profile.jpg'
import React, { useEffect, useState } from 'react';

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
        <img src={profile} style={{width: 'max(30%, 145px)', aspectRatio: '1', borderRadius: '50%', marginTop: '20px', marginBottom: '20px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} alt="Banner" />
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