import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Header from './Header';
import Clock from './Clock';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';





it('check if clock is rendering / added to the dom', () => {
  const { container } = render(<Clock tz="Europe/Stockholm" city="Stockholm" />);
  expect(container).toBeInTheDocument();
});

// test('Error Message if city doesnt exist', () => {
//   const { container } = render(<App ourProp="Ferlin" />);
//   // expect(container).toBeInTheDocument();
// });

test('check if clock gets added to array on submit', () => {
  render()
});
