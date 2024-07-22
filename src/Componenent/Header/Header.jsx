import React, { useState, useEffect } from 'react';
import './Header.css';
import { assets } from '../../assets/assets';

const Header = () => {
    const texts = ["Passion", "Curiosity", "Enthusiasm"];
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [charIndex, setCharIndex] = useState(0);
    const [isAdding, setIsAdding] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);
  
    useEffect(() => {
      const updateText = () => {
        if (isAdding) {
          if (charIndex < texts[index].length) {
            setDisplayText((prev) => prev + texts[index][charIndex]);
            setCharIndex((prev) => prev + 1);
          } else {
            setTimeout(() => {
              setIsAdding(false);
              setIsAnimating(true);
            }, 1000); // Pause before starting to delete
          }
        } else {
          if (charIndex > 0) {
            setDisplayText((prev) => prev.slice(0, -1));
            setCharIndex((prev) => prev - 1);
          } else {
            setIsAdding(true);
            setIndex((prev) => (prev + 1) % texts.length);
          }
        }
      };
  
      const intervalId = setInterval(updateText, 150); // Adjust speed here
      return () => clearInterval(intervalId);
    }, [charIndex, isAdding, index, texts]);
  
    useEffect(() => {
      if (!isAdding && charIndex === 0) {
        setIsAnimating(false);
      }
    }, [charIndex, isAdding]);
    


  return (
    <div className="header" id='home'>
   

   <div className="explain-text">
      <p className='firstText'>We Live Once, Let's Leave a Print</p>
      <div className='secendText'>
        <p>For Those Who Have</p>
      <span className={`text-rotator ${isAnimating ? 'animating' : ''}`}>{displayText}</span>
      </div>
      
      <p className='TeerdText'>
        Esperanza Club is a scientific club at Mohammed Seddik Ben Yahia university in Jijel affiliated with the Faculty of exact science and computer science that aims to bring together students who are passionate about science and technology. We plan to organize events, workshops, competitions and more.
      </p>
    </div>

      <div className="logo">
        <img src={assets.logo} alt="Esperanza Club Logo" />
        
        <div className="club-text">
            <p>Esperanza</p>
          {'Club'.split('').map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
