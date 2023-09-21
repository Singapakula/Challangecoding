import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import images from "@app/constants/images";
import { COLORS } from "@app/constants/themes";
const Statuscomponent = ({img,name}) => {
    return (
        <View style={{alignItems:'center'}}>
            <View style={styles.profile}>
                <Image style={{ height: 75, width: 75, borderRadius: 75 / 2 }}
                    source={img}
                />
            </View>
            <Text style={{fontWeight:'600',color:COLORS.black}}>{name}</Text>
        </View>
    )
}
export default Statuscomponent