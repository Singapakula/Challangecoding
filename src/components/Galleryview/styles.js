import { COLORS, SIZES } from '@app/constants/themes';
import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    mainview: {
        flex: 1
    },
    logostyles: {
        width: 200,
        height: 60,
        position: 'absolute',
        alignSelf: 'center',
        marginVertical: 55
    },
    loginview: {
        height: windowHeight,
        // flex:1,
        width: windowWidth,
        //alignSelf:'center',
        marginTop: 200,
        borderTopRightRadius: SIZES.baseX5 * 2,
        borderTopLeftRadius: SIZES.baseX5 * 2,
        position: 'absolute',
        backgroundColor: '#e6edec'

    },
    followers: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: COLORS.black,
    },
    profile: {
        height: 85, width: 85, backgroundColor: COLORS.white, alignItems: 'center', justifyContent: 'center', borderRadius: 40, marginTop: -50
    },
    about: {
        textAlign: 'center',
        marginTop: SIZES.baseX4,
    },
    followbutton: {
        shadowColor: COLORS.blue,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
        backgroundColor: COLORS.blue, borderRadius: SIZES.baseX3 * 5, width: SIZES.baseX5 * 4.5, height: 35
    },
    messagebutton: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13, backgroundColor: COLORS.white, borderRadius: SIZES.baseX3 * 5, width: SIZES.baseX5 * 4.5, height: 35
    },
    title:{fontSize:15,color:COLORS.black
    },
    label:{
      fontSize:15,
      color:COLORS.black  
    },
    galleryview:{
        height: 405,
        // flex:1,
        width: windowWidth,
        alignSelf:'center',
        marginTop: SIZES.baseX4,
        // borderTopRightRadius: SIZES.baseX5 * 2,
        // borderTopLeftRadius: SIZES.baseX5 * 2,
        borderRadius:SIZES.baseX5*2,
       // position: 'absolute',
        backgroundColor: '#fff',
        padding:15,
        //flexDirection:'row'
    }
})