import React from 'react';
import FoodForm from '../screens/reviewReply'
import { render, fireEvent, act } from '@testing-library/react-native';



  it("check if textFields are changing if an event occurs",async () => {
    
    const {getByTestId} = render(<FoodForm onChangeText={() => ({})} />);
    // getByTestId('Percentage')
    fireEvent.changeText(getByTestId("review.reply"), "name");

  });
 
  



