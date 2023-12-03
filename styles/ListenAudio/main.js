import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//container Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#222",
    },
    content: {
      flex: 1,
      paddingHorizontal: getPercent(5, width),
      alignItems: 'center',
      justifyContent: 'center',
    },
    background: {
      width: '100%',
      height: '100%',
      position: 'absolute'
    },
    cameraView: {
      width: '100%',
      height: getPercent(50, height),
      borderRadius: 10,
      overflow: 'hidden',
      marginBottom: getPercent(5, height),
    },
    listenBtn: {
      width: '100%',
      height: getPercent(8, height),
      borderRadius: 20,
      borderWidth: 1,
      backgroundColor: '#12D425',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: getPercent(5, width),
      marginTop: getPercent(2, height)
    },
    listenBtnText: {
      fontSize: rf(22),
      fontFamily: 'SemiBold',
      color: '#ffffff'
    },
    goBackBtn: {
      width: '100%',
      height: getPercent(8, height),
      borderRadius: 20,
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: getPercent(2, height),
      overflow:'hidden'
    },
    backgroundBtn:{
      width:'100%',
      height:'100%',
      position:'absolute'
    },
  });
