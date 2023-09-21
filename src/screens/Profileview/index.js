import { COLORS, SIZES } from "@app/constants/themes";
import React from "react";
import { View, Text, Image, ImageBackground, Pressable, Dimensions, StatusBar, FlatList, ScrollView } from "react-native";
import Navigations from "@app/navigations/navigations";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import images from "@app/constants/images";
import Rectanglebutton from "@app/components/Rectanlebutton";
import Galleryview from "@app/components/Galleryview";
import navigations from "@app/navigations/navigations";
const Profileview = () => {
  const navigation = useNavigation()
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const DATA = {
    id: 1,
    img1: images.image,
    img2: images.image2,
    img3: images.image3

  }
  const Renderdata = () => {
    return (
      <View style={styles.mainview}>

        <StatusBar translucent backgroundColor='transparent' barStyle={'light-content'} />
        <ImageBackground
         // source={{ uri: 'https://file.kreditings.com/uploads/preview/green-nature-cb-photo-editing-background-full-hd-11675951002arzfuw3nsq.jpg' }}
          source={images.background}
          style={{ height: windowHeight + 50, width: windowWidth }} />
        <View style={{ flexDirection: 'row', position: 'absolute', marginTop: 20 }}>
          <Pressable style={{ top: 25 }}
            onPress={()=>navigation.goBack()}
          >
            <Image
              source={images.arrowback}
              style={{
                position: 'absolute',
                left: 20,
                // top: 20,
                height: 25,
                width: 25,
                tintColor: '#fff',
              }}
            />
          </Pressable>
          <Image
            source={images.email}
            style={{
              position: 'absolute',
              left: 330,
              top: 20,
              height: 25,
              width: 25,
              tintColor: '#fff',
            }}
          />



        </View>
        <View style={styles.loginview}>
          <View style={{ marginTop: 20, marginHorizontal: 35, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text onPress={() =>
                navigation.navigate('tabcontroller', {
                  screen: navigations.messages
                })
              }
                style={styles.followers}>
                10K
              </Text>
              <Text style={styles.label}>Followers</Text>
            </View>
            <View>
              <View style={styles.profile}>
                <Image style={{ height: 75, width: 75, borderRadius: 75 / 2 }}
                  source={images.profile}
                />

              </View>
              <Text style={styles.followers}>@vamshi12</Text>
            </View>
            <View>
              <Text
                style={styles.followers}>
                15K
              </Text>
              <Text style={styles.label}>Following</Text>
            </View>
          </View>
          <Text style={styles.about}>My name is Vamshi12,I like photography{'\n'} and travelling all around the world</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 70 }}>
            <Rectanglebutton
              onPress={() =>
                navigation.navigate(Navigations.homeview)
              }
              buttonStyle={styles.followbutton}
              textStyle={{ fontWeight: 'bold' }}

              label={'Follow'}
            />
            <Rectanglebutton
              onPress={() =>
                //navigation.navigate(Navigations.playerfindtournament)
                alert('Navigate through +ADD Address')
              }
              buttonStyle={styles.messagebutton}
              textStyle={{ color: COLORS.black, fontWeight: 'bold' }}
              label={'Messages'}
            />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 100 }}>
            <Text style={styles.title}>All</Text>
            <Text style={styles.title}>Photos</Text>
            <Text style={styles.title}>Videos</Text>
          </View>
          <View style={{ borderBottomWidth: 1, borderColor: '#000', width: 20, alignSelf: 'center', marginRight: 150 }}>
          </View>
          <ScrollView style={{}}>
            <Galleryview
              img={DATA?.img1}
              img1={DATA?.img2}
              img2={DATA?.img3}
              img3={DATA?.img2}
              img4={DATA?.img1}
              img5={DATA?.img2}
            />
          </ScrollView>
        </View>
      </View>
    )
  }
  return (
    <>
      {Renderdata()}
    </>
  )
}
export default Profileview