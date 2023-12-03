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
      marginBottom: getPercent(5, height),
      borderRadius:10,
      overflow:'hidden'
    },
    loaderView: {
      backgroundColor: 'rgba(0,0,0,0.8)',
      width: '100%',
      height: '100%',
      position: 'absolute',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:10,
      zIndex:99999999
    },
    camera: {
      width: '100%',
      height: '100%'
    },
    buttonWrapper: {
      width: '100%',
      height: getPercent(7, height),
      borderRadius: 20,
      borderWidth: 1,
      backgroundColor: '#742727',
      borderColor: '#E18746',
      marginVertical: getPercent(1.5, height),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: getPercent(5, width)
    },
    buttonText: {
      fontSize: rf(18),
      fontFamily: 'Regular',
      color: '#BDA1A1',
    },
    flagText: {
      fontSize: rf(30),
      flex: 0.95,

    },
    btnIcon: {
      transform: [{ rotateX: '180deg' }, { scaleX: 1.3 }],
    },
    captureBtn: {
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
    captureBtnText: {
      fontSize: rf(22),
      fontFamily: 'SemiBold',
      color: '#ffffff'
    }
  });

//_CategoryPopup Styles starts here
export const _CategoryPopup = ({ width, height }) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      zIndex: 999999999,
      alignSelf: 'center',
    },
    background: {
      width: '100%',
      height: '100%',
      position: 'absolute'
    },
    content: {
      flex: 1,
      alignItems: 'center',
      paddingTop: getPercent(10, height),
      paddingBottom: getPercent(4, height),

    },
    itemWrapper: {
      alignItems: 'center',
      borderBottomWidth: 0.5,
      borderColor: '#ECE5E5',
      width: '90%',
      height: getPercent(9, height),
      justifyContent: 'center',
    },
    titleWrapper: {
      alignItems: 'center',
      borderBottomWidth: 0.5,
      borderColor: '#ECE5E5',
      width: '90%',
      height: getPercent(11, height),
      paddingBottom: 10
    },
    text: {
      fontSize: rf(25),
      fontFamily: 'Regular',
      color: '#ffffff'
    },
    itemText: {
      fontSize: rf(22),
      fontFamily: 'Regular',
      color: '#ffffff'
    }
  });

//_LanguagePopup Styles starts here
export const _LanguagePopup = ({ width, height }) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      zIndex: 999999999,
      alignSelf: 'center',
    },
    background: {
      width: '100%',
      height: '100%',
      position: 'absolute'
    },
    content: {
      flex: 1,
      alignItems: 'center',
      paddingTop: getPercent(10, height),
      paddingBottom: getPercent(4, height),

    },
    itemWrapper: {
      alignItems: 'center',
      borderBottomWidth: 0.5,
      borderColor: '#ECE5E5',
      width: '90%',
      height: getPercent(9, height),
      justifyContent: 'space-between',
      flexDirection: 'row'
    },
    titleWrapper: {
      alignItems: 'center',
      borderBottomWidth: 0.5,
      borderColor: '#ECE5E5',
      width: '90%',
      height: getPercent(11, height),
      paddingBottom: 10
    },
    text: {
      fontSize: rf(25),
      fontFamily: 'Regular',
      color: '#ffffff'
    },
    iconWrapper: {
      width: '15%',
      height: '45%',
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center'
    },
    itemText: {
      fontSize: rf(22),
      fontFamily: 'Regular',
      color: '#ffffff'
    }
  });

//_ErrorPopup Styles starts here
export const _ErrorPopup = ({ width, height }) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      zIndex: 999999999,
      alignSelf: 'center',
      backgroundColor: 'rgba(31,36,37,0.8)',
      justifyContent: 'space-around',
      paddingVertical: getPercent(10, width),
      paddingHorizontal: getPercent(5, width),
    },
    content: {
      flex: 1,
      paddingHorizontal: getPercent(5, width),
      alignItems: 'center',
      justifyContent: 'center'
    },
    imageWrapper: {
      width: '80%',
      height: getPercent(30, height),
      marginBottom: getPercent(4, height)
    },
    errorText: {
      fontSize: rf(35),
      fontFamily: 'Regular',
      color: '#ffffff'
    },
    tryBtn: {
      width: '100%',
      height: getPercent(8, height),
      borderRadius: 20,
      borderWidth: 1,
      backgroundColor: '#12D425',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: getPercent(5, width),
      bottom: getPercent(2, height)
    },
    tryBtnText: {
      fontSize: rf(22),
      fontFamily: 'SemiBold',
      color: '#ffffff'
    }
  })