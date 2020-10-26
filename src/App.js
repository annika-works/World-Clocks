import React, { useState, useEffect } from 'react'
import Header from './Header';
import Board from './Board';

import getTimezone from './helper/getTimezone'



function App() {
  const defaultTimezones = [
    {
      tz: 'Europe/Stockholm',
      country: 'Sweden',
      city: 'Stockholm' 
    },
    {
      tz: 'Europe/London',
      country: 'UK',
      city: 'London' 
    },
    {
      tz: 'Europe/Paris',
      country: 'France',
      city: 'Paris' 
    },
    {
      tz: 'America/New_York',
      country: 'USA',
      city: 'New York' 
    },
    {
      tz: 'America/Los_Angeles',
      country: 'USA',
      city: 'Los Angeles' 
    },
    {
      tz: 'Europe/Moscow',
      country: 'Russia',
      city: 'Moscow' 
    },
    {
      tz: 'Asia/Tokyo',
      country: 'Japan',
      city: 'Tokyo' 
    },
  ]

  
  const [city, setCity] = useState('');
  const [searchVal, setSearchVal] = useState('');
  const [timezones, setTimezones] = useState(defaultTimezones);
  
  
  
  const onChange = e => setSearchVal(e.currentTarget.value);
  
  const onSubmit = (e) => {
    e.preventDefault();
    setCity(searchVal);
  };
  
  useEffect(() => {
    const newTimezone = getTimezone(city);
    if(newTimezone) return setTimezones([...newTimezone, ...timezones])
  }, [city] );

  return (
    <>
      <Header onChange={e => onChange(e)} onSubmit={e => onSubmit(e)}/>
      <Board timezones={timezones} />
    </>
  )
}

export default App;
