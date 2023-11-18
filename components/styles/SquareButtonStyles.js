import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    width: windowWidth * 0.35,
    height: windowWidth * 0.35,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: '2%',
  },
  innerContainer: {
    flexDirection: 'column',
  },
  flightText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  dateText: {
    color: 'white',
    fontWeight: 'light',
    fontSize: 12,
  },
  innerContainerType2: {
    flex: 1,
    alignSelf: 'flex-start',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
});
export default styles;
