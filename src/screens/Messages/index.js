import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, ScrollView, Dimensions, ImageBackground,StatusBar } from "react-native";
import Navigations from "@app/navigations/navigations";
import Footer from "@app/components/Footercomponent";
import Headercomponent from "@app/components/Headercomponent";
import Textcomponent from "@app/components/Textcomponent"
import images from "@app/constants/images";
const Messages = () => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const navigation = useNavigation()
    return (

        <View style={{ flex: 1, }}>
        <StatusBar translucent backgroundColor='transparent' barStyle={'light-content'} />

            <ImageBackground
               // source={{ uri: 'https://file.kreditings.com/uploads/preview/green-nature-cb-photo-editing-background-full-hd-11675951002arzfuw3nsq.jpg' }}
               source={images.background}
                style={{ height: windowHeight + 50, width: windowWidth }} />
            <View style={{ position: 'absolute', backgroundColor: '#D8E3E8', height: windowHeight / 1.12, width: windowWidth / 1.12, alignSelf: 'center', marginTop: 115, borderRadius: 40,padding:10 }}>
                <View style={{ position: 'absolute' }}>
                    <Headercomponent />
                </View>
                <View style={{ marginTop: 90 }}>
                    <Textcomponent isReceive={true} />
                    <View style={{ marginTop: 70 }}>
                        <Textcomponent isReceive={false} />
                    </View>
                </View>
                <View style={{ marginTop: 90 }}>
                    <Textcomponent isReceive={true} />
                    <View style={{ marginTop: 70 }}>
                        <Textcomponent isReceive={false} />
                    </View>
                </View>
                <View style={{ marginTop: 90 }}>
                    <Textcomponent isReceive={true} />
                    <View style={{ marginTop: 70 }}>
                        <Textcomponent isReceive={false} />
                    </View>
                </View>



            </View>
            <Footer />
        </View>
    )
}
export default Messages