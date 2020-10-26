import React from 'react';

const Header = ({ onChange, onSubmit }) => (
  <header>
    <h1>World Clocks</h1>
    <form>
      <input type="text" placeholder="City" onChange={e => onChange(e)} />
      <button type="submit" onClick={e => onSubmit(e)}>Submit</button>
    </form>
  </header>
);

export default Header;
