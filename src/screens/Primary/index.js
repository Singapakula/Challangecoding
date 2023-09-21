import React, { useEffect, useRef, useState } from "react"
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from "react-native";
import { Camera, useCameraDevices } from "react-native-vision-camera";
import Video from "react-native-video"
import Navigations from "@app/navigations/navigations";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
const Primary = () => {
  const navigation = useNavigation()
  const camera = useRef(null)
  const [cameraPermission, setCameraPermission] = useState()
  const [videoPath, setVideopath] = useState()
  const devices = useCameraDevices();
  const device = devices?.back;

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermission()
      setCameraPermission(cameraPermission)
      console.log('devices:', devices);
      console.log('device:', device);
    })()
  }, [])
  const handleRecordVideo = async () => {
    try {
      await camera.current.startRecording({
        flash: 'on',
        onRecordingFinished: (video) => {
          setVideopath(video.path);
        },
        onRecordingError: (error) => {
          console.log('Recording error:', error);
        },
      });
      const recordingDuration = 5000; // 5 seconds in milliseconds
      setTimeout(async () => {
        try {
          // Stop recording after the specified duration
          await camera.current.stopRecording();
        } catch (error) {
          console.error('Error stopping recording:', error);
        }
      }, recordingDuration);
    } catch (error) {
      console.log(error);
    }
  };
  const handeStopVideo = async () => {
    try {
      await camera.current.stopRecording();
    } catch (e) {
      console.log('this is the error', e)
    }
  }
  const handleShareVideo = () => {
    console.log('this is the path', videoPath)
    navigation.navigate(Navigations.homeview, { Newpost: videoPath })
  };

  return (
    <View style={{}}>


      <View style={styles.container}>
        {cameraPermission && device && (
          <Camera
            ref={camera}
            style={styles.camera}
            device={device}
            isActive
            video={true}
          />
        )}

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleRecordVideo}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Record Video</Text>
            
          </TouchableOpacity>
          
          {/* <TouchableOpacity
            onPress={handeStopVideo}
            style={[styles.button, styles.stopButton]}
          >
            <Text style={styles.buttonText}>Stop Video</Text>
          </TouchableOpacity> */}
        </View>
       
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 60 }}>

          {videoPath && (
            <Video source={{ uri: videoPath }} style={styles.video} />
          )}
          <TouchableOpacity
            onPress={handleShareVideo}
            style={[styles.button, styles.share]}
          >
            <Text style={styles.buttonText}>Share</Text>
          </TouchableOpacity>
        </View>
        {/* <Text style={{ color:'#000',}}>The video will take 5 second of time</Text> */}
      </View>
    </View>
  )
}
export default Primary



