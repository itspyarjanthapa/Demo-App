import {
  Image,
  ImageStyle,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from './styles';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo as ImageStyle}
          source={require('./../../assets/image-1.png')}
          resizeMode="center"
        />
        <Text style={styles.textHeader}>Welcome Back!</Text>
        <Text style={styles.textSubheader}>
          Sign in to continue your learning journey.
        </Text>
        <TextInput style={styles.inptufeild} placeholder="Email Address" />
        <TextInput style={styles.inptufeild} placeholder="Password" />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.normalText}>Forget Your Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.normalText}>
            Don't have your account? {''}
            <Text style={[styles.normalText, { fontWeight: 500 }]}>Signup</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
