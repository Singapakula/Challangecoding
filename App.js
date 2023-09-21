
import Maincontroller from "@app/navigations/Maincontroller";
import Home from "@app/screens/Profileview";
import React from "react";
import { View, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Maincontroller />
        
      </SafeAreaProvider>
    </GestureHandlerRootView>

  )
}
export default App