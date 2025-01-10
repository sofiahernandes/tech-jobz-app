import { 
  View, 
  Text, 
  TouchableOpacity, 
  Image, 
  Linking 
} from "react-native";

import useLike from "../../../hook/useLike";
import styles from "./footer.style";

const Footer = ({ url, data }) => {
  const { likeIcon, handleClickLike } = useLike();

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.likeBtn}
        onPress={() => handleClickLike(data)}
      >
        <Image
          source={likeIcon}
          resizeMode='contain'
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
