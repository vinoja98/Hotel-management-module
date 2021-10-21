import React from 'react';
import FoodEdit from '../screens/foodEdit'
import { render, fireEvent, act } from '@testing-library/react-native';


  it("check if textFields are changing if an event occurs",async () => {
    
    const {getByTestId} = render(<FoodEdit onChangeText={() => ({})} />);
    // getByTestId('Percentage')
    fireEvent.changeText(getByTestId("FoodEdit.food"), "name");
    fireEvent.changeText(getByTestId("FoodEdit.code"), "abcdes");
    fireEvent.changeText(getByTestId("FoodEdit.img"), "exam.com");
    fireEvent.changeText(getByTestId("FoodEdit.desc"), "nice");
    // fireEvent.changeText(getByTestId("FoodEdit.dis"), "9");
    // fireEvent.changeText(getByTestId("FoodEdit.price"), "978");
  });
 
  



