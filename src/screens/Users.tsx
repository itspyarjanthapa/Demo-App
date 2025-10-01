import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const Users = () => {
  const [userData, setUserData] = useState<any[]>([]);

  async function getAllData() {
    try {
      const res = await axios.get('http://192.168.1.68:4001/getAll-users');

      if (Array.isArray(res.data.data)) {
        const loggedInUserEmail = await AsyncStorage.getItem('userEmail');

        const filteredUsers = res.data.data.filter(
          (user: any) => user.email !== loggedInUserEmail,
        );

        setUserData(filteredUsers);
      }
    } catch (error: any) {
      console.log('Error fetching users:', error.message);
    }
  }

  useEffect(() => {
    getAllData();
  }, []);

  const renderUser = ({ item }: { item: any }) => (
    <View style={styles.card}>
      <Image
        source={{
          uri:
            item.image && item.image !== ''
              ? item.image
              : 'https://cdn-icons-png.flaticon.com/512/219/219983.png',
        }}
        style={styles.avatar}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.email}>{item.email}</Text>
        <Text style={styles.detail}>Gender: {item.gender}</Text>
        <Text style={styles.detail}>Profession: {item.profession}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Find your friends</Text>

      <FlatList
        data={userData}
        renderItem={renderUser}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131212',
    padding: 15,
    paddingTop: 50,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1b1b1b',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
    backgroundColor: '#333',
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  email: {
    fontSize: 13,
    color: '#aaa',
    marginBottom: 5,
  },
  detail: {
    fontSize: 12,
    color: '#ccc',
  },
  button: {
    backgroundColor: '#7e86fa',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 12,
  },
});
