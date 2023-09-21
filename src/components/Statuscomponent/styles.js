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
    profile: {
        height: 80,
        width: 80,
        backgroundColor: COLORS.blue,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        marginHorizontal: 6
    },
})
