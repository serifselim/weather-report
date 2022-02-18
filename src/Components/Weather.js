import React from 'react';
import { useSelector } from 'react-redux';

const Weather = () => {
  const { current } = useSelector((state) => state.weather.weatherData);
  const isFetch = useSelector((state) => state.weather.isFetch);

  return (
    <div className='weather-data d-flex'>
      <div className='mr-auto'>
        {isFetch ? (
          <h4 className='display-3'>
            {current.temp} <span className='symbol'>°</span>C
          </h4>
        ) : (
          <h4 className='display-3'>
            0<span className='symbol'>°</span>C{' '}
          </h4>
        )}
        {isFetch ? <p> {current.weather[0].main} </p> : <p>Loading</p>}
      </div>
    </div>
  );
};

export default Weather;
