import React from 'react';
import {View, Text} from 'react-native';
import generalStyles from './../styles/GeneralStyles';

import FlightInfoButtonStyles from './styles/FlightInfoButtonStyles';
function FlightInfoButton(): JSX.Element {
  return (
    <View style={FlightInfoButtonStyles.container}>
      <Text style={FlightInfoButtonStyles.whiteText}>CX691</Text>
      <View style={[generalStyles.row, {flex: 0}]}>
        <View style={FlightInfoButtonStyles.leftSideAlign}>
          <Text style={FlightInfoButtonStyles.whiteTextBig}>07:50</Text>
        </View>
        <View style={FlightInfoButtonStyles.rightSideAlign}>
          <Text style={FlightInfoButtonStyles.whiteTextBig}>12:00</Text>
        </View>
      </View>
      <View style={[generalStyles.row, {flex: 0}]}>
        <View style={FlightInfoButtonStyles.leftSideAlign}>
          <Text style={FlightInfoButtonStyles.whiteTextBig}>SIN</Text>
        </View>
        <View style={FlightInfoButtonStyles.rightSideAlign}>
          <Text style={FlightInfoButtonStyles.whiteTextBig}>HKG</Text>
        </View>
      </View>
    </View>
  );
}
export default FlightInfoButton;
