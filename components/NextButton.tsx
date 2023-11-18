import React from 'react';
import {Image, Pressable} from 'react-native';
function NextButton(): JSX.Element {
  return (
    <Pressable
      onPress={() => {
        //navigation.navigate(Microphone);
      }}
      style={{justifyContent: 'flex-end'}}>
      <Image
        source={require('./../assets/next.png')}
        style={{width: 60, height: 60}}
      />
    </Pressable>
  );
}
export default NextButton;
