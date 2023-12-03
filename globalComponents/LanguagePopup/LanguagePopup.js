import { Image, ScrollView, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import { connect } from "react-redux";
import { _LanguagePopup as _styles } from "../../styles/TakePicture/main";
import { LinearGradient } from "expo-linear-gradient";

const LanguagePopup = (props) => {
    let { setSelectedLanguage, setShowlanguagePopup } = props;
    let { width, height } = useWindowDimensions();
    let styles = _styles({ width, height });

    let options = [
        {
            title: "french",
            icon: require("../../assets/france.png"),
            flag:"🇫🇷"
        },
        {
            title: "english (uk)",
            icon: require("../../assets/uk.png"),
            flag:"🇬🇧"
        },
        {
            title: "english (USA)",
            icon: require("../../assets/usa.png"),
            flag:"🇺🇸"
        },
        {
            title: "spanish",
            icon: require("../../assets/spain.png"),
            flag:"🇪🇸"
        },
        {
            title: "chinese",
            icon: require("../../assets/chinese.png"),
            flag:"🇨🇳"
        },
        {
            title: "german",
            icon: require("../../assets/german.png"),
            flag:"🇩🇪"
        },
    ]

    const onItemPress = (item) => {
        setSelectedLanguage(item)
        setShowlanguagePopup(false)
    }


    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#5A1717', '#1E1E1E']}
                style={styles.background}
            />
            <ScrollView>
                <View style={styles.content}>
                    <View style={styles.titleWrapper}>
                        <Text style={styles.text}>Select a language</Text>
                    </View>
                    {
                        options?.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} style={styles.itemWrapper} onPress={() => onItemPress(item)}>
                                    <View style={styles.iconWrapper}>
                                        <Image
                                            source={item?.icon}
                                            resizeMode="stretch"
                                            style={{ width: '100%', height: '100%' }}
                                        />
                                    </View>
                                    <Text style={styles.itemText}>{item?.title?.toUpperCase()}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </View>
    )
};

const mapStateToProps = (state) => ({
    errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(LanguagePopup);
