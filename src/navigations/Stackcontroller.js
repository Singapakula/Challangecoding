import React from "react";
import { View, Text, Pressable } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Navigations from "./navigations";
import Messages from "@app/screens/Messages";
import Tabcontroller from "./tabcontroller";
import Primary from "@app/screens/Primary";
import Profileview from "@app/screens/Profileview";
import Notifications from "@app/screens/Notifications";



const Stackcontroller = () => {
    const Stack = createStackNavigator();
    return (
        <React.Fragment>
            <>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name={Navigations.postscreen} component={Tabcontroller}/>
          <Stack.Screen name={Navigations.profileview} component={Profileview}/>
          <Stack.Screen name={Navigations.messages} component={Messages}/>

          <Stack.Screen name={Navigations.primary} component={Primary}/>
          <Stack.Screen name={Navigations.notifications} component={Notifications}/>
         

        </Stack.Navigator>
        </>
        </React.Fragment>
    )
}
export default Stackcontroller