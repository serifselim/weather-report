import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherData } from '../Redux/weatherSlice';

const Select = () => {
  const cities = useSelector((state) => state.weather.cities);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    cities.map((city) => {
      if (city.name === e.target.value) {
        dispatch(
          fetchWeatherData({
            city: city.name,
            lat: city.latitude,
            lon: city.longitude,
          })
        );
      }
    });
    console.log(e.target.value);
  };

  return (
    <select
      onChange={handleChange}
      className='form-select'
      aria-label='Default select example'>
      {cities.map((city, index) => {
        return (
          <option key={index} id={city.id} value={city.name}>
            {city.name}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
