import React from 'react';
import Clock from './Clock';

import './styles/board.scss';

const Board = ({ timezones }) => (
  <section className="card-deck">
    {timezones.map(({ tz, city }) => <Clock key={tz} tz={tz} city={city} />)}
  </section>
);

export default Board;
