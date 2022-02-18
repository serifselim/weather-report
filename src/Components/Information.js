import React from 'react';
import { useSelector } from 'react-redux';
import { DAYS_OF_WEEK, MONTHS_OF_YEAR } from '../Data/dates';

const Information = () => {
  let date, dayName, dayNumber, monthName, year;
  const { current, city } = useSelector((state) => state.weather.weatherData);
  const isFetch = useSelector((state) => state.weather.isFetch);

  if (isFetch) {
    date = new Date(current.dt * 1000);
    dayNumber = date.getDate();
    dayName = DAYS_OF_WEEK[date.getDay()];
    monthName = MONTHS_OF_YEAR[date.getMonth()];
    year = date.getFullYear();

    return (
      <div>
        <h3>{dayName}</h3>
        <p className='text-gray'>
          {' '}
          <span className='weather-date'>
            {`${dayNumber} ${monthName} ${year}`}
          </span>{' '}
          <span className='weather-location'>{city}, Turkey</span>{' '}
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Please Wait</h3>
        <p className='text-gray'>
          {' '}
          <span className='weather-location'>Loading data...</span>{' '}
        </p>
      </div>
    );
  }
};

export default Information;
