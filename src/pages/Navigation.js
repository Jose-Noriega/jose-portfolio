import React from 'react';
import '../pages/renamelater.css';
import profile from '../assets/profile.jpg';

function Navigation() {
  
  return (
    <div style={{
        maxWidth: '650px',
        margin: '0 auto',
        }}>
        <div style={{ lineHeight: '1.2', fontSize: '18px', fontFamily: 'Lora' }}>
          <h4>
            Navigation
          </h4>
        </div>
        <div style={{
          width: '100ch',
          height: '25ch',
          position: 'relative',
          display: 'flex',
          flexGrow: 'initial',
          marginTop: '10px',
        }}>
          <div className='box-hover'>
            box 1
          </div>
          <div className='other-boxes'>
            hi
          </div>
        </div>

        <div style={{
          width: '100ch',
          height: '25ch',
          position: 'relative',
          display: 'flex',
          marginTop: '10px',
        }}>
          <div className='box-hover'>
          <img src={profile} alt='profile' style={{width: '100%', height: '100%', borderRadius: '20px'}}/>
          </div>
          <div className='other-boxes'>
            hi
          </div>
        </div>

        <div style={{
          width: '100ch',
          height: '25ch',
          position: 'absolute',
          display: 'flex',
          marginTop: '10px',
        }}>
          <div className='box-hover'>
          <img src={profile} alt='profile' style={{width: '100%', height: '100%', borderRadius: '20px'}}/>
          </div>
          <div className='other-boxes'>
            hi
          </div>
        </div>

    </div>
    
    

  );
}

export default Navigation;