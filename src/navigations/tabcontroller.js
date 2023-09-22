import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native';
import React from 'react';
import {
    createStackNavigator,
    CardStyleInterpolators,
    TransitionSpecs,
} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navigations from '@app/navigations/navigations';
import { COLORS, SIZES } from '@app/constants/themes';
import images from '@app/constants/images';
import Messages from '@app/screens/Messages';
import Primary from '@app/screens/Primary';
import Postscreen from '@app/screens/Postscreen';
import { useNavigation } from '@react-navigation/native';
import Homeview from '@app/screens/Homeview';
import Profileview from '@app/screens/Profileview';
import Notifications from '@app/screens/Notifications';


export default function Tabcontroller() {
    const Tab = createBottomTabNavigator();
    const navigation = useNavigation()
    return <Tab.Navigator
        // initialRouteName={Navigations.transferlist}
        screenOptions={({ route }) => ({
            tabBarVisible: route.name == Navigations.messages, // Hide tab bar on the "Messages" screen
            tabBarActiveTintColor: COLORS.orange,
            tabBarInactiveTintColor: COLORS.gray2,
            headerShown: false,
            gestureEnabled: false,
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            transitionSpec: {
                open: TransitionSpecs.TransitionIOSSpec,
                close: TransitionSpecs.TransitionIOSSpec,
            },
            tabBarStyle: {
                height: 70,
                paddingBottom: 20,
                width: SIZES.width,
                alignSelf: 'center',
                elevation: 10,
                backgroundColor: COLORS.blue,
            },
        })}>
        <Tab.Screen
            name={Navigations.homeview}
            component={Homeview}
            options={{
                tabBarShowLabel: false,
                //tabBarVisible: true,
                // tabBarLabel: 'Transactions',
                tabBarIcon: ({ focused, color, size, tintColor }) => (
                    <>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate(Navigations.profileview);
                            }}
                        >
                            <Image
                                source={images.home}
                                style={{
                                    height: 30,
                                    width: 30,
                                    tintColor: focused ? COLORS.orange : COLORS.white,
                                }}
                            />
                        </TouchableOpacity>

                    </>
                ),
            }}
        />
        <Tab.Screen
            name={Navigations.messages}
            component={Messages}
            options={{
                tabBarShowLabel: false,
                // tabBarLabel: 'Transactions',
                tabBarIcon: ({ focused, color, size }) => (
                    <>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate(Navigations.messages);
                            }}
                        >
                            <Image
                                source={images.chat}
                                style={{
                                    height: 30,
                                    width: 30,
                                    tintColor: focused ? COLORS.orange : COLORS.white,
                                }}
                            />
                        </TouchableOpacity>
                    </>
                ),
            }}
        />
        <Tab.Screen
            name={'1'}
            component={Primary}
            options={{
                // tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => (
                    <Pressable onPress={()=>navigation.navigate(Navigations.primary)}
                    style={{ top: -30, height: 60, width: 60, borderRadius: 30, backgroundColor: COLORS.gray2, justifyContent: 'center', opacity: 0.8, alignItems: 'center' }}>
                        <Image
                            resizeMode='contain'
                            source={images.plus}
                            style={{

                                height: 30,
                                width: 30,
                                tintColor: focused ? COLORS.orange : COLORS.white,
                            }}
                        />

                    </Pressable>

                ),

            }}
        />

        <Tab.Screen
            name={Navigations.profileview}
            component={Profileview}
            options={{
                tabBarVisible: true,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => (
                    <>
                      <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(Navigations.profileview);
                        }}
                    >
                        <Image
                            source={images.user}
                            style={{
                                height: 30,
                                width: 30,
                                tintColor: focused ? COLORS.orange : COLORS.white,
                            }}
                        />
                    </TouchableOpacity>

                    </>
                ),
            }}
        />
        <Tab.Screen
            name={Navigations.notifications}
            component={Notifications}
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => (
                    <>
                        <Image
                            source={images.notification}
                            style={{
                                height: 30,
                                width: 30,
                                tintColor: focused ? COLORS.orange : COLORS.white,

                            }}
                        />

                    </>
                ),
            }}
        />
    </Tab.Navigator>

}

const style = StyleSheet.create({
    bottomIcon: {
        height: 15,
        width: 15,
        // backgroundColor:COLORS.orange,
        position: 'absolute',
        bottom: 0,
        marginTop: 10,
        // color:COLORS.orange

    }
})