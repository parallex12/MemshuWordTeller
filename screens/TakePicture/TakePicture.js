import { Text, TouchableOpacity, View, ActivityIndicator, useWindowDimensions } from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/TakePicture/main";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";
import CategoryPopup from "../../globalComponents/CategoryPopup/CategoryPopup";
import { useState } from "react";
import LanguagePopup from "../../globalComponents/LanguagePopup/LanguagePopup";
import ErrorPopup from "../../globalComponents/ErrorPopup/ErrorPopup";
import { Camera, CameraType } from 'expo-camera';
import { useEffect, useRef } from "react";
import { checkForWord } from "../../state-management/actions/features";
import { isConnectedToWifi } from "../../middleware";

const TakePicture = (props) => {
  let { } = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedLanguage, setSelectedLanguage] = useState(null)
  const [showCategoryPopup, setShowCategoryPopup] = useState(false)
  const [showlanguagePopup, setShowlanguagePopup] = useState(false)
  const [showErrorPopup, setShowErrorPopup] = useState(false)
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [isImageProcessing, setIsImageProcessing] = useState(true)
  let cameraRef = useRef()


  const onCapture = async () => {
    try {
      await isConnectedToWifi()?.then((res) => {
        if (!res) {
          return
        }
      }).catch((e) => {
        console.log(e)
        alert("Internet is not connected.")
        props?.navigation?.navigate("SplashScreen")
        return
      })
      if (isImageProcessing) return
      if (cameraRef?.current == null) return
      setIsImageProcessing(true)
      let image = await cameraRef.current.takePictureAsync({
        onPictureSaved: (img) => {
          let data = {
            category: selectedCategory,
            language: selectedLanguage,
            image: img
          }
          props?.checkForWord(data)
            .then((res) => {
              let audio = res?.data?.audio_link
              if (audio) {
                cameraRef.current.stopRecording()
                props?.navigation.navigate("ListenAudio", { audio: audio, image: img })
              } else {
                setShowErrorPopup(true)
              }
              setSelectedCategory(null)
              setSelectedLanguage(null)
              setIsImageProcessing(false)
            })
            .catch((e) => {
              setShowErrorPopup(true)
              console.log(e)
            })
        }
      })
    } catch (e) {
      console.log(e)
      alert("Capture failed, try again.")
    }
  }

  useEffect(() => {
    if (!permission?.granted) {
      requestPermission()
    }
  }, [permission])

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#5A1717', '#1E1E1E']}
        style={styles.background}
      />
      <View style={styles.content}>
        <View style={styles.cameraView}>
          {
            isImageProcessing &&
            <View style={styles.loaderView}>
              <ActivityIndicator color="#fff" size="large" />
            </View>
          }
          {permission?.granted &&
            <Camera

              ref={cameraRef}
              onCameraReady={() => setIsImageProcessing(false)}
              style={styles.camera}
              type={type}>

            </Camera>
          }
        </View>
        <TouchableOpacity style={styles.buttonWrapper} onPress={() => setShowCategoryPopup(true)}>
          <Text style={styles.buttonText}>{selectedCategory?.name?.toUpperCase() || "Category"}</Text>
          <Ionicons
            style={styles.btnIcon}
            name="ios-triangle-outline"
            size={RFValue(25)}
            color="#E18746"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonWrapper} onPress={() => setShowlanguagePopup(true)}>
          <Text style={styles.buttonText}>{selectedLanguage?.title?.toUpperCase() || "Language"}</Text>
          {selectedLanguage && <Text style={styles.flagText}>{selectedLanguage?.flag}</Text>}
          <Ionicons
            style={styles.btnIcon}
            name="ios-triangle-outline"
            size={RFValue(25)}
            color="#E18746"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.captureBtn} onPress={onCapture}>
          <LinearGradient
            // Background Linear Gradient
            colors={['#02F119', 'rgba(12,225,33,0.68)']}
            style={styles.backgroundBtn}
          />
          <Text style={styles.captureBtnText}>CAPTURE</Text>
        </TouchableOpacity>
      </View>
      {showCategoryPopup && <CategoryPopup
        setShowCategoryPopup={setShowCategoryPopup}
        setSelectedCategory={setSelectedCategory}
      />}
      {showlanguagePopup && <LanguagePopup
        setShowlanguagePopup={setShowlanguagePopup}
        setSelectedLanguage={setSelectedLanguage}
      />}
      {showErrorPopup && <ErrorPopup
        setShowErrorPopup={setShowErrorPopup}
      />}
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, { checkForWord })(TakePicture);
