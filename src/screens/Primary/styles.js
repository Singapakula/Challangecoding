import { StyleSheet } from "react-native"
import { SIZES,COLORS } from "@app/constants/themes"
export const styles=StyleSheet.create({
    bottomIcon:{
        height:15,
        width:15,
        // backgroundColor:COLORS.orange,
        position:'absolute',
        bottom:0,
        marginTop:10,
        // color:COLORS.orange
    
        },
        container: {
            flex: 1,
            //justifyContent: 'center',
            //alignItems: 'center',
            //marginTop: 100
          },
          camera: {
            width: '100%',
            // height:'100%',
            aspectRatio: 14
            /9, // Adjust aspect ratio as needed
            height: 600, // Increase the height as desired
        
          },
          buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 80,
          },
          button: {
            width: '25%',
            height: 45,
            borderRadius: 10,
            backgroundColor: 'green',
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
          },
          stopButton: {
            backgroundColor: 'red', // Change color for stop button if needed
          },
          buttonText: {
            color: 'white',
          },
          share: {
            backgroundColor: 'blue',
            alignSelf: 'center',
            marginTop: 60,
            marginLeft: 20,
        
          },
          video: {
            height: 100,
            width: 150,
            marginTop: -20,
            //alignSelf: 'center',
            borderRadius: 25,
            // marginLeft:'auto',
            right: 40
          },

})
