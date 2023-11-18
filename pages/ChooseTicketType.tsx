/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import showAvailableFlightsStyles from './styles/ShowAvailableFlightsStyles';
import generalStyles from './../styles/GeneralStyles';
import NextButton from '../components/NextButton';
import {View, Image, SafeAreaView, Text, Pressable} from 'react-native';
import MicrophoneButton from '../components/MicrophoneButton';

function ChooseTicketType(): JSX.Element {
  const [isSelected, setSelected] = useState(4);
  return (
    <SafeAreaView style={[showAvailableFlightsStyles.safeAreaView]}>
      <View style={generalStyles.screenSize}>
        <View style={showAvailableFlightsStyles.view}>
          <View style={(generalStyles.row, generalStyles.bottomMargin10)}>
            <Image source={require('./../assets/CathayLogo.png')} />
          </View>
          <View style={[generalStyles.row, generalStyles.bottomMargin15]}>
            <Text style={generalStyles.textHeader}>
              Which Cabin class do you prefer?
            </Text>
          </View>
        </View>
        <View
          style={[
            generalStyles.row,
            generalStyles.bottomMargin5,
            {backgroundColor: '#E6E7E8', padding: '5%', borderRadius: 14},
          ]}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <View
              style={[
                isSelected === 1 ? showAvailableFlightsStyles.selected : {},
                {height: 'auto', width: '100%'},
              ]}>
              <Pressable
                onPress={() => {
                  setSelected(1);
                }}
                style={{borderBottomWidth: 1, width: '100%', padding: '4%'}}>
                <Text style={[generalStyles.textHeader, {textAlign: 'left'}]}>
                  First
                </Text>
              </Pressable>
            </View>
            <View
              style={[
                isSelected === 2 ? showAvailableFlightsStyles.selected : {},
                {height: 'auto', width: '100%'},
              ]}>
              <Pressable
                onPress={() => {
                  setSelected(2);
                }}
                style={{borderBottomWidth: 1, width: '100%', padding: '4%'}}>
                <Text style={[generalStyles.textHeader, {textAlign: 'left'}]}>
                  Business
                </Text>
              </Pressable>
            </View>
            <View
              style={[
                isSelected === 3 ? showAvailableFlightsStyles.selected : {},
                {height: 'auto', width: '100%'},
              ]}>
              <Pressable
                onPress={() => {
                  setSelected(3);
                }}
                style={{borderBottomWidth: 1, width: '100%', padding: '4%'}}>
                <Text style={[generalStyles.textHeader, {textAlign: 'left'}]}>
                  Premium Economy
                </Text>
              </Pressable>
            </View>
            <View
              style={[
                isSelected === 4 ? showAvailableFlightsStyles.selected : {},
                {height: 'auto', width: '100%'},
              ]}>
              <Pressable
                onPress={() => {
                  setSelected(4);
                }}
                style={{borderBottomWidth: 1, width: '100%', padding: '4%'}}>
                <Text style={[generalStyles.textHeader, {textAlign: 'left'}]}>
                  Economy
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View
          style={[
            {alignItems: 'center', justifyContent: 'flex-end', flex: 1},
            generalStyles.bottomMargin5,
          ]}>
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

export default ChooseTicketType;
