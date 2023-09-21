// import Navigations from "@app/navigations/navigations";
// import { useNavigation } from "@react-navigation/native";
// import React, { useEffect, useRef, useState } from "react";
// import { View, Text, ActivityIndicator, Image, StyleSheet, TouchableOpacity } from "react-native";
// import { Camera, useCameraDevices } from "react-native-vision-camera";
// const Primary = () => {
//     const navigation = useNavigation()
//     const camera = useRef(null)
//     const [imageData, setImageData] = useState('');
//     const [takePhotoClicked, setTakePhotoClicked] = useState(false)
//     const devices = useCameraDevices()
//     const device = devices.back
//     useEffect(() => {
//         Checkpermission()
//     }, [])
//     const Checkpermission = async () => {
//         const newCameraPermission = await Camera.requestCameraPermission()
//         const newMicrophonePermission = await Camera.requestMicrophonePermission()

//         console.log(newCameraPermission)
//     }
//     if (device == null) return <ActivityIndicator />
//     const takePicture = async () => {
//         if (camera !== null) {
//             const photo = await camera.current.takePhoto();
//             setImageData(photo.path)
//             setTakePhotoClicked(false)
//             console.log(photo.path)
//         }

//     }
//     return (
//         <View style={{ flex: 1, }}>
//             {
//                 takePhotoClicked ? (<View style={{ flex: 1 }}>
//                     <Camera
//                         ref={camera}
//                         style={StyleSheet.absoluteFill}
//                         device={device}
//                         isActive={true}
//                         photo={true}
//                     />
//                     <TouchableOpacity
//                         onPress={() => {
//                             takePicture()
//                         }}
//                         style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: 'red', position: 'absolute', bottom: 50, alignSelf: 'center' }}>

//                     </TouchableOpacity>
//                 </View>) : (
//                     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                         {imageData !== '' && <Image source={{ uri: 'file://' + imageData }} style={{ height: 500, width: '90%' }} />}
//                         <TouchableOpacity
//                             onPress={() => setTakePhotoClicked(true)}
//                             style={{ width: '90%', height: 45, borderRadius: 10, borderWidth: 1, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
//                             <Text>Click Photo</Text>
//                         </TouchableOpacity>
//                     </View>
//                 )
//             }


//         </View>
//     )
// }
// export default Primary




import React, { useEffect, useRef, useState } from "react";
import { View, Text, ActivityIndicator, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Camera, useCameraDevices,CameraDevices } from "react-native-vision-camera";
import Video from "react-native-video";
const Postscreen = () => {
  const camera = useRef('');
  const [videoData, setVideoData] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const devices = useCameraDevices();
  const device = devices.back;

  useEffect(() => {
    Checkpermission();
  }, []);

  const Checkpermission = async () => {
    const newCameraPermission = await Camera.requestCameraPermission();
    const newMicrophonePermission = await Camera.requestMicrophonePermission();
    console.log(newCameraPermission);
  };

  const startRecording = async () => {
    try {
      if (camera.current) {
        await new Promise((resolve) => {
          camera.current.onInitialized(() => {
            resolve();
          });
        });
  
        setIsRecording(true);
        const options = {
          quality: '720p',
          codec: 'mp4',
        };
        const video = await camera.current.recordVideo(options);
        setVideoData(video.path);
        setIsRecording(false);
      }
    } catch (error) {
      console.error('Error starting recording:', error);
    }
  };
  
  // const handleRecordVideo=async()=>{
  //   try{
  //     camera.current.startRecording({
  //       flash:'on',
  //       onRecordingFinished:video=>setVideoData(video.path),
  //       onRecordingError:error=>console.log(error)
  //     })
  //   }catch(e){
  //     console.log(e)
  //   }
  // }'

  const stopRecording = async () => {
    if (camera.current && stopRecording) {
      stopRecording(false);
      await camera.current.stopRecording();
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {stopRecording ? (
        <View style={{ flex: 1 }}>
          <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={devices}
            isActive={true}
            video={true}
            onInitialized={() => {
              setIsCameraReady(true);
            }}
          />
          <TouchableOpacity
            onPress={stopRecording}
            style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: 'red', position: 'absolute', bottom: 50, alignSelf: 'center' }}
          >
            <Text>Stop</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {videoData !=='' && (
            <Video
              source={{ uri: 'file://' + videoData }}
              style={{ height: 300, width: '90%' }}
              controls={true}
            />
          ) }
          <TouchableOpacity
            onPress={startRecording}
            style={{ width: '90%', height: 45, borderRadius: 10, borderWidth: 1, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}
          >
            <Text>Start Recording</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Postscreen;
