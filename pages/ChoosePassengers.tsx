/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import showAvailableFlightsStyles from './styles/ShowAvailableFlightsStyles';
import generalStyles from './../styles/GeneralStyles';
import FlightInfoButton from '../components/FlightInfoButton';

import {View, Image, SafeAreaView, Text, Pressable} from 'react-native';
import MicrophoneButton from '../components/MicrophoneButton';
import NextButton from '../components/NextButton';

function ChoosePassengers(): JSX.Element {
  const [numberOfChildren, setNumberOfChildren] = useState(0);
  const [numberOfPassengers, setNumberOfPassengers] = useState(1);
  const [numberOfInfants, setNumberOfInfants] = useState(0);
  return (
    <SafeAreaView style={[showAvailableFlightsStyles.safeAreaView]}>
      <View style={generalStyles.screenSize}>
        <View style={showAvailableFlightsStyles.view}>
          <View style={(generalStyles.row, generalStyles.bottomMargin10)}>
            <Image source={require('./../assets/CathayLogo.png')} />
          </View>
          <View style={[generalStyles.row, generalStyles.bottomMargin15]}>
            <Text style={generalStyles.textHeader}>
              How many passengers are traveling?
            </Text>
          </View>
        </View>
        <View
          style={[
            generalStyles.row,
            generalStyles.bottomMargin10,
            {backgroundColor: '#E6E7E8', padding: '5%', borderRadius: 14},
          ]}>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-start',
              width: '80%',
              borderBottomWidth: 1,
              padding: '2%',
            }}>
            <Text style={[generalStyles.textHeader, {textAlign: 'left'}]}>
              Passengers
            </Text>
          </View>
          <View>
            <Text style={[generalStyles.textHeader, {textAlign: 'left'}]}>
              Passengers
            </Text>
          </View>
        </View>
        <View
          style={{alignItems: 'center', justifyContent: 'flex-end', flex: 1}}>
          <NextButton />
        </View>
        <View
          style={{alignItems: 'center', justifyContent: 'flex-end', flex: 1}}>
          <MicrophoneButton />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ChoosePassengers;
