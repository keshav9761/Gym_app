import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

const Profile = () => {
  const [profilePhoto, setProfilePhoto] = useState(null);

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibrary({
        mediaType: 'photo',
        quality: 1,
      });

      if (result.didCancel) {
        Alert.alert('Selection canceled');
      } else if (result.errorCode) {
        Alert.alert('Error', result.errorMessage || 'Unknown error occurred');
      } else if (result.assets && result.assets.length > 0) {
        setProfilePhoto(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Error picking image:', error);
      Alert.alert('Error', 'Something went wrong');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick an Image" onPress={pickImage} />
      {profilePhoto && (
        <Image source={{ uri: profilePhoto }} style={styles.image} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 20,
  },
});

export default Profile;
