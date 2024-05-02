import React from "react";
import { View } from "react-native-animatable";
import { StyleSheet, StatusBar } from "react-native";
import { colors, parameters } from './src/Global/styles';
import RootNavigator from "./src/navigation/RootNavigator";
import { SignInContextProvider } from "./src/context/auth_Context";

const App = () => {
  return (
    <SignInContextProvider>
      <View style={styles.header}>
        <StatusBar
          barStyle='light-content'
          backgroundColor={colors.statu_bar}
        />
        <RootNavigator />
      </View>
    </SignInContextProvider>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: 'white'
  }
})

export default App