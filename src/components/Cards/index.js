import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Dimensions, Image, Text } from "react-native";
import Navigations from "@app/navigations/navigations";
import { COLORS } from "@app/constants/themes";
import images from "@app/constants/images";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { styles } from "./styles";
const Cards = ({ prp, name, title, img, likes }) => {
    const navigation = useNavigation()
    return (
        <View style={styles.mainwrap}>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.profile}>
                    <Image style={styles.profile}
                        source={prp}
                    />
                </View>
                <View style={styles.nameview}>
                    <Text style={styles.name}>{title}</Text>
                    <Text>{name}</Text>
                </View>
            </View>
            <Image style={styles.image}
                source={img} />
            <View style={styles.bottomwrap}>
                <View style={styles.iconswrap}>
                    <View style={styles.lefticons}>
                        <Text style={{ color: COLORS.white, fontSize: 15, }}>•••{likes}</Text>
                        <Image source={images.heart} style={styles.righticons} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={images.share} style={styles.righticons} />
                        <Image source={images.save} style={styles.righticons} />
                    </View>
                </View>
            </View>
        </View>
    )
}
export default Cards