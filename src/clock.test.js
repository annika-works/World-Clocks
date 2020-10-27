import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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
    const { container } = render(<App />);
    const input = container.querySelector('.input');
    const btn = container.querySelector('button');

    fireEvent.change(input, { target: { value: 'Berlin' } })
    fireEvent.click(btn, {button: 1})

    expect(container.querySelectorAll('.card').length).toBe(8);
});
