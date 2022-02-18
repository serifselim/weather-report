import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeatherData } from './Redux/weatherSlice';
import { Information, List, Select, Weather } from './Components';
import cities from './Data/tr_cities.json';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchWeatherData({
        city: cities[0].name,
        lat: cities[0].latitude,
        lon: cities[0].longitude,
      })
    );
  }, []);

  return (
    <div className='page-content page-container'>
      <div className='padding'>
        <div className='container d-flex justify-content-center'>
          <div className='col-12 grid-margin stretch-card'>
            <div className='card card-weather'>
              <div className='card-body'>
                <div className='weather-date-location'>
                  <Information />
                  <Select />
                </div>
                <Weather />
              </div>
              <div className='card-body p-0'>
                <List />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
