import React from 'react';
import { Information, List, Select, Weather } from './Components';

const App = () => {
  return (
    <div className='page-content page-container'>
      <div className='padding'>
        <div className='container d-flex justify-content-center'>
          <div className='col-lg-8 grid-margin stretch-card'>
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
