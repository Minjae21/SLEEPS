import React from 'react';
import Body from '../components/Body';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handlePredictClick = () => {
    navigate('/user-info');
  };

  return (
    <div className="homePageContainer">
      <div className='homePageWrapper'>
        <div className='formWrapper'>
          <h4 className='mainLabel'>
            For Your Better Night, <br />SLEEPS
          </h4>
          <p className="subLabel">
            Prediction of sleep conditions in 3 minutes <br />
            Answer 9 questions, predict your sleep conditions
          </p>
          <div className='btnWrapper'>
          <button className='startBtn' onClick={handlePredictClick}>
              PREDICT
            </button>
          </div>
        </div>
        <img className='logoImg' src="/bed.png" alt="logo" />
        <footer>
          {/* <h4>
            Created by <a href="https://minjae21.github.io/index.html" target='_blank' rel="noreferrer">Minjae Jang</a>
          </h4> */}
        </footer>
      </div>
      <Body />
    </div>
  );
}

export default Home;
