import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  view: {
    alignItems: 'center',
  },
  img: {
    width: 80,
    height: 80,
  },
  alignTextLeft: {
    textAlign: 'left',
  },
  whiteTextBig: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  whiteText: {
    color: '#D9D9D9',
    fontSize: 14,
    fontWeight: 'bold',
  },
  rightSideAlign: {
    flexDirection: 'row-reverse',
    flex: 1,
  },
  leftSideAlign: {
    alignItems: 'flex-start',
  },
  container: {
    backgroundColor: '#005D63',
    width: '100%',
    padding: '3%',
    borderRadius: 10,
  },
});
export default styles;
