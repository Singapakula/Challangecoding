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
        marginTop: SIZES.baseX5 * 3,
        justifyContent: 'space-between',
        marginHorizontal: 30
    },
    profile: {
        height: 50,
        width: 50,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 27,
    },
    mainwrap: {
        alignSelf: 'center',
        backgroundColor: '#D8E3E8',
        height: 300,
        width: 350,
        marginHorizontal: 20,
        padding: 7,
        borderRadius: 40,
        marginVertical: 10
    },
    profile: {
        height: 45,
        width: 45,
        borderRadius: 75 / 2
    },
    nameview: {
        marginLeft: 5,
        justifyContent: 'center'
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
        color: COLORS.black,
        marginBottom: -5
    },
    image: {
        width: '100%',
        height: 238,
        borderRadius: 40,
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
        justifyContent: 'center'
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
