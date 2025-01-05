import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about-me">
      <img
        src="your-profile-picture-url.jpg" // Replace with your actual image URL
        alt="Your Name"
        className="profile-pic"
      />
      <div className="about-me-text">
        <h2>About Me</h2>
        <p>
          Hi, I'm Alexis. I'm a Computer Science major with a passion for
          building web applications. Welcome to my portfolio!
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
