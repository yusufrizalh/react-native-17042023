import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
  },
  iconButtonHomeContainer: {marginRight: 10},
  iconButtonHome: {
    type: 'material',
    size: 50,
    color: 'white',
  },
  titleButtonHome: {
    fontWeight: '700',
    fontSize: 18,
  },
  buttonHome: {
    backgroundColor: 'rgba(70, 132, 153, 1)',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 25,
    height: 70,
  },
  buttonHomeContainer: {
    width: 300,
    marginHorizontal: 50,
    marginVertical: 20,
  },
});

export default styles;
