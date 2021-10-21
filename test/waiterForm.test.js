import React from 'react';
import WaiterForm from '../screens/waiterForm'
import { render, fireEvent, act } from '@testing-library/react-native';


  it("check if textFields are changing if an event occurs",async () => {
    
    const {getByTestId} = render(<WaiterForm onPress={jest.fn()} />);
    fireEvent.changeText(getByTestId("Waiter.usernameInput"), "name");
  fireEvent.changeText(getByTestId("Waiter.passInput"), "abcdes");
  fireEvent.changeText(getByTestId("Waiter.emailInput"), "exam@gmail.com");
  fireEvent.changeText(getByTestId("Waiter.numInput"), "940776789678");
  fireEvent.changeText(getByTestId("Waiter.NICInput"), "978967789V");
  fireEvent.changeText(getByTestId("Waiter.sala"), "97896");
  });
 
  



