const { StyleSheet } = require('react-native');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logoContainer: {
    width: '100%',
    paddingHorizontal: 15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: '80',
    width: '80',
  },
  textHeader: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
  },
  textSubheader: {
    fontSize: 20,
    color: 'white',
    marginBottom: 25,
  },
  inptufeild: {
    borderRadius: 10,
    padding: 15,
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4a00c2ff',
    color: 'white',
    width: '100%',
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: { color: 'white', fontSize: 20 },
  normalText: {
    color: 'white',
    marginTop: 25,
  },
});

export default styles;
