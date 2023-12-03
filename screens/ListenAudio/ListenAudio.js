import { ActivityIndicator, Image, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/ListenAudio/main";
import { LinearGradient } from "expo-linear-gradient";
import { Audio } from 'expo-av';
import { useState, useEffect } from "react";
import { isConnectedToWifi } from "../../middleware";

const ListenAudio = (props) => {
  let { } = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });
  let prevData = props?.route?.params
  const sound = new Audio.Sound();
  const [isPlaying, setIsPlaying] = useState(false)

  async function onListen() {
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
      setIsPlaying(true)
      await sound.loadAsync({ uri: prevData?.audio });
      await sound.playAsync();
      sound.setOnPlaybackStatusUpdate((onLoad) => {
        onLoad?.didJustFinish ? sound.unloadAsync() : setIsPlaying(false)
      });
    } catch (e) {
      console.log(e)
      setIsPlaying(false)
      sound.unloadAsync();
      alert("Try Again.")
    }
  }

  useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  const onGoBack = () => {
    props?.navigation?.goBack()
  }


  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#5A1717', '#1E1E1E']}
        style={styles.background}
      />
      <View style={styles.content}>
        <View style={styles.cameraView}>
          <Image
            source={{ uri: prevData?.image?.uri }}
            resizeMode="cover"
            style={{ width: '100%', height: '100%' }}
          />
        </View>

        <TouchableOpacity style={styles.listenBtn} onPress={onListen}>
          {
            isPlaying ?
              <ActivityIndicator color="#fff" size="large" />
              :
              <Text style={styles.listenBtnText}>LISTEN</Text>
          }
        </TouchableOpacity>
        <TouchableOpacity style={styles.goBackBtn} onPress={onGoBack}>
          <LinearGradient
            // Background Linear Gradient
            colors={['#12D4D4', 'rgba(12,231,231,0.84)']}
            style={styles.backgroundBtn}
          />
          <Text style={styles.listenBtnText}>GO BACK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(ListenAudio);
