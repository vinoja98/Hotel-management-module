import React from 'react';
import Bookings from '../screens/bookings'
import { render, fireEvent, act } from '@testing-library/react-native';

it("renders default elements", () => {
    const { getAllByText,getByLabelText,getByTestId} = render(<Bookings/>);
//    getAllByText("RoomID: ")
  
})


 
  



