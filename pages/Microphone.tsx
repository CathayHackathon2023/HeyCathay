/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import generalStyles from './../styles/GeneralStyles';
import {View, Text, Pressable, Image, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
function Microphone(): JSX.Element {
  return (
    <SafeAreaView style={[generalStyles.backgroundStyles, {flex: 1}]}>
      <View style={{alignContent: 'center', justifyContent: 'center'}}>
        <Pressable>
          <Image
            style={{width: 40, height: 40}}
            source={require('./../assets/microphone.png')}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default Microphone;
