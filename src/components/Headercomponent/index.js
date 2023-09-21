import React from 'react';
import { View, Text, Dimensions, StyleSheet, Pressable, Image } from 'react-native';
import images from '@app/constants/images';
import { COLORS, FONTS } from '@app/constants/themes';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('screen');
export default function Headercomponent({ onBackPress }) {
    const navigation = useNavigation();
    return (
        <View>
            <View style={style.constainer}>
                <Pressable style={style.calling}>
                    <Image source={images.profile} style={{ height: 40, width: 40, borderRadius: 20 }} />
                </Pressable>
                <View>
                    <Text style={{ ...FONTS.bold, color: COLORS.black }}>Molley Clark</Text>
                    <Text style={{ ...FONTS.regular, color: COLORS.black }}>Last seen 07:00pm</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    position: 'absolute',
                    right: 20
                }}>
                    <Pressable style={style.calling}>
                        <Image source={images.cancel} style={{ height: 40, width: 40, tintColor: COLORS.blue }} />
                    </Pressable>

                </View>

            </View>
            <View style={{ borderBottomWidth: 1, borderColor: '#000', width: 300,marginHorizontal:20 ,marginVertical:20}}>

            </View>
        </View>
    )
}
const style = StyleSheet.create({
    constainer: {
        bbackgroundColor: '#D8E3E8',
        height: height / 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        // marginBottom: 30
        // justifyContent: 'flex-end'
        //marginTop:80,
       // position:'absolute'
    },
    calling: {
        width: 40,
        height: 40,
        borderRadius: 10,
        // backgroundColor: 'rgba(255, 255, 255, 0.31)',
        //  opacity:0.4,
        //  zIndex:-1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        borderRadius: 15,
        //marginRight:10
    },
    arrowContainer: {
        position: 'absolute',
        // top: 20,
        left: 20,
    },
    profile: {
        backgroundColor: COLORS.white,
        width: 35,
        height: 35,
        borderRadius: 5,
        marginHorizontal: 10,
        marginLeft: 40
    }

})