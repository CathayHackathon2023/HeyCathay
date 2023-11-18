/* eslint-disable prettier/prettier */
import React from 'react';
import styles from './styles/FlightInfoStyles';
import {View, Text, Pressable, Image} from 'react-native';

type FlightInfoProps = {
  from: string;
  to: string;
  date: string;
};

const FlightInfo: React.FC<FlightInfoProps> = props => {
  return (
    <Pressable style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.flightText}>{`${props.from} → ${props.to}`}</Text>
        <Text style={styles.dateText}>{props.date}</Text>
      </View>
      <Image
        style={{width: 40, height: 40}}
        source={require('./../assets/plane_icon.png')}
      />
    </Pressable>
  );
};

export default FlightInfo;
