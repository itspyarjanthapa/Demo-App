import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={['#5c6cf8ff', '#1b0388ff']}
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <View style={styles.icon}>
          <Icon name="check-circle" size={70} color="white" />
        </View>

        <Text style={styles.textHeader}>Create Account</Text>
        <Text style={styles.textSubheader}>
          Sign up to start your learning journey.
        </Text>

        {/* Name Input */}
        <View style={styles.inptufeild}>
          <FontAwesome name="user" size={20} color="#5c6cf8ff" />
          <TextInput placeholder="Full Name" />
        </View>

        {/* Email Input */}
        <View style={styles.inptufeild}>
          <FontAwesome name="envelope" size={20} color="#5c6cf8ff" />
          <TextInput
            textContentType="emailAddress"
            placeholder="Email Address"
          />
        </View>

        {/* Password Input */}
        <View style={styles.inptufeild}>
          <FontAwesome name="lock" size={20} color="#5c6cf8ff" />
          <TextInput
            textContentType="password"
            placeholder="Password"
            secureTextEntry
          />
        </View>

        {/* Signup Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.normalText}>
            Already have an account?{' '}
            <Text style={[styles.normalText, styles.fontWeight]}>Login</Text>
          </Text>
        </TouchableOpacity>

        <Text style={styles.textSubheader}>OR</Text>

        {/* Continue with Google */}
        <TouchableOpacity style={styles.googleButton}>
          <FontAwesome name="google" size={25} color="#5c6cf8ff" />
          <Text style={styles.googleButtontext}>Continue with Google</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  logoContainer: {
    width: '100%',
    paddingHorizontal: 15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textHeader: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  textSubheader: {
    fontSize: 16,
    color: 'white',
    marginBottom: 25,
    textAlign: 'center',
  },
  inptufeild: {
    borderRadius: 10,
    padding: 5,
    paddingLeft: 20,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'white',
    marginTop: 20,
    alignItems: 'center',
    gap: 15,
  },
  button: {
    backgroundColor: 'transparent',
    color: 'white',
    width: '100%',
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
    marginTop: 40,
  },

  buttonText: { color: 'white', fontSize: 20 },
  normalText: {
    color: 'white',
    marginVertical: 10,
  },
  icon: {
    marginBottom: 20,
  },
  fullWidth: {
    width: '100%',
  },
  fontWeight: {
    fontWeight: '500',
  },
  googleButton: {
    flexDirection: 'row',
    gap: 15,
    backgroundColor: 'white',
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 10,
  },
  googleButtontext: {
    color: '#5c6cf8ff',
    fontSize: 18,
    fontWeight: '400',
  },
});
