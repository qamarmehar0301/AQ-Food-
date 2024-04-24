import React from "react";
import { View } from "react-native-animatable";
import { StyleSheet, StatusBar } from "react-native";
import { colors, parameters } from './src/Global/styles';
import RootNavigator from "./src/navigation/RootNavigator";

const App = () => {
  return (
    <View style={styles.header}>
      <StatusBar
        barStyle='light-content'
        backgroundColor={colors.statu_bar}
      />
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