import React from 'react';
import { useSelector } from 'react-redux';
import ListItem from './ListItem';

const List = () => {
  const cities = useSelector((state) => state.weather.cities);

  console.log(cities);

  return (
    <div className='d-flex weakly-weather'>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </div>
  );
};

export default List;
