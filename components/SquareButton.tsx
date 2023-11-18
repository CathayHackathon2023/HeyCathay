/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import styles from './styles/SquareButtonStyles';
import generalStyles from './../styles/GeneralStyles';
import {View, Text, Pressable, Image} from 'react-native';

type SquareButtonProps = {
  text: string;
  img: string;
  background_color: string;
  style: string;
};

const SquareButton: React.FC<SquareButtonProps> = props => {
  return (
    <Pressable
      style={[
        {backgroundColor: props.background_color},
        styles.container,
        props.style === 'left'
          ? generalStyles.leftAlign
          : generalStyles.rightAlign,
      ]}>
      <Text style={styles.flightText}>{props.text}</Text>
    </Pressable>
  );
  //<Image style={{width: 40, height: 40}} />;
  //source={require(`./../assets/`)}
};

export default SquareButton;
