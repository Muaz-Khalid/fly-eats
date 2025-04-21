import SearchBar from '@/components/SearchBar';
import Restaurants from '@/components/user-portal/restaurants/Restaurants';
import React from 'react';
import {
    FlatList,
    StatusBar,
    Text,
    View,
    StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const RestaurantScreen = () => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                paddingHorizontal: 16,
                gap: 16,
            }}
        >
            <StatusBar backgroundColor="#FF0000" />
            <Text style={styles.title}>Restaurants</Text>
            <View style={styles.container}>
                <FlatList
                    data={[{ key: 'searchBar' }, { key: 'restaurants' }]}
                    renderItem={({ item }) => {
                        if (item.key === 'searchBar') {
                            return <SearchBar />;
                        } else if (item.key === 'restaurants') {
                            return <Restaurants />;
                        }
                        return null;
                    }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 16,
        marginBottom: 32,
    },
    title: {
        fontFamily: 'Poppins-Bold',
        fontSize: 18,
        marginTop: 16,
        textAlign: 'center',
    },
});

export default RestaurantScreen;
