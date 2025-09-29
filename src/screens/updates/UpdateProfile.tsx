import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const UpdateProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [profession, setProfession] = useState('');
  const [image, setImage] = useState('');
  const route = useRoute();
  const selectImage = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
      includeBase64: true,
      cropperCircleOverlay: true,
      avoidEmptySpaceAroundImage: true,
      freeStyleCropEnabled: true,
    }).then(image => {
      console.log(image);
      const ImgData = `data:${image.mime};base64,${image.data}`;
      setImage(ImgData);
    });
  };

  useEffect(() => {
    if (route.params && (route.params as any).userData) {
      const UserData = (route.params as any).userData;
      console.log('am i getting the data???', UserData);
      setName(UserData.name || '');
      setEmail(UserData.email || '');
      setGender(UserData.gender || '');
      setProfession(UserData.profession || '');
      setImage(UserData.image || '');
    }
  }, [route.params]);

  const updateProfile = () => {
    const formData = {
      name: name,
      email: email,
      gender: gender,
      image: image,
      profession: profession,
    };

    axios.post('http://192.168.1.68:4001/update-user', formData).then(res => {
      console.log(res.data);
      if (res.data.status == 'ok') {
        Toast.show({
          type: 'success',
          text1: 'Updated Successfully!!',
          visibilityTime: 10000,
        });
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Profile</Text>

      {/* Image Placeholder */}
      <TouchableOpacity
        onPress={() => selectImage()}
        style={styles.imageContainer}
      >
        <Image
          source={{
            uri: image
              ? image
              : 'https://cdn-icons-png.flaticon.com/512/219/219983.png',
          }}
          style={styles.profileImage}
        />
        {/* Camera Icon Overlay */}
        <TouchableOpacity
          onPress={() => selectImage()}
          style={styles.cameraIcon}
        >
          <Icon name="camera-alt" size={15} color="#fff" />
        </TouchableOpacity>
      </TouchableOpacity>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#888"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Gender Selection */}
      <Text style={styles.label}>Gender</Text>
      <View style={styles.genderContainer}>
        {['Male', 'Female', 'Other'].map(option => (
          <TouchableOpacity
            key={option}
            style={styles.radioButton}
            onPress={() => setGender(option)}
          >
            <View
              style={[
                styles.radioCircle,
                gender === option && styles.selectedRadio,
              ]}
            />
            <Text style={styles.radioText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TextInput
        style={styles.input}
        placeholder="Profession"
        placeholderTextColor="#888"
        value={profession}
        onChangeText={setProfession}
      />

      {/* Update Button */}
      <TouchableOpacity onPress={() => updateProfile()} style={styles.button}>
        <Text style={styles.buttonText}>Update Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131212',
    padding: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#000000ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    alignSelf: 'center',
  },
  profileImage: {
    borderWidth: 3,
    borderColor: '#fff',
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#7e86fa',
    padding: 6,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#131212',
  },
  input: {
    backgroundColor: '#1b1b1b',
    color: 'white',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },
  label: {
    color: 'white',
    marginBottom: 8,
    fontWeight: '500',
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioCircle: {
    height: 18,
    width: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#7e86fa',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  selectedRadio: {
    backgroundColor: '#7e86fa',
  },
  radioText: {
    color: 'white',
  },
  button: {
    backgroundColor: '#7e86fa',
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});
