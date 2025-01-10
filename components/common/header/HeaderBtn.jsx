import { Image, Pressable } from "react-native";

import styles from "./header.style";

const HeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <Pressable 
      asChild
      style={styles.btnContainer} 
      onPress={() => handlePress()}
    >
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={styles.btnImg(dimension)}
      />
    </Pressable>
  );
};

export default HeaderBtn;
