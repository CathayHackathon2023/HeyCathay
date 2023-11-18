import React from 'react';
import {Image, Pressable} from 'react-native';
function MicrophoneButton(): JSX.Element {
  return (
    <Pressable
      onPress={() => {
        //navigation.navigate(Microphone);
      }}
      style={{justifyContent: 'flex-end'}}>
      <Image
        source={require('./../assets/microphone.png')}
        style={{width: 60, height: 60}}
      />
    </Pressable>
  );
}
export default MicrophoneButton;
