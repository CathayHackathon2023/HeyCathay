/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import HomePage from './pages/Homepage';
import Microphone from './pages/Microphone';
import ShowAvailableFlights from './pages/ShowAvailableFlights';
import ChooseTicketType from './pages/ChooseTicketType';
import ChoosePassengers from './pages/ChoosePassengers';
function App(): JSX.Element {
  return <ChoosePassengers />;
}
/*
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Microphone" component={Microphone} />
      </Stack.Navigator>
    </NavigationContainer>
*/
export default App;
