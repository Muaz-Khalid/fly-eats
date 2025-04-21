import AdvancedTabs from '@/components/user-portal/restaurants/restaurant-detail/AdvancedTabs';
import Details from '@/components/user-portal/restaurants/restaurant-detail/Details';
import MenuItem from '@/components/user-portal/restaurants/restaurant-detail/MenuItem';
import RestaurantSlider from '@/components/user-portal/restaurants/restaurant-detail/Slider';
import { SIZES } from '@/constants/Sizes';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components';

const RestaurantDetailScreen = () => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        safeAreaView: {
            flex: 1,
            paddingHorizontal: SIZES['2xl'],
        },
        horizontalLine: {
            height: 1,
            backgroundColor: theme.colors.red.primary,
            opacity: 0.3,
        },
        description: {
            fontSize: 16,
            color: theme.colors.text,
        },
    });

    const images = [
        require('@/assets/images/home/resturant.png'),
        require('@/assets/images/home/resturant.png'),
        require('@/assets/images/home/resturant.png'),
        require('@/assets/images/home/resturant.png'),
    ];

    const [liked, setLiked] = useState(false);

    const handleLikeToggle = () => {
        setLiked(!liked);
    };

    const menuItems = [
        {
            title: 'Sakura Zen',
            titleJp: '桜禅',
            category: 'Japanese',
            price: 10,
            image: require('@/assets/images/home/resturant.png'),
        },
        {
            title: 'Sakura Zen',
            titleJp: '桜禅',
            category: 'Japanese',
            price: 10,
            image: require('@/assets/images/home/resturant.png'),
            discount: 30,
        },
        {
            title: 'Sakura',
            titleJp: '桜禅',
            category: 'Japanese',
            price: 10,
            discount: 50,
            image: require('@/assets/images/home/resturant.png'),
        },
        {
            title: 'Sakura Zen',
            titleJp: '桜禅',
            category: 'Japanese',
            price: 10,
            image: require('@/assets/images/home/resturant.png'),
        },
        {
            title: 'Sakura Zen',
            titleJp: '桜禅',
            category: 'Japanese',
            price: 10,
            image: require('@/assets/images/home/resturant.png'),
        },
    ];

    const renderHeader = () => (
        <View
            style={{
                gap: SIZES['2xl'],
                marginBottom: SIZES['3xl'],
            }}
        >
            <RestaurantSlider images={images} />
            <Details
                title="Sakura Zen"
                titleJapaese="桜禅"
                rating={4.5}
                deliveryFee="Free"
                deliveryTime="20 min"
                liked={liked}
                onLikeToggle={handleLikeToggle}
            />
            <View style={styles.horizontalLine}></View>
            <Text style={styles.description}>
                Sakura Zen, meaning "Cherry Blossom Harmony," offers a tranquil
                dining experience inspired by the elegance of Japanese cherry
                blossoms. Our menu brings together the essence of traditional
                Japanese flavors with a modern twist, from fresh sushi and
                sashimi to expertly crafted ramen and seasonal small plates. At
                Sakura Zen, each dish is designed to evoke harmony, with
                ingredients carefully selected to reflect the seasons and
                elevate your dining experience.
            </Text>
            <View style={styles.horizontalLine}></View>
            <AdvancedTabs
                tabNames={[
                    'Today’s Special Deals',
                    'Combo Platters',
                    'Seasonal Specials',
                ]}
            />
            <View style={styles.horizontalLine}></View>
        </View>
    );

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <FlatList
                data={menuItems}
                renderItem={({ item }) => (
                    <MenuItem
                        title={item.title}
                        titleJp={item.titleJp}
                        category={item.category}
                        price={item.price}
                        image={item.image}
                        discount={item.discount}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={renderHeader}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    paddingVertical: SIZES['2xl'],
                    paddingTop: SIZES['4xl'],
                }}
            />
        </SafeAreaView>
    );
};

export default RestaurantDetailScreen;
