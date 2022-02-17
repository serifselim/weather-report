import React from 'react';
import { DAYS_OF_WEEK } from '../Data/days';

const ListItem = ({ day }) => {
  const { temp, weather, dt } = day;

  const date = new Date(dt * 1000);
  const dayName = DAYS_OF_WEEK[date.getDay()];

  return (
    <div className='weakly-weather-item'>
      <p className='mb-0'> {dayName} </p>{' '}
      <img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        width='50'
      />
      <p className='mb-0'> {temp.day}° </p>
    </div>
  );
};

export default ListItem;
