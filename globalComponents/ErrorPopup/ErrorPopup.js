import { Image, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import { connect } from "react-redux";
import { _ErrorPopup as _styles } from "../../styles/TakePicture/main";

const ErrorPopup = (props) => {
    let { setShowErrorPopup } = props;
    let { width, height } = useWindowDimensions();
    let styles = _styles({ width, height });

    const onTryAgain = () => {
        setShowErrorPopup(false)
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.imageWrapper}>
                    <Image
                        source={require('../../assets/no-result.png')}
                        resizeMode="contain"
                        style={{ width: '100%', height: '100%' }}
                    />
                </View>
                <Text style={styles.errorText}>Word not found...</Text>
            </View>
            <TouchableOpacity style={styles.tryBtn} onPress={onTryAgain}>
                <Text style={styles.tryBtnText}>TRY OTHER</Text>
            </TouchableOpacity>
        </View>
    )
};

const mapStateToProps = (state) => ({
    errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(ErrorPopup);
