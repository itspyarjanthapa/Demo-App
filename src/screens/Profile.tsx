import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  const handleLogout = () => {
    // TODO: add your logout logic here (e.g., clear tokens, navigate to login)
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

  useEffect(() => {
    getdata();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />

      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My Profile</Text>
      </View>

      {/* Profile Card */}
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // Replace with real image
          style={styles.profileImage}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>johndoe@example.com</Text>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Gender</Text>
          <Text style={styles.value}>Male</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Profession</Text>
          <Text style={styles.value}>Software Developer</Text>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f7ff', // light blue background
    padding: 20,
  },
  header: {
    marginTop: 50,
    marginBottom: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E3A8A', // dark blue
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#1E40AF', // blue border
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E3A8A',
  },
  email: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },
  infoBox: {
    width: '100%',
    backgroundColor: '#f0f4ff',
    padding: 12,
    borderRadius: 12,
    marginTop: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E3A8A',
  },
  value: {
    fontSize: 14,
    color: '#444',
    marginTop: 2,
  },
  logoutButton: {
    marginTop: 25,
    backgroundColor: '#1E40AF',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
