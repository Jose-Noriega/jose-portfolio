import React from 'react';
import resume from '../assets/resume.pdf';

function Resume() {
  return (
    <div style={{
      maxWidth: '650px',
      margin: '0 auto',
      padding: '10px',
    }}>
      <div style={{ lineHeight: '1.2', fontSize: '16px', fontFamily: 'Lora' }}>
        <p>Feel free to download my resume <a href={resume} download="Jose_Noriega_Resume.pdf">here</a>.</p>
        <div style={{ width: '100%', aspectRatio: '8.5 / 11', margin: '0 auto', background: '#fff' }}>
            <iframe 
                src={ `${resume}#toolbar=0&navpanes=0&scrollbar=0&zoom=page-fit` } 
                style={{
                    width: '100%', 
                    height: '100%', 
                    border: '0', 
                    display: 'block'}}
                title="Resume"
            />
        </div>
      </div>
    </div>
  );
}

export default Resume;