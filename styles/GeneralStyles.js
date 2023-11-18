import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  backgroundStyles: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  center: {
    alignItems: 'centers',
    fontAlign: 'center',
    alignSelf: 'center',
  },
  screenSize: {width: windowWidth * 0.8, height: windowHeight},
  textHeader: {fontWeight: 'bold', fontSize: 18},
  textHeader2: {fontWeight: 'bold', fontSize: 16, color: '#6F6F6F'},
  leftAlign: {
    alignItems: 'flex-start',
    alignContent: 'flex-end',
    marginRight: '5%',
  },
  rightAlign: {
    alignSelf: 'flex-end',
    marginLeft: '5%',
    alignContent: 'flex-end',
  },
  bottomMargin10: {marginBottom: '10%'},
  bottomMargin5: {marginBottom: '5%'},
  bottomMargin15: {marginBottom: '15%'},
});
export default styles;
