/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import showAvailableFlightsStyles from './styles/ShowAvailableFlightsStyles';
import generalStyles from './../styles/GeneralStyles';
import FlightInfoButton from '../components/FlightInfoButton';

import {View, Image, SafeAreaView, Text} from 'react-native';

function ShowAvailableFlights(): JSX.Element {
  return (
    <SafeAreaView style={[showAvailableFlightsStyles.safeAreaView]}>
      <View style={generalStyles.screenSize}>
        <View style={showAvailableFlightsStyles.view}>
          <View style={(generalStyles.row, generalStyles.bottomMargin10)}>
            <Image source={require('./../assets/CathayLogo.png')} />
          </View>
          <View style={[generalStyles.row, generalStyles.bottomMargin5]}>
            <Text style={generalStyles.textHeader2}>
              Departing flight from:
            </Text>
          </View>
          <View style={[generalStyles.row, generalStyles.bottomMargin10]}>
            <Text style={generalStyles.textHeader}>Singapore to Hong Kong</Text>
          </View>
        </View>
        <FlightInfoButton />
      </View>
    </SafeAreaView>
  );
}

export default ShowAvailableFlights;
