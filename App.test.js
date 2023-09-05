import React from 'react';
import { render } from '@testing-library/react';
import BirthdayList from './BirthdayList';

test('renders birthday list with person details', () => {
  const birthdays = [
    { name: 'Honey Singh', date: '2004-12-15', image: 'URL_TO_HONEYSINGH_IMAGE' },
  
  ];

  const { getByText } = render(<BirthdayList birthdays={birthdays} />);
  
  // Assuming "John Doe" is in the rendered component
  const nameElement = getByText(/keshav/i);
  expect(nameElement).toBeInTheDocument();
});