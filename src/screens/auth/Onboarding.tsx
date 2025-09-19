import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function OnboardingScreen() {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={['#5c6cf8ff', '#1b0388ff']}
      style={styles.container}
    >
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require('../../assets/image-1.png')}
      />

      <Text style={styles.title}>Welcome to Demo App</Text>
      <Text style={styles.subtitle}>Your journey starts here!</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Signup');
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Login');
        }}
        style={[styles.button, styles.loginButton]}
      >
        <Text style={[styles.buttonText, styles.loginText]}>Login</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#eee',
    marginBottom: 50,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#491B6D',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#fff',
  },
  loginText: {
    color: '#fff',
  },
  logo: {
    height: 100,
    width: 100,
    marginBottom: 25,
    backgroundColor: 'white',
    borderRadius: 50,
  },
});
