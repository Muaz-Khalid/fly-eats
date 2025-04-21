import React from 'react';
import { FlatList, StyleSheet, View, TouchableOpacity } from 'react-native';
import RestaurantCard from '../home/RestaurantCard';
import { router } from 'expo-router';

const restaurantData = [
    {
        id: 1,
        restaurant: 'McDonalds',
        rating: 4.5,
        ratingCount: 20,
        duration: '20 min',
        uri: require('@/assets/images/home/resturant.png'), // Update with the correct path
    },
    {
        id: 2,
        restaurant: 'Burger King',
        rating: 4.2,
        ratingCount: 15,
        duration: '15 min',
        uri: require('@/assets/images/home/resturant.png'), // Update with the correct path
    },
    {
        id: 3,
        restaurant: 'KFC',
        rating: 4.0,
        ratingCount: 25,
        duration: '25 min',
        uri: require('@/assets/images/home/resturant.png'), // Update with the correct path
    },
    {
        id: 4,
        restaurant: 'Subway',
        rating: 4.3,
        ratingCount: 30,
        duration: '10 min',
        uri: require('@/assets/images/home/resturant.png'), // Update with the correct path
    },
];

const Restaurants = () => {
    const handlePress = (id: number) => {
         router.push(`/user-portal/restaurant-detail/${id}`);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={restaurantData}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handlePress(item.id)}>
                        <RestaurantCard
                            restaurant={item.restaurant}
                            rating={item.rating}
                            ratingCount={item.ratingCount}
                            duration={item.duration}
                            image={item.uri}
                        />
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
                style={{ marginBottom: 10, gap: 16 }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    title: {
        fontFamily: 'Poppins-Bold',
        fontSize: 18,
    },
    viewAll: {
        color: 'red',
        fontSize: 14,
    },
});

export default Restaurants;
