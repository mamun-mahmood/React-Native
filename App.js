import {
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Homepage from "./views/homepage/Homepage"
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Homepage/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create ({
  container: {
    paddingTop: 20,
  }
})