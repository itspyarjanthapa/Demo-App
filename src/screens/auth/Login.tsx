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

const Login = () => {
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

        <Text style={styles.textHeader}>Welcome Back!</Text>
        <Text style={styles.textSubheader}>
          Sign in to continue your learning journey.
        </Text>

        <View style={styles.inptufeild}>
          <FontAwesome name="envelope" size={20} color="#5c6cf8ff" />
          <TextInput
            textContentType="emailAddress"
            placeholder="Email Address"
          />
        </View>

        <View style={styles.inptufeild}>
          <FontAwesome name="lock" size={20} color="#5c6cf8ff" />
          <TextInput textContentType="password" placeholder="Password" />
        </View>

        <View style={styles.fullWidth}>
          <TouchableOpacity style={styles.forgetButton}>
            <Text style={styles.forgetPass}>Forget Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Signup');
          }}
        >
          <Text style={styles.normalText}>
            Don't have your account? {''}
            <Text style={[styles.normalText, styles.fontWeight]}>Signup</Text>
          </Text>
        </TouchableOpacity>

        <Text style={styles.textSubheader}>OR</Text>
        <TouchableOpacity style={styles.googleButton}>
          <FontAwesome name="google" size={25} color="#5c6cf8ff" />
          <Text style={styles.googleButtontext}>Continue with google</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Login;

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
  forgetPass: {
    color: 'white',
    marginTop: 15,
  },
  forgetButton: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    textAlign: 'right',
  },
  fullWidth: {
    width: '100%',
  },
  fontWeight: {
    fontWeight: 500,
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
  },
  googleButtontext: {
    color: '#5c6cf8ff',
    fontSize: 18,
    fontWeight: 400,
  },
});
