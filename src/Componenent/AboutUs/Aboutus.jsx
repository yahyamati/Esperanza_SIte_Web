import React from 'react';
import './Aboutus.css';
import { assets } from '../../assets/assets';

const Aboutus = () => {
  return (
    <div className="aboutus-container">
      <div className="team">
        <img src={assets.Team} alt="Team" />
        <img src={assets.Sticker} alt="Sticker" />
      </div>
      <div className="information">
        <div className="aboutus">
          <p className="section-title">About us</p>
          <p>Esperanza Club is the first scientific club in the University of Jijel founded in 2019 by some students. Our purpose is to help students improve their skills and to help them find their passion in the field of technology and science. Our themes revolve around information technologies, and we always seek to develop our topics in various technical fields that help the student acquire the cognitive ability that enables them to move to the labor market with high efficiency.</p>
        </div>
        <div className="statistics">
          <p className="section-title">Statistics</p>
          <p>The club contains more than 60 members studying in various university majors such as computer science, mathematics, physics, automatics, biology... The number of members has increased significantly in recent years, due to the many activities offered by the club, which is considered one of the largest university clubs in terms of number of members at the University of Jijel.</p>
        </div>
        <div className="departments">
          <p className="section-title">Departments</p>
          <p>Our club has several departments that help the student to improve their skills in a specific field, such as the Management department, the IT department, the Media department, the Agenda department, the External Relations department, and the Human Resources department.</p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
