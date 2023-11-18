/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import showAvailableFlightsStyles from './styles/ShowAvailableFlightsStyles';
import generalStyles from './../styles/GeneralStyles';
import {
  View,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  Pressable,
} from 'react-native';
import MicrophoneButton from '../components/MicrophoneButton';
import NextButton from '../components/NextButton';
function ChooseTypeOfTicket(): JSX.Element {
  const [isSingle, setIsSingle] = useState(true);
  return (
    <SafeAreaView style={[showAvailableFlightsStyles.safeAreaView]}>
      <View style={generalStyles.screenSize}>
        <View style={showAvailableFlightsStyles.view}>
          <View style={(generalStyles.row, generalStyles.bottomMargin10)}>
            <Image source={require('./../assets/CathayLogo.png')} />
          </View>

          <View style={[generalStyles.row, generalStyles.bottomMargin10]}>
            <Text style={generalStyles.textHeader}>
              What type of flight is it?
            </Text>
          </View>
        </View>
        <View style={{alignContent: 'center'}}>
          {isSingle ? (
            <Pressable
              onPress={() => setIsSingle(false)}
              style={{
                backgroundColor: '#E6E7E8',
                alignSelf: 'center',
                padding: '5%',
                borderRadius: 30,
              }}>
              <Text>return</Text>
            </Pressable>
          ) : (
            <>
              <Pressable
                onPress={() => setIsSingle(true)}
                style={{
                  backgroundColor: '#005D63',
                  padding: '5%',
                  alignSelf: 'center',
                  borderRadius: 30,
                }}>
                <Text style={{color: '#FFF'}}>single</Text>
              </Pressable>
            </>
          )}
        </View>
        <View></View>
        <View style={{flexDirection: 'column'}}>
          <View style={{alignSelf: 'flex-start'}}>
            <Text>Departure Date</Text>
          </View>
          <View style={{alignSelf: 'flex-end'}}>
            <Text>Return Date</Text>
          </View>
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'flex-start',
            flex: 1,
            marginTop: '3%',
          }}>
          <NextButton />
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'flex-end',
            flex: 1,
            marginBottom: '10%',
          }}>
          <MicrophoneButton />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ChooseTypeOfTicket;
