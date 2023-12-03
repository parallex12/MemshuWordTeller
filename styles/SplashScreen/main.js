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
    background: {
      width: '100%',
      height: '100%',
      position: 'absolute'
    },
    content: {
      flex: 0.9,
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingBottom: 20
    },
    title: {
      fontSize: rf(40),
      fontFamily: 'MarkRegular',
      color: '#DFD0D0'
    },
    cardsImgWrapper: {
      width: getPercent(75, width),
      height: getPercent(23, height),
      marginTop: getPercent(2, height)
    },
    logoImgWrapper: {
      width: getPercent(50, width),
      height: getPercent(37, height),
      marginBottom: getPercent(1, height)
    }
  });
