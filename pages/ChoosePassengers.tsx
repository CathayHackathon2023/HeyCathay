/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import showAvailableFlightsStyles from './styles/ShowAvailableFlightsStyles';
import generalStyles from './../styles/GeneralStyles';

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
          <View
            style={{
              backgroundColor: '#E6E7E8',
              padding: '5%',
              borderRadius: 14,
            }}>
            <View style={[generalStyles.row, generalStyles.bottomMargin10]}>
              <View
                style={{
                  alignItems: 'flex-start',
                  width: '100%',
                  borderBottomWidth: 1,
                  padding: '2%',
                }}>
                <Text style={[generalStyles.textHeader, {textAlign: 'left'}]}>
                  Passengers
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: '5%',
                borderBottomWidth: 1,
              }}>
              <View>
                <Text>Adult</Text>
              </View>
              <View style={{flexDirection: 'column', flex: 1}}>
                <View style={{alignSelf: 'flex-end'}}>
                  <View style={{flexDirection: 'row'}}>
                    <Pressable
                      onPress={() => {
                        const temp = numberOfPassengers - 1;
                        if (!(temp <= 2)) {
                          setNumberOfPassengers(temp);
                        } else {
                          setNumberOfPassengers(1);
                        }
                      }}>
                      <Image
                        style={{width: 20, height: 20}}
                        source={require('./../assets/remove.png')}
                      />
                    </Pressable>
                    <Text>{numberOfPassengers}</Text>
                    <Pressable
                      onPress={() => {
                        const temp = numberOfPassengers + 1;
                        if (!(temp > 5)) {
                          setNumberOfPassengers(temp);
                        }
                      }}>
                      <Image
                        style={{width: 20, height: 20}}
                        source={require('./../assets/add.png')}
                      />
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: '5%',
                borderBottomWidth: 1,
              }}>
              <View>
                <Text>Children</Text>
              </View>
              <View style={{flexDirection: 'column', flex: 1}}>
                <View style={{alignSelf: 'flex-end'}}>
                  <View style={{flexDirection: 'row'}}>
                    <Pressable
                      onPress={() => {
                        const temp = numberOfChildren - 1;
                        if (!(temp < 0)) {
                          setNumberOfChildren(temp);
                        } else {
                          setNumberOfChildren(0);
                        }
                      }}>
                      <Image
                        style={{width: 20, height: 20}}
                        source={require('./../assets/remove.png')}
                      />
                    </Pressable>
                    <Text>{numberOfChildren}</Text>
                    <Pressable
                      onPress={() => {
                        const temp = numberOfChildren + 1;
                        if (!(temp > 5)) {
                          setNumberOfChildren(temp);
                        }
                      }}>
                      <Image
                        style={{width: 20, height: 20}}
                        source={require('./../assets/add.png')}
                      />
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: '5%',
                borderBottomWidth: 1,
              }}>
              <View>
                <Text>Infant</Text>
              </View>
              <View style={{flexDirection: 'column', flex: 1}}>
                <View style={{alignSelf: 'flex-end'}}>
                  <View style={{flexDirection: 'row'}}>
                    <Pressable
                      onPress={() => {
                        const temp = numberOfInfants - 1;
                        if (!(temp < 0)) {
                          setNumberOfInfants(temp);
                        } else {
                          setNumberOfInfants(0);
                        }
                      }}>
                      <Image
                        style={{width: 20, height: 20}}
                        source={require('./../assets/remove.png')}
                      />
                    </Pressable>
                    <Text>{numberOfInfants}</Text>
                    <Pressable
                      onPress={() => {
                        const temp = numberOfInfants + 1;
                        if (!(temp > 5)) {
                          setNumberOfInfants(temp);
                        }
                      }}>
                      <Image
                        style={{width: 20, height: 20}}
                        source={require('./../assets/add.png')}
                      />
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
            <View style={[generalStyles.row]}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{alignContent: 'flex-start'}}>
                  <Text style={generalStyles.textHeader2}>
                    Total Passengers:
                    {numberOfChildren + numberOfInfants + numberOfPassengers}
                  </Text>
                </View>
              </View>
            </View>
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

export default ChoosePassengers;
