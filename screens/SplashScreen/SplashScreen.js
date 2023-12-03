import { Image, Text, View, useWindowDimensions } from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/SplashScreen/main";
import { LinearGradient } from "expo-linear-gradient";
import * as Network from 'expo-network';
import { useEffect } from "react";
import { getCategories } from "../../state-management/actions/features";
import { isConnectedToWifi } from "../../middleware";

const SplashScreen = (props) => {
    let { } = props;
    let { width, height } = useWindowDimensions();
    let styles = _styles({ width, height });

    useEffect(() => {
        (async () => {
            await isConnectedToWifi()?.then((res) => {
                if (res) {
                    props?.getCategories()
                        .then((res) => {
                            if (res == 200) {
                                props?.navigation?.navigate("TakePicture")
                            } else {
                                alert("Server is not available, try again in a minute.")
                            }
                        })
                        .catch((e) => {
                            console.log(e)
                        })
                }
            }).catch((e) => {
                console.log(e)
                alert("Internet is not connected.")
                props?.navigation?.navigate("SplashScreen")
            })
        })()
    }, [])

    return (
        <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['#5A1717', '#1E1E1E']}
                style={styles.background}
            />
            <Image
                source={require("../../assets/splash.png")}
                resizeMode="contain"
                style={{ width: '100%', height: '100%' }}
            />
        </View>
    );
};

const mapStateToProps = (state) => ({
    errors: state.errors.errors,
});
export default connect(mapStateToProps, { getCategories })(SplashScreen);
