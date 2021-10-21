import React from 'react';
import Login from '../screens/login'
import { render, fireEvent, act } from '@testing-library/react-native';

const flushMicrotasksQueue = () =>
  new Promise((resolve) => setImmediate(resolve));

it("renders default elements", () => {
    const { getAllByText,getByLabelText,getByTestId} = render(<Login/>);
  
    expect(getAllByText("Welcome!").length).toBe(1);
    expect(getAllByText("Don't have an account ?").length).toBe(1);
    expect(getAllByText("Login").length).toBe(1);
    getByTestId('background')
    getByLabelText('Email');
    getByLabelText('Password');
  
  });
  it("it should direct to SignUp page when SignUp is pressed",async () => {
    fetch.mockResponseOnce(JSON.stringify({ passes: true }));
  
    const pushMock = jest.fn();
    const { getByTestId } = render(<Login navigation={{ replace: pushMock }} />);

    fireEvent.press(getByTestId("SignUp.Button"));
  
    // expect(fetch.mock.calls).toMatchSnapshot();
    await act(flushMicrotasksQueue);
  
    expect(pushMock).toBeCalledWith("signup");
  });
  
it("it should handle valid input submission",async () => {
  fetch.mockResponseOnce(JSON.stringify({ passes: true }));

  const pushMock = jest.fn();
  const { getByTestId } = render(<Login navigation={{ replace: pushMock }} />);

  fireEvent.changeText(getByTestId("Login.passInput"), "abcdes");
  fireEvent.changeText(getByTestId("Login.emailInput"), "exam@gmail.com");
  fireEvent.press(getByTestId("login.Button"));

  // expect(fetch.mock.calls).toMatchSnapshot();
  await act(flushMicrotasksQueue);

  expect(pushMock).toBeCalledWith("homeScreen");
});


