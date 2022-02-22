import React from 'react';
import { useSelector } from 'react-redux';
import ListItem from './ListItem';

const List = () => {
  const { daily } = useSelector((state) => state.weather.weatherData);
  const isFetch = useSelector((state) => state.weather.isFetch);

  if (isFetch) {
    return (
      <div className='d-flex weakly-weather'>
        {daily.slice(0, 7).map((day) => {
          return <ListItem day={day} />;
        })}
      </div>
    );
  } else {
    return <div className='loading-list' />;
  }
};

export default List;
