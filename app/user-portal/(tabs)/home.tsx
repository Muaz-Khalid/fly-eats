import Header from '@/components/user-portal/home/Header';
import React from 'react';
import { StyleSheet, ScrollView, View, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SIZES } from '@/constants/Sizes';

import Slider from '@/components/user-portal/home/Slider';
import SearchBar from '@/components/SearchBar';
import Cuisines from '@/components/user-portal/home/Cuisines';
import RestaurantsNearYou from '@/components/user-portal/home/RestaurantsNearYou';
import PopularDishes from '@/components/user-portal/home/PopularDishes';

const HomeScreen = () => {
    const styles = StyleSheet.create({
        container: {
            // paddingTop: SIZES['2xl'],
        },
        header: {
            backgroundColor: 'red',
            paddingTop: SIZES['2xl'],
            height: 322,
            borderEndEndRadius: 180,
            borderBottomLeftRadius: 180,
            justifyContent: 'space-between',
        },
        logo: {
            width: 400,
            height: 200,
            objectFit: 'contain',
        },
    });

    const renderHeader = () => {
        return (
            <View style={styles.header}>
                <Header />
                <SearchBar />
                <Slider />
            </View>
        );
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar backgroundColor="#FF0000" />
            <View style={styles.container}>
                <FlatList
                    data={[
                        { key: 'cuisines' },
                        { key: 'popularDishes' },
                        { key: 'restaurants' },
                    ]}
                    renderItem={({ item }) => {
                        if (item.key === 'cuisines') {
                            return <Cuisines />;
                        } else if (item.key === 'popularDishes') {
                            return <PopularDishes />;
                        } else if (item.key === 'restaurants') {
                            return <RestaurantsNearYou />;
                        }
                        return null;
                    }}
                    ListHeaderComponent={renderHeader}
                />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
