import React from "react";
import { View, Text, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Stackcontroller from "./Stackcontroller";
import Tabcontroller from "./tabcontroller";



const Maincontroller = () => {
    return (
        <NavigationContainer>
            <Stackcontroller />
          
        </NavigationContainer>
    )
}
export default Maincontroller