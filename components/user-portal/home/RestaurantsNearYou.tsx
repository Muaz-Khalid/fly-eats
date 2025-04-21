import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RestaurantCard from './RestaurantCard';
import { router } from 'expo-router';

// Dummy data
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

const RestaurantsNearYou = () => {
    const [showAll, setShowAll] = React.useState(false);

    const handlePress = (id: number) => {
        router.push(`/user-portal/restaurant-detail/${id}`);
       // Add navigation or other logic here
   };


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Restaurants near you</Text>
                <TouchableOpacity onPress={() => setShowAll(!showAll)}>
                    <Text style={styles.viewAll}>
                        {showAll ? 'Show less' : 'View all'}
                    </Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={showAll ? restaurantData : restaurantData.slice(0, 2)}
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
                keyExtractor={(item) => item.restaurant}
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

export default RestaurantsNearYou;
