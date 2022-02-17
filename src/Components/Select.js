import React from 'react';
import { useSelector } from 'react-redux';

const Select = () => {
  const cities = useSelector((state) => state.weather.cities);

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <select
      onChange={handleChange}
      className='form-select'
      aria-label='Default select example'>
      {cities.map((city) => {
        return (
          <option id={city.id} value={city.name}>
            {city.name}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
