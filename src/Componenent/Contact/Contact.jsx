import React, { useState } from 'react';
import './Contact.css';
import Swal from 'sweetalert2';
import { questionsData } from '../../assets/assets';

const Contact = () => {
  const [visibleQuestions, setVisibleQuestions] = useState({});

  const toggleQuestion = (index) => {
    setVisibleQuestions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(event.target);

    formData.append("access_key", "3d3ce0d9-b23e-4477-887d-1bccfced5414");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
      form.reset();
    }
  };



  return (
    <div className='contact-container' id='Contact'>
    <div className="questions">
      <p className='titel'>Frequently asked questions</p>
      {questionsData.map((item, index) => (
        <div className="question-box" key={index} onClick={() => toggleQuestion(index)}>
          <div className="question-header">
            <p className='question-text'>{item.question}</p>
            <span className={`arrow ${visibleQuestions[index] ? 'up' : 'down'}`}></span>
          </div>
          {visibleQuestions[index] && <p className='answer'>{item.answer}</p>}
        </div>
      ))}
    </div>

      <div className='contact-form'>
        <form onSubmit={onSubmit}>
          <div className="input-box">
            <label>Name</label>
            <input type="text" className='field' placeholder='Your Name' name='name' required />
          </div>
          <div className="input-box">
            <label>Email</label>
            <input type="email" className='field' placeholder='Your Email' name='email' required />
          </div>
          <div className="input-box">
            <label>Subject</label>
            <input type="text" className='field' placeholder='Subject' name='subject' required />
          </div>
          <div className="input-box">
            <label>Your Message</label>
            <textarea name="message" className='field messg' placeholder='Enter your message' required></textarea>
          </div>
          <div className='button-container'>
          <button className='submit' type='submit'>SUBMIT</button>
        </div>
          
        </form>
      </div>
    </div>
  );
};

export default Contact;
