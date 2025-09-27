import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Dummy feed data
const posts = [
  {
    id: '1',
    user: 'John Doe',
    profilePic: 'https://randomuser.me/api/portraits/men/1.jpg',
    postImage: 'https://picsum.photos/400/300?random=1',
    caption: 'Exploring the mountains 🏔️',
    likes: 120,
  },
  {
    id: '2',
    user: 'Jane Smith',
    profilePic: 'https://randomuser.me/api/portraits/women/2.jpg',
    postImage: 'https://picsum.photos/400/300?random=2',
    caption: 'Coffee time ☕',
    likes: 89,
  },
  {
    id: '3',
    user: 'Mike Johnson',
    profilePic: 'https://randomuser.me/api/portraits/men/3.jpg',
    postImage: 'https://picsum.photos/400/300?random=3',
    caption: 'Loving this sunset 🌅',
    likes: 200,
  },
];

const Home = () => {
  const renderItem = ({ item }) => (
    <View style={styles.postCard}>
      {/* User Info */}
      <View style={styles.userRow}>
        <Image source={{ uri: item.profilePic }} style={styles.avatar} />
        <Text style={styles.username}>{item.user}</Text>
      </View>

      {/* Post Image */}
      <Image source={{ uri: item.postImage }} style={styles.postImage} />

      {/* Caption */}
      <Text style={styles.caption}>
        <Text style={styles.username}>{item.user}</Text> {item.caption}
      </Text>

      {/* Likes */}
      <Text style={styles.likes}>{item.likes} likes</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Insights</Text>
        <TouchableOpacity>
          <FontAwesome name="heart-o" size={30} color="white" />;
        </TouchableOpacity>
      </View>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131212ff',
    paddingHorizontal: 15,
    paddingTop: 50,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffffff',
    marginBottom: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postCard: {
    backgroundColor: '#1b1b1bff',
    borderRadius: 15,
    marginBottom: 20,
    paddingBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#ffffffff',
  },
  username: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#ffffffff',
  },
  postImage: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  caption: {
    paddingHorizontal: 10,
    marginTop: 8,
    fontSize: 14,
    color: '#ffffffff',
  },
  likes: {
    paddingHorizontal: 10,
    marginTop: 5,
    fontSize: 13,
    fontWeight: '600',
    color: '#0365f8ff',
  },
});
