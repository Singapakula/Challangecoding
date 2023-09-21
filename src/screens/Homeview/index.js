import Navigations from "@app/navigations/navigations";
import React from "react";
import { View, Text, Pressable, Image, FlatList, ScrollView, StatusBar } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SIZES, COLORS } from "@app/constants/themes";
import images from "@app/constants/images";
import { styles } from "./styles";
import Cards from "@app/components/Cards";
import Statuscomponent from "@app/components/Statuscomponent";
import { Statusdata, CARDDATA } from "../../components/Storagecompoent/Statusdata";
import Video from "react-native-video";
const Homeview = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const Postview = route?.params?.Newpost
    const Renderdata = () => {
        return (
            <View style={{ flex: 1, }}>
                <StatusBar translucent backgroundColor='transparent' barStyle={'dark-content'} />

                <View style={styles.header}>
                    <Pressable>
                        <Image source={images.camere} style={{ height: 25, width: 28 }} />
                    </Pressable>
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            color: COLORS.black,
                        }}
                        onPress={() => navigation.navigate(Navigations.home)}>
                        EXPLORER
                    </Text>
                    <Pressable>
                        <Image source={images.notification1} style={{ height: 25, width: 28 }} />

                    </Pressable>

                </View>
                <View style={{ marginTop: 10 }}>
                    <ScrollView
                        horizontal={true}
                        style={{ marginTop: 10, padding: 10 }}
                        showsHorizontalScrollIndicator={false}
                    >
                        {Statusdata.map((item) => (
                            <Statuscomponent key={item.id} img={item.prp} name={item.name} />
                        ))}
                    </ScrollView>
                </View>

                <ScrollView style={{ marginTop: 20 }}>
                    <FlatList
                        data={CARDDATA}
                        scrollEnabled={false}
                        renderItem={({ item }) => {
                            return (
                                <Cards
                                    name={item.name}
                                    key={item.id}
                                    title={item.title}
                                    prp={item.prp}
                                    likes={item.likes}
                                    img={item.img}
                                />
                            )
                        }}
                        keyExtractor={item => item.id.toString()}

                    />
                    {Postview ? ( // Check if videoPath is available
                        <View style={styles.uploadvideo}>
                            <Video
                                source={{ uri: Postview }} // Use the videoPath to display the recorded video
                                style={{
                                    width: '100%',
                                    height: 238,
                                    borderRadius: 40, top: 50
                                }}
                                resizeMode="cover"
                                repeat={true}
                            />
                            <View style={styles.bottomwrap}>
                                <View style={styles.iconswrap}>
                                    <View style={styles.lefticons}>
                                        <Text style={{ color: COLORS.white, fontSize: 15, }}>•••</Text>
                                        <Image source={images.heart} style={styles.righticons} />
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image source={images.share} style={styles.righticons} />
                                        <Image source={images.save} style={styles.righticons} />
                                    </View>
                                </View>
                            </View>
               
                        </View>
                    ):null}
                </ScrollView>
            </View>
        )
    }
    return (
        <>
            {Renderdata()}
        </>
    )
}
export default Homeview