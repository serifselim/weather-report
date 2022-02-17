import React from 'react';
import { useSelector } from 'react-redux';
import ListItem from './ListItem';

const List = () => {
  const { daily } = useSelector((state) => state.weather.weatherData);
  const isFetch = useSelector((state) => state.weather.isFetch);

  console.log(daily);

  return (
    <div className='d-flex weakly-weather'>
      {isFetch ? (
        daily.slice(0, 7).map((day) => {
          return <ListItem day={day} />;
        })
      ) : (
        <h3>Loading Data</h3>
      )}
    </div>
  );
};

export default List;
