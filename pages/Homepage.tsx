/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import FlightInfo from './../components/FlightInfo';
import React from 'react';
import SquareButton from '../components/SquareButton';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import generalStyles from './../styles/GeneralStyles';
import {SafeAreaView, View, Image, Text, ScrollView} from 'react-native';
import MicrophoneButton from '../components/MicrophoneButton';

function HomePage(): JSX.Element {
  return (
    <SafeAreaView style={generalStyles.backgroundStyles}>
      <View style={[generalStyles.screenSize, generalStyles.center]}>
        <View style={[generalStyles.row, generalStyles.bottomMargin10]}>
          <Image source={require('./../assets/CathayLogo.png')} />
        </View>
        <View
          style={[
            generalStyles.row,
            generalStyles.center,
            generalStyles.bottomMargin15,
          ]}>
          <Text style={generalStyles.textHeader}>Welcome Mr.Chan</Text>
        </View>
        <View
          style={[
            generalStyles.row,
            generalStyles.center,
            generalStyles.bottomMargin15,
          ]}>
          <Text style={generalStyles.textHeader2}>Your Upcoming Flights:</Text>
        </View>
        <View style={{width: '100%'}}>
          <ScrollView>
            <FlightInfo from="HKG" to="SIN" date="23rd of January" />
            <FlightInfo from="SIN" to="HKG" date="26rd of January" />
            <FlightInfo from="HKG" to="TPI" date="27rd of January" />
          </ScrollView>
        </View>

        <View
          style={[
            generalStyles.row,
            {alignContent: 'flex-end', alignItems: 'flex-end'},
          ]}>
          <SquareButton
            text={'Book flight'}
            img={'book_flight.png'}
            background_color={'#93B3C8'}
            style={'left'}
          />
          <SquareButton
            text={'Book Hotel'}
            img={'hotel.png'}
            background_color={'#00AEEF'}
            style={'right'}
          />
        </View>

        <MicrophoneButton />
      </View>
    </SafeAreaView>
  );
}

export default HomePage;
