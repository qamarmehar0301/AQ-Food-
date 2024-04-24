import React from "react";
import { Text, View } from "react-native-animatable";
import Header from "./src/Components/Header";
import { StyleSheet, StatusBar } from "react-native";
import { colors, parameters } from './src/Global/styles';
import SignIn from "./src/screens/auth_screens/signIn";
import Welcome_Screen from "./src/screens/Welcome";
import RootNavigator from "./src/navigation/RootNavigator";

const App = () => {
  return (
    <View style={styles.header}>
      <StatusBar
        barStyle='light-content'
        backgroundColor={colors.statu_bar}
      />
      {/* <SignIn/> */}
      {/* <Welcome_Screen/> */}
      <RootNavigator/>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: 'white'
  }
})

export default App