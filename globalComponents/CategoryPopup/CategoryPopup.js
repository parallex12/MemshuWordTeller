import { ScrollView, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import { connect } from "react-redux";
import { _CategoryPopup as _styles } from "../../styles/TakePicture/main";
import { LinearGradient } from "expo-linear-gradient";

const CategoryPopup = (props) => {
    let { setSelectedCategory, setShowCategoryPopup } = props;
    let { width, height } = useWindowDimensions();
    let styles = _styles({ width, height });
    
    const onItemPress = (item) => {
        setSelectedCategory(item)
        setShowCategoryPopup(false)
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
                        <Text style={styles.text}>Select a category</Text>
                    </View>
                    {
                        props?.get_categories?.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} style={styles.itemWrapper} onPress={() => onItemPress(item)}>
                                    <Text style={styles.itemText}>{item?.name?.toUpperCase()}</Text>
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
    get_categories: state.main.get_categories
});
export default connect(mapStateToProps, {})(CategoryPopup);
