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

const dummyUsers = [
  {
    id: '1',
    name: 'John Doe',
    email: 'johndoe@example.com',
    gender: 'Male',
    profession: 'Software Engineer',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: '2',
    name: 'Sarah Smith',
    email: 'sarahsmith@example.com',
    gender: 'Female',
    profession: 'UI/UX Designer',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mikej@example.com',
    gender: 'Male',
    profession: 'Project Manager',
    image: 'https://randomuser.me/api/portraits/men/12.jpg',
  },
  {
    id: '4',
    name: 'Emma Brown',
    email: 'emmab@example.com',
    gender: 'Female',
    profession: 'Data Analyst',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

// const Users = () => {
//   const [userData, setuserData] = useState();

//   async function getallData() {
//     axios.get('http://192.168.1.68:4001/getAll-users').then(res => {
//       console.log(res.data);
//     });
//   }

  // useEffect(() => {
  //   getallData();
  // });

  const renderUser = ({ item }: { item: any }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.avatar} />
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
        data={dummyUsers}
        renderItem={renderUser}
        keyExtractor={item => item.id}
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
