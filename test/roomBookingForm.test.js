import React from 'react';
import RoomForm from '../screens/roomBookingForm'
import { render, fireEvent, act } from '@testing-library/react-native';


  it("check if textFields are changing if an event occurs",async () => {
    
    const {getByTestId} = render(<RoomForm onPress={jest.fn()} />);
    // getByTestId('Percentage')
    fireEvent.changeText(getByTestId("RoomBookForm.name"), "name");
    fireEvent.changeText(getByTestId("RoomBookForm.email"), "e@gmail.com");
    fireEvent.changeText(getByTestId("RoomBookForm.phone"), "09867777");
  });
 
  



