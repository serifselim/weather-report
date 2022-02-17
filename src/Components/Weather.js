import React from 'react';

const Weather = () => {
  return (
    <div className='weather-data d-flex'>
      <div className='mr-auto'>
        <h4 className='display-3'>
          32 <span className='symbol'>°</span>C
        </h4>
        <p> Cloudy </p>
      </div>
    </div>
  );
};

export default Weather;
