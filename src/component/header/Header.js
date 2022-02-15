import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.headermain}>
      <Text>Dunk Swap</Text>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
    headermain: {
        width: "100%",
        height: 50,
        backgroundColor: "dodgerblue",
    }
})
