import React from 'react';
import FoodForm from '../screens/foodForm'
import { render, fireEvent, act } from '@testing-library/react-native';

const flushMicrotasksQueue = () =>
  new Promise((resolve) => setImmediate(resolve));


  it("check if textFields are changing if an event occurs",async () => {
    
    const {getByTestId} = render(<FoodForm onPress={jest.fn()} />);
    // getByTestId('Percentage')
    fireEvent.changeText(getByTestId("FoodForm.food"), "name");
    fireEvent.changeText(getByTestId("FoodForm.code"), "abcdes");
    fireEvent.changeText(getByTestId("FoodForm.img"), "exam.com");
    fireEvent.changeText(getByTestId("FoodForm.desc"), "nice");
    fireEvent.changeText(getByTestId("FoodForm.dis"), "9");
    fireEvent.changeText(getByTestId("FoodForm.price"), "978");
  });
 
  



