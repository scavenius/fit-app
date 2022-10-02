
import { View, Text, StyleSheet } from "react-native";
import HomeScreen from "./src/screens/Home/HomeScreen";

export default function App() {
  return (
    <View style={styles.body}>
      <HomeScreen />
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
}


/* Styles */
const styles = StyleSheet.create({
  body: {
    flex: 3,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    
  },


});