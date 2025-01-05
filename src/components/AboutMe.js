import React from 'react';
import './AboutMe.css'; // Create a CSS file for component-specific styles

function AboutMe() {
  return (
    <section className="about-me container d-flex align-items-center my-5">
      <img src="your-picture-url.jpg" alt="Your Name" className="profile-pic me-4" />
      <div>
        <h2>About Me</h2>
        <p>
          Hi, I'm Alexis. I'm a Computer Science major with a passion for building web applications.
          Welcome to my portfolio!
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
