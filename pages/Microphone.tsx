/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import MicrophoneStyles from './styles/MicrophoneStyles';
import {View, Pressable, Image, SafeAreaView} from 'react-native';

function Microphone(): JSX.Element {
  return (
    <SafeAreaView style={MicrophoneStyles.safeAreaView}>
      <View style={MicrophoneStyles.view}>
        <Pressable
          onPress={() => {
            console.log('hello world');
          }}>
          <Image
            style={MicrophoneStyles.img}
            source={require('./../assets/microphone.png')}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default Microphone;
