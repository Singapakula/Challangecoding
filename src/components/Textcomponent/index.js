import React from "react";
import { View, StyleSheet, Text } from 'react-native';
import { COLORS, FONTS, SIZES } from "@app/constants/themes";
export default function Textcomponent({
    isReceive = false
}) {
    return (
        <View style={[style.container, {
            flexDirection: isReceive ? 'row' : 'row-reverse',
            alignSelf: isReceive ? 'flex-start' : 'flex-end',
        }]}>

            <View style={{
                // backgroundColor:'green',
                alignItems: isReceive ? 'flex-start' : 'flex-end'
            }}>
                <View style={[style.msg, {
                    backgroundColor: isReceive ? COLORS.blue : COLORS.white,
                   // borderBottomLeftRadius:isReceive?15:null

                }]}>
                    <Text style={{
                        ...FONTS.regular,
                        color: isReceive ? COLORS.white : COLORS.black,
                    }}>How may I help you ? you are most important person of my life</Text>
                </View>

            </View>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        flexDirection: 'row-reverse',
        alignSelf: 'flex-end',
        alignItems: 'baseline',
        width: '75%',
       // marginHorizontal: 10,
        marginBottom: 5,
        //  backgroundColor:'yellow',
        marginTop:40,
        position:'absolute'

    },
    profile: {
        backgroundColor: COLORS.gray2,
        width: 35,
        height: 35,
        borderRadius: 5,
        marginHorizontal: 5,
        // marginLeft: 40
        
    },
    msg: {
        //borderRadius: 10,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        borderTopRightRadius: 15,
        padding: 10,
        height: 40,
        maxWidth: '95%',
        height: 'auto'
    }
})