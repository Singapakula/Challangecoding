import React from "react";
import { View,Text,Image } from "react-native";
import images from "@app/constants/images";
import { COLORS,SIZES } from "@app/constants/themes";
import { styles } from "./styles";
const Galleryview=({img,img1,img2,img3,img4,img5})=>{
    return(
<View style={styles.galleryview}>
  <View style={{ flexDirection: 'row' }}>
    <Image
      style={{ width: '55%', borderTopLeftRadius: SIZES.baseX5 }}
      source={img}
    />
    <View style={{ flexDirection: 'column' }}>
      <Image
        style={{ width:150, height:85,marginLeft:10, borderTopRightRadius: SIZES.baseX5 }}
        source={img1}
      />
      <Image
        style={{ width:150,height: 85,marginLeft:10,marginTop:10}}
        source={img2}
      />
    </View>
  </View>
  <View style={{marginTop:10,flexDirection:'row'}}>
  <Image
      style={{ width: '31%', borderBottomLeftRadius: SIZES.baseX5 ,}}
      source={img3}
    />
    <Image
        style={{ width:'31%',marginLeft:10,  }}
        source={img4}
      />
       <Image
        style={{ width:'31%',marginLeft:10,borderBottomRightRadius:SIZES.baseX5  }}
        source={img5}
      />
  </View>
  </View>
    )
}
export default Galleryview