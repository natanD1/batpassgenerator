import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoContainer: {
    backgroundColor: '#000',
    borderWidth: 2,
    borderColor: '#e5bf3c',
    paddingTop: 20,
    paddingBottom: 10,
    marginBottom: 60
  },
  inputContainer: {
    width: '80%',
    alignItems: 'center',
    flexDirection: 'column'
  }
});

export default styles