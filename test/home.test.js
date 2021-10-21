import React from 'react';
import Home from '../screens/home'
import { render, fireEvent, act } from '@testing-library/react-native';

const flushMicrotasksQueue = () =>
  new Promise((resolve) => setImmediate(resolve));

//   it("it should direct to About page when arrow is pressed",async () => {
//     fetch.mockResponseOnce(JSON.stringify({ passes: true }));
  
//     const pushMock = jest.fn();
//     const {getByTestId} = render(<Home navigation={{navigate: pushMock }} />);

//     fireEvent.press(getByTestId("About.Button"));
  
//     // expect(fetch.mock.calls).toMatchSnapshot();
//     await act(flushMicrotasksQueue);
  
//     expect(pushMock).toBeCalledWith("About");
//   });

  it("it should direct to Staff page when Staff is pressed",async () => {
    fetch.mockResponseOnce(JSON.stringify({ passes: true }));
  
    const pushMock = jest.fn();
    const { getByTestId } = render(<Home navigation={{navigate: pushMock }} />);

    fireEvent.press(getByTestId("Staff.Button"));
  
    // expect(fetch.mock.calls).toMatchSnapshot();
    await act(flushMicrotasksQueue);
  
    expect(pushMock).toBeCalledWith("Details");
  });
  
  it("Check logout button press",async () => {
    fetch.mockResponseOnce(JSON.stringify({ passes: true }));
  
    const pushMock = jest.fn();
    const { getByTestId } = render(<Home navigation={{replace: pushMock }} />);

    fireEvent.press(getByTestId("Logout.Button"));
  
    // expect(fetch.mock.calls).toMatchSnapshot();
    await act(flushMicrotasksQueue);
  
    expect(pushMock).toBeCalledWith("login");
  });
  



