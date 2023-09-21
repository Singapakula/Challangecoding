import React from "react";
import { StyleSheet, TextInput, View,Image } from "react-native";
import { COLORS } from "@app/constants/themes";
import images from "@app/constants/images";
export default function Footer(){
    return(
        <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:15,marginTop:'auto',bottom:25}}>
            <View style={{left:12,height:50,width:50,backgroundColor:COLORS.blue,borderRadius:27,justifyContent:'center',alignItems:'center',bottom:10}}>
            <Image source={images.camere} style={{height:30,width:30,tintColor:COLORS.white,}}/>
            </View>
        <View style={style.container}>
          {/* <Camera width={20} height ={20} stroke={'#6180F2'}/> */}
          
          <TextInput 
          multiline={true} 
          style={{
            width:'50%',
            //marginLeft:20
          }}
          placeholder="Type Message"/>
           <View style={style.sent}>
          <Image source={images.share} style={{height:20,width:20,tintColor:COLORS.white}}/>
            
           </View>
        </View>
        </View>
    )
}
const style = StyleSheet.create({
    container:{
        width:'80%',
        borderRadius:20,
        backgroundColor:'#EEF1FF',
        height:50,
        alignItems:'center',
        flexDirection:'row',
        alignSelf:'center',
        //position:'absolute',
        bottom:10,
        paddingRight:10,
        paddingLeft:20,
       // marginLeft:'auto',
       right:10

        
    },
    sent:{
        backgroundColor:COLORS.blue,
        borderRadius:25,
        height:50,
        width:50,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        right:0
    }
})