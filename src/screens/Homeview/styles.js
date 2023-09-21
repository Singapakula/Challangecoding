import { StyleSheet } from "react-native"
import { SIZES, COLORS } from "@app/constants/themes"
export const styles = StyleSheet.create({
    bottomIcon: {
        height: 15,
        width: 15,
        // backgroundColor:COLORS.orange,
        position: 'absolute',
        bottom: 0,
        marginTop: 10,
        // color:COLORS.orange

    },
    header: {
        flexDirection: 'row',
        marginTop: SIZES.baseX5 * 2,
        justifyContent: 'space-between',
        marginHorizontal: 30
    },
    uploadvideo: {
        alignSelf: 'center',
        backgroundColor: '#D8E3E8',
        height: 300,
        width: 350,
        marginHorizontal: 20,
        padding: 7,
        borderRadius: 40,
        marginVertical: 10,
        justifyContent:'center'
    },
    bottomwrap: {
        marginTop: 'auto',
        height: 40,
        width: '100%',
        backgroundColor: '#000',
        opacity: 0.7,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        marginBottom: -2,
        blurRadius: 1,
        //justifyContent: 'center',
       // position:'absolute'
    },
    iconswrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    lefticons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    righticons: {
        height: 20,
        width: 20,
        tintColor: '#fff',
        margin: 5
    }
})
