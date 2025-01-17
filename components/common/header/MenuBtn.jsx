import { View, Text } from "react-native";
import { useRouter } from 'expo-router';
import { Menu, MenuItem } from 'react-native-material-menu';

import styles from "./header.style";

const MenuBtn = ({ visible, toggleMenu }) => {
  const router = useRouter();
  
  return (
    <View style={styles.btnContainer}>
      <Menu
        visible={visible}
        anchor={<Text onPress={toggleMenu}>☰</Text>}
        onRequestClose={toggleMenu}
      >
        <MenuItem onPress={() => router.push("/app/index.js")}>Home</MenuItem>
        <MenuItem onPress={() => router.push("/app/profile.js")}>Profile</MenuItem>
        <MenuItem onPress={() => router.push("/app/liked-jobs.js")}>Liked Jobs</MenuItem>
      </Menu>
    </View>
  );
}

export default MenuBtn;
