import React from 'react';

const ListItem = () => {
  return (
    <div className='weakly-weather-item'>
      <p className='mb-0'> Sun </p>{' '}
      <img src='https://openweathermap.org/img/wn/10d@2x.png' width='50' />
      <p className='mb-0'> 30° </p>
    </div>
  );
};

export default ListItem;
