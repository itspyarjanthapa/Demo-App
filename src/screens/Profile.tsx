import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  BackHandler,
  Alert,
} from 'react-native';

import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    AsyncStorage.setItem('isLoggedIn', '');
    AsyncStorage.setItem('token', '');
    navigation.navigate('Login');
    console.log('User logged out');
  };

  const [userData, setUserData] = useState('');

  async function getdata() {
    const token = await AsyncStorage.getItem('token');
    console.log(token);

    axios
      .post('http://192.168.1.68:4001/userdata', { token: token })
      .then(res => {
        console.log(res.data);
        setUserData(res.data.data);
      });
  }

  const handleBackPress = () => {
    Alert.alert('Exit App', 'Are you sure you want to exit?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'Exit',
        onPress: () => BackHandler.exitApp(),
        style: 'cancel',
      },
    ]);
    return true;
  };

  useFocusEffect(
    React.useCallback(() => {
      getdata();
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        handleBackPress,
      );

      return () => backHandler.remove();
    }, []),
  );

  useEffect(() => {
    // setTimeout(() => {
    //   Toast.show({
    //     type: 'success',
    //     text1: 'Hello',
    //     text2: 'This is some something 👋',
    //     visibilityTime: 10000
    //   });
    // }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My Profile</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('UpdateProfile', { userData })}
        >
          <IconM name="account-edit" size={30} color="white" />;
        </TouchableOpacity>
      </View>

      {/* Profile Card */}
      <View>
        <Image
          source={{
            uri:
              userData && userData.image
                ? userData.image
                : 'https://cdn-icons-png.flaticon.com/512/219/219983.png',
          }}
          style={styles.profileImage}
        />

        <Text style={styles.name}>{userData.name || 'New User'}</Text>
        <Text style={styles.email}>{userData.email || 'user@gmail.com'}</Text>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Gender</Text>
          <Text style={styles.value}>{userData.gender || 'N/A'}</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Profession</Text>
          <Text style={styles.value}>{userData.profession || 'N/A'}</Text>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131212ff',
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    marginTop: 50,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    objectFit: 'cover',
    borderColor: '#fff',
    borderWidth: 3,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffffff',
  },
  email: {
    fontSize: 14,
    color: '#ffffffff',
    marginBottom: 20,
  },
  infoBox: {
    width: '100%',
    backgroundColor: '#1b1b1bff',
    padding: 12,
    borderRadius: 12,
    marginTop: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0044ffff',
  },
  value: {
    fontSize: 14,
    color: '#ffffffff',
    marginTop: 2,
  },
  logoutButton: {
    marginTop: 25,
    backgroundColor: '#1b1b1bff',
    padding: 12,
    borderRadius: 10,
  },
  logoutText: {
    color: 'red',
    fontSize: 16,
    fontWeight: '600',
  },
});
