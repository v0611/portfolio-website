import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'your_service_id',
      'your_template_id',
      form,
      'your_user_id'
    ).then((response) => {
      alert('Message sent successfully!');
    }).catch((error) => {
      alert('Failed to send message.');
    });
  };

  return (
    <section className="contact container my-5">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </section>
  );
}

export default Contact;
