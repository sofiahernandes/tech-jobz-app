import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { RegisterForm } from "../profile/RegisterForm";
import * as ImagePicker from 'expo-image-picker';

import { COLORS, images } from "../../../constants/index";

const EditInfo = () => {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaType.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };

  return (
    <View style={styles.editContainer}>
      <View style={styles.avatarContainer}>
        {image ? (
          <Image source={{ uri: image }} style={styles.profilePhoto}/>
        ) : (
          <Image source={{ uri: images.profile }} style={styles.profilePhoto}/> 
        )}
        <Text style={styles.title}>{userInfo.name}</Text>

        <TouchableOpacity style={styles.changeAvatarButton} onPress={() => pickImage()}>
          <Text style={styles.changeAvatarButtonText}>Change Avatar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <RegisterForm/>
      </View>
    </View>
  );
}

export default EditInfo;

// styles
const styles = StyleSheet.create({
  editContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.lightWhite
  },
  form: {
    width: '80%',
  },
  avatarContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  changeAvatarButtonText: {
    color: '#1E90FF',
    fontSize: 14,
    marginTop: 8
  },
});
