/* eslint-disable react-native/no-inline-styles */
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
        {
          backgroundColor: props.background_color,
          flex: 1,
        },
        styles.container,
        props.style === 'left'
          ? generalStyles.leftAlign
          : generalStyles.rightAlign,
      ]}>
      <View style={styles.innerContainerType2}>
        <Text style={styles.flightText}>{props.text}</Text>
        <View style={styles.imageContainer}>
          <Image
            style={{
              width: 70,
              height: 70,
            }}
            source={
              props.img === 'book_flight'
                ? require('./../assets/book_flight.png')
                : require('./../assets/hotel.png')
            }
          />
        </View>
      </View>
    </Pressable>
  );
  //<Image style={{width: 40, height: 40}} />;
  //source={require(`./../assets/`)}
};

export default SquareButton;
