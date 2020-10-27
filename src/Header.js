import React from 'react';

const Header = ({ onChange, onSubmit }) => (
  <header>
    <h1>World Clocks</h1>
    <form>
      <input type="text" placeholder="City" onChange={e => onChange(e)} />
      <button type="submit" onClick={e => onSubmit(e)}>Add Clock</button>
    </form>
  </header>
);

export default Header;

// test if has time and city
// Error Message if city doesn't exist
// check if clock gets added to array on submit
