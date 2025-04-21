import { SIZES } from '@/constants/Sizes';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TextInput, View } from 'react-native';

const SearchBar = () => {
    const styles = StyleSheet.create({
        container: {
            position: 'relative',
            marginHorizontal: SIZES.xl,
            marginTop: SIZES.xl,
            justifyContent: 'center',
        },
        input: {
            backgroundColor: 'white',
            borderRadius: SIZES.l,
            padding: SIZES.xl,
        },
        icon: {
            color: 'black',
            position: 'absolute',
            right: SIZES.xl,
            touchAction: 'none',
        },
    });
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Search for restaurants and dishes"
                style={styles.input}
            />
            <Ionicons
                name="search"
                size={24}
                color="black"
                style={styles.icon}
            />
        </View>
    );
};

export default SearchBar;
