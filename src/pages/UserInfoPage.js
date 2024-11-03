import React from 'react';
import './UserInfoPage.css';
import { useNavigate } from 'react-router-dom';

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const getYears = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let year = currentYear; year >= 1900; year--) {
    years.push(year);
  }
  return years;
};

const getDays = () => {
  return Array.from({ length: 31 }, (_, i) => i + 1);
};

const UserInfoPage = () => {

  const navigate = useNavigate();

  const handlePredictClick = () => {
    navigate('/');
  };

  return (
    <div className="userInfoContainer">
      <h1 className="userInfoTitle">Predict</h1>
      <p className="userInfoDetails">We don't save the users' personal information.</p>

      <div className="form-container">
        <div className="form-row">
          <label className="table-name">Date of birth:</label>
          <div className="info" id="info__birth">
            <select className="box" id="birth-month">
              <option disabled selected>Month</option>
              {months.map((month, index) => (
                <option key={index} value={index + 1}>{month}</option>
              ))}
            </select>
            <select className="box" id="birth-day">
              <option disabled selected>Day</option>
              {getDays().map(day => (
                <option key={day} value={day}>{day}</option>
              ))}
            </select>
            <select className="box" id="birth-year">
              <option disabled selected>Year</option>
              {getYears().map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-row">
          <label className="table-name">Height:</label>
          <input
            aria-invalid="false"
            autoComplete="off"
            placeholder="0"
            required
            type="number"
            className="table-input"
          />
        </div>

        <div className="form-row">
          <label className="table-name">Weight:</label>
          <input
            aria-invalid="false"
            autoComplete="off"
            placeholder="0"
            type="number"
            className="table-input"
          />
        </div>

        <div className="form-row">
          <label className="table-name">Sex:</label>
          <select className="table-gender-input" id="gender-select">
            <option disabled selected>Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

      </div>
      <div className='btnWrapper'>
          <button className='startBtn' onClick={handlePredictClick}>
              NEXT
            </button>
          </div>
    </div>
  );
};

export default UserInfoPage;
