import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // For now, we'll just simulate a submission
      // In a real app, you'd send this to a backend service
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      
      window.location.href = `mailto:jg186@rice.edu?subject=${subject}&body=${body}`;
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{
      maxWidth: '650px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Lora'
    }}>
      <h1 style={{ 
        fontSize: '32px', 
        marginBottom: '20px',
        textAlign: 'center',
        fontWeight: 'normal'
      }}>
        Contact Me
      </h1>
      
      <p style={{ 
        textAlign: 'center', 
        marginBottom: '30px',
        color: '#666',
        lineHeight: '1.6'
      }}>
        Feel free to reach out! I'll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '5px',
            fontWeight: 'bold',
            fontSize: '14px'
          }}>
            Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '16px',
              fontFamily: 'Lora',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '5px',
            fontWeight: 'bold',
            fontSize: '14px'
          }}>
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '16px',
              fontFamily: 'Lora',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '5px',
            fontWeight: 'bold',
            fontSize: '14px'
          }}>
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '16px',
              fontFamily: 'Lora',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div style={{ marginBottom: '30px' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '5px',
            fontWeight: 'bold',
            fontSize: '14px'
          }}>
            Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '16px',
              fontFamily: 'Lora',
              boxSizing: 'border-box',
              resize: 'vertical'
            }}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: isSubmitting ? '#ccc' : '#000',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            fontFamily: 'Lora',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.2s'
          }}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {submitStatus === 'success' && (
          <p style={{ 
            color: 'green', 
            textAlign: 'center', 
            marginTop: '15px',
            fontSize: '14px'
          }}>
            ✓ Your email client should open with a pre-filled message. Send it to contact me!
          </p>
        )}

        {submitStatus === 'error' && (
          <p style={{ 
            color: 'red', 
            textAlign: 'center', 
            marginTop: '15px',
            fontSize: '14px'
          }}>
            Something went wrong. Please try again.
          </p>
        )}
      </form>

      <div style={{ 
        marginTop: '40px', 
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '4px'
      }}>
        <h3 style={{ marginBottom: '10px', fontSize: '18px' }}>Or reach me directly:</h3>
        <p style={{ margin: '5px 0', fontSize: '16px' }}>
          <strong>Email:</strong> jg186@rice.edu
        </p>
      </div>
    </div>
  );
}

export default Contact;