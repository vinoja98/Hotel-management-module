import React from 'react';
import Room from '../screens/roomBooking'
import { render, fireEvent, act } from '@testing-library/react-native';

const flushMicrotasksQueue = () =>
  new Promise((resolve) => setImmediate(resolve));


  it("it should direct to Bookings when Bookings is pressed",async () => {
    fetch.mockResponseOnce(JSON.stringify({ passes: true }));
  
    const pushMock = jest.fn();
    const { getByTestId } = render(<Room navigation={{navigate: pushMock }} />);

    fireEvent.press(getByTestId("Booking.Button"));
  
    // expect(fetch.mock.calls).toMatchSnapshot();
    await act(flushMicrotasksQueue);
  
    expect(pushMock).toBeCalledWith("Bookings");
  });
 
  



