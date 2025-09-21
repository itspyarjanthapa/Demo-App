import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
  const [name, setName] = useState('');
  const [nameVerify, setNameVerify] = useState(false);
  const [email, setEmail] = useState('');
  const [verifyEmail, setVerifyEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState(false);
  const [showPass, setShowPass] = useState(false);

  function HandleName(e: NativeSyntheticEvent<TextInputChangeEventData>) {
    const nameVar = e.nativeEvent.text;
    setName(nameVar);
    setNameVerify(false);
    if (nameVar.length > 1) {
      setNameVerify(true);
    }
  }

  function HandleEmail(e: NativeSyntheticEvent<TextInputChangeEventData>) {
    const emailVar = e.nativeEvent.text;
    setEmail(emailVar);
    setVerifyEmail(false);
    if (/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{1,}$/.test(emailVar)) {
      setEmail(emailVar);
      setVerifyEmail(true);
    }
  }

  function HandlePassword(e: NativeSyntheticEvent<TextInputChangeEventData>) {
    const passVar = e.nativeEvent.text;
    setPassword(passVar);
    setVerifyPassword(false);
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(passVar)) {
      setPassword(passVar);
      setVerifyPassword(true);
    }
  }

  const navigation = useNavigation();
  function HandleSubmit() {
    const userData = {
      name: name,
      email,
      password,
    };

    if (nameVerify && verifyEmail && verifyPassword) {
      axios
        .post('http://192.168.1.68:4001/register', userData)
        .then(res => {
          console.log(res.data);

          if (res.data.status == 'ok') {
            Alert.alert('Registered Successfully!');
            navigation.navigate('Login');
          } else {
            Alert.alert('Users already exists!');
          }
        })

        .catch(err => console.error(err));
    } else {
      Alert.alert('All fields are required');
    }
  }
  console.log('data', HandleSubmit);
  return (
    <LinearGradient
      colors={['#5c6cf8ff', '#1b0388ff']}
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <View style={styles.icon}>
          <MaterialIcons name="check-circle" size={70} color="white" />
        </View>

        <Text style={styles.textHeader}>Create Account</Text>
        <Text style={styles.textSubheader}>
          Sign up to start your learning journey.
        </Text>

        {/* Name Input */}
        <View style={styles.inptufeild}>
          <View style={styles.inputDiv}>
            <FontAwesome name="user" size={20} color="#5c6cf8ff" />
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              onChange={e => HandleName(e)}
            />
          </View>
          {name.length < 1 ? null : nameVerify ? (
            <FontAwesome name="check-circle" size={20} color="green" />
          ) : (
            <FontAwesome name="exclamation" size={20} color="red" />
          )}
        </View>
        {name.length < 1 ? null : nameVerify ? null : (
          <Text style={styles.errorMsg}>
            Name should be more than 1 character.
          </Text>
        )}

        {/* Email Input */}
        <View style={styles.inptufeild}>
          <View style={styles.inputDiv}>
            <FontAwesome name="envelope" size={20} color="#5c6cf8ff" />
            <TextInput
              onChange={e => HandleEmail(e)}
              style={styles.input}
              textContentType="emailAddress"
              placeholder="Email Address"
            />
          </View>
          {email.length < 1 ? null : verifyEmail ? (
            <FontAwesome name="check-circle" size={20} color="green" />
          ) : (
            <FontAwesome name="exclamation" size={20} color="red" />
          )}
        </View>
        {email.length < 1 ? null : verifyEmail ? null : (
          <Text style={styles.errorMsg}>Enter Proper Email Address.</Text>
        )}

        {/* Password Input */}
        <View style={styles.inptufeild}>
          <View style={styles.inputDiv}>
            <FontAwesome name="lock" size={20} color="#5c6cf8ff" />
            <TextInput
              onChange={e => HandlePassword(e)}
              style={styles.input}
              textContentType="password"
              placeholder="Password"
              secureTextEntry={showPass}
            />
          </View>
          <TouchableOpacity onPress={() => setShowPass(!showPass)}>
            {password.length < 1 ? null : showPass ? (
              <FontAwesome
                name="eye"
                size={20}
                color={verifyPassword ? 'green' : 'red'}
              />
            ) : (
              <FontAwesome
                name="eye-slash"
                size={20}
                color={verifyPassword ? 'green' : 'red'}
              />
            )}
          </TouchableOpacity>
        </View>
        {password.length < 1 ? null : verifyPassword ? null : (
          <Text style={styles.errorMsg}>
            Uppercase, Lowercase, Number and 6 or more character.
          </Text>
        )}

        {/* Signup Button */}
        <TouchableOpacity onPress={() => HandleSubmit()} style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
        >
          <Text style={styles.normalText}>
            Already have an account?{' '}
            <Text style={[styles.normalText, styles.fontWeight]}>Sign in</Text>
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
    paddingHorizontal: 20,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'white',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 15,
    overflow: 'hidden',
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
  inputDiv: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    width: '100%',
  },
  errorMsg: { color: 'red', textAlign: 'left', width: '100%' },
});
