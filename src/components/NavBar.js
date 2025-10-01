import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1110);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1110);
    };

    setIsMenuOpen(false);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // navigation link component
  const NavLink = ({ to, children, isExternal }) => {
    const isActive = to === '/' ? location.pathname === to : location.pathname.includes(to);
    
    if (isExternal) {
      return (
        <a 
          href={to} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            color: 'gray',
            textDecoration: 'none',
            fontFamily: 'Lora',
            fontSize: '18px',
            display: 'block',
            marginBottom: '8px'
          }}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        to={to}
        style={{ 
          color: isActive ? 'black' : 'gray',
          textDecoration: 'none',
          fontSize: '18px',
          fontFamily: 'Lora',
          display: 'block',
          marginBottom: '8px'
        }}
      >
        {children}
      </Link>
    );
  };

  return (
    <>
      {/* desktop nav */}
      <nav
        style={{
          position: isMobile ? 'relative' : 'fixed',
          left: isMobile ? 'auto' : 'calc(50% - 550px)',
          top: isMobile ? '0' : '50px',
          padding: '10px',
          display: isMobile ? 'none' : 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: isMobile ? 'auto' : 'calc(100vh - 50px)',
          zIndex: 100,
        }}
      >
        <div>
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ 
              fontSize: '16px', 
              fontFamily: 'Lora',
              fontWeight: 'bold', 
              marginBottom: '15px',
              textTransform: 'uppercase'
            }}>
              <a
              href="/Navigation"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              Navigation
            </a>
            </h3>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/resume">Resume</NavLink>
          </div>
          
          <div>
            <h3 style={{ 
              fontSize: '16px', 
              fontWeight: 'bold', 
              marginBottom: '15px',
              fontFamily: 'Lora',
              textTransform: 'uppercase'
            }}>
              <a
              href="/socialMedia"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              FIND ME ON
            </a>
            </h3>
            <NavLink to="https://linkedin.com/in/jose-g-noriega/" isExternal>Linkedin</NavLink>
            <NavLink to="https://github.com/Jose-Noriega" isExternal>GitHub</NavLink>
            <NavLink to="https://x.com/Jose_G_N" isExternal>X</NavLink>
          </div>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: 'bold',
            fontFamily: 'Lora',
            textTransform: 'uppercase',
          }}>
            <a
              href="/contact"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              CONTACT ME
            </a>
          </h3>
        </div>
      </nav>

      {/* mobile nav */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          backgroundColor: 'white',
          borderBottom: '1px solid #eee',
          padding: '10px 20px',
          display: isMobile ? 'flex' : 'none',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 100,
        }}
      >
        <div style={{ display: 'flex', gap: '20px' }}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/reading">Reading</NavLink>
        </div>
        
        <button 
          onClick={toggleMenu}
          style={{
            marginRight: '50px',
            background: 'none',
            border: '1px solid #ddd',
            borderRadius: '5px',
            padding: '5px 10px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          ☰
        </button>
      </nav>

      {/* mobile menu dropdown */}
      {isMobile && isMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '50px',
            right: '30px',
            width: '120px',
            backgroundColor: 'white',
            border: '1px solid #ddd',
            padding: '10px',
            borderRadius: '5px',
            zIndex: 99,
          }}
        >
          <div style={{ marginBottom: '20px' }}>
            {/* <NavLink to="/projects">Projects</NavLink> */}
            <NavLink to="/publications">Publications</NavLink>
            <NavLink to="/essays">Essays</NavLink>
          </div>
          
          <div>
            <h3 style={{ 
                fontSize: '12px', 
                fontWeight: 'bold', 
                marginBottom: '15px',
            }}>
            FIND ME ON
            </h3>
            <NavLink to="https://github.com/ahitagnied" isExternal>GitHub</NavLink>
            <NavLink to="https://x.com/ahitagnied" isExternal>X</NavLink>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;