import React from 'react';
import SignUp from '../screens/signup'
import { render, fireEvent, act } from '@testing-library/react-native';

const flushMicrotasksQueue = () =>
  new Promise((resolve) => setImmediate(resolve));

it("renders default elements", () => {
    const { getAllByText,getByLabelText,getByTestId} = render(<SignUp/>);
  
    expect(getAllByText("Register Now!").length).toBe(1);
    expect(getAllByText("Already have an account ?").length).toBe(1);
    expect(getAllByText("Login").length).toBe(1);
    getByTestId('background')
    getByLabelText('Name');
    getByLabelText('NIC');
    getByLabelText('Email');
    getByLabelText('Contact Number');
    getByLabelText('Password');
  
  });
  it("it should direct to login page when login is pressed",async () => {
    fetch.mockResponseOnce(JSON.stringify({ passes: true }));
  
    const pushMock = jest.fn();
    const { getByTestId } = render(<SignUp navigation={{ replace: pushMock }} />);

    fireEvent.press(getByTestId("login.Button"));
  
    // expect(fetch.mock.calls).toMatchSnapshot();
    await act(flushMicrotasksQueue);
  
    expect(pushMock).toBeCalledWith("login");
  });
  
it("it should handle valid input submission",async () => {
  fetch.mockResponseOnce(JSON.stringify({ passes: true }));

  const pushMock = jest.fn();
  const { getByTestId } = render(<SignUp navigation={{ replace: pushMock }} />);

  fireEvent.changeText(getByTestId("SignUp.usernameInput"), "name");
  fireEvent.changeText(getByTestId("SignUp.passInput"), "abcdes");
  fireEvent.changeText(getByTestId("SignUp.emailInput"), "exam@gmail.com");
  fireEvent.changeText(getByTestId("SignUp.numInput"), "940776789678");
  fireEvent.changeText(getByTestId("SignUp.NICInput"), "978967789V");
  fireEvent.press(getByTestId("SignUp.Button"));

  // expect(fetch.mock.calls).toMatchSnapshot();
  await act(flushMicrotasksQueue);

  expect(pushMock).toBeCalledWith("login");
});


