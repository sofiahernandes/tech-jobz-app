import { useState, useEffect } from "react";
import { Text, View, Pressable, Image, SafeAreaView } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as AuthSession from 'expo-auth-session';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack } from "expo-router";

import { icons, images, COLORS } from "../constants";
import styles from "../styles/profile.style";
import { EditInfo, HeaderBtn } from "../components";

WebBrowser.maybeCompleteAuthSession();

const Profile = () => {
    const [token, setToken] = useState("");
    const [userInfo, setUserInfo] = useState(null);
    const [addInfo, setAddInfo] = useState(false);

    const [image, setImage] = useState("");
    const [role, setRole] = useState("");
    const [experience, setExperience] = useState("");

    const [request, response, promptAsync] = AuthSession.useAuthRequest({
        androidClientId: `${process.env.ANDROID_CLIENT_ID}`,
        iosClientId: `${process.env.IOS_CLIENT_ID}`,
        webClientId: `${process.env.WEB_CLIENT_ID}`,
    });
  
    useEffect(() => {
        handleSignInGoogle();
    }, [response, token]);
  
    async function handleSignInGoogle() {
      const user = await getLocalUser();
      console.log("user", user);

      if (!user) {
        if (response?.type === "success") {
          setToken(response.authentication.accessToken);
          getUserInfo(response.authentication.accessToken);
        }
      } else {
        setUserInfo(user);
        console.log("loaded locally");
      }
    }
  
    const getLocalUser = async () => {
      const data = await AsyncStorage.getItem("@user");
      if (!data) return null;
      return JSON.parse(data);
    };
  
    const getUserInfo = async (token) => {
      if (!token) return;
      try {
        const response = await fetch( // response has the user info
          "https://www.googleapis.com/userinfo/v2/me",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
  
        // save user info locally
        const user = await response.json();
        await AsyncStorage.setItem("@user", JSON.stringify(user));
        setUserInfo(user);
      } catch (error) {
        console.error(error);
      }
    };

    const avatarImage = () => {
      if (image !== "") {
        return <Image source={{ uri: image }} style={styles.profilePhoto}/>
      } else if (userInfo.picture) {
        return <Image source={{ uri: userInfo?.picture }} style={styles.profilePhoto}/>
      } else {
        return <Image source={images.profile} style={styles.profilePhoto}/>
      }
    }

    return (
      <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <HeaderBtn
              source={icons.left}
              dimension='60%'
              path='../app/home.js'
            />
          ),
          headerTitle: "",
        }}
      />

      {!userInfo ? (
            <Pressable style={styles.buttonContainer}
                    onPress={() => {promptAsync()}} 
                    // disabled={!request} fix
                >
                <View style={styles.logoContainer}>
                  <Image
                      source={images.googleLogo}
                      resizeMode="contain"
                      style={styles.logoImage} // fix all styles // this view was a Pressable // delete account: <Pressable onPress={async () => await AsyncStorage.removeItem("@user")}/>
                  />
                </View>

                    <Text style={styles.buttonText} numberOfLines={1}>
                        Sign in with Google
                    </Text>
            </Pressable>
      ) : (
        <View>
          <View style={styles.profileContainer}>
            {avatarImage()}
            <Text style={styles.title}>{userInfo.name}</Text>
          </View>

          <View style={styles.statContainer}>
            <Text style={styles.statLabel}>Email</Text>
            <Text style={styles.statCount}>{userInfo.email}</Text>
          </View>
          
          <View style={styles.statContainer}>    
            <Text style={styles.statLabel}>Role</Text>
            <Text style={styles.statCount}>{role ? role : "Edit profile to add"}</Text>
          </View>
          
            <View style={styles.statContainer}>    
              <Text style={styles.statLabel}>Experience</Text>
              <Text style={styles.statCount}>{experience ? experience : "Edit profile to add"}</Text>
            </View>

          {addInfo && (
            <EditInfo
              image={image}
              setImage={setImage}
              role={role}
              setRole={setRole}
              experience={experience}
              setExperience={setExperience}
            />
          )}

          <Pressable onPress={() => { setAddInfo(!addInfo) }} style={styles.button}>
            <Text style={styles.buttonText}>{addInfo ? "Done" : "Add info"}</Text>
          </Pressable> 
        </View>
      )}
    </SafeAreaView>
    );
}

export default Profile;