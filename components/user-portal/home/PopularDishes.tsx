import React from 'react';
import {
    FlatList,
    View,
    Image,
    StyleSheet,
    ListRenderItem,
    Text,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { SIZES } from '@/constants/Sizes';
import { router } from 'expo-router';

interface PopularDishData {
    id: string;
    dish: string;
    uri: any;
    rating: number;
    ratingCount: number;
    restaurant: string;
}

const PopularDishes = () => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        imageContainer: {
            marginHorizontal: 4,
            position: 'relative',
        },
        image: {
            width: 300,
            height: 145,
            objectFit: 'contain',
        },

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
        ratingContainer: {
            flexDirection: 'row',
            gap: SIZES.s,
        },
        dish: {
            fontFamily: 'Poppins-Bold',
            fontSize: SIZES['2xl'],
            color: theme.colors.background,
            shadowColor: theme.colors.text,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        },
        rating: {
            color: theme.colors.red.primary,
            gap: SIZES['2xl'],
            fontFamily: 'Poppins-Bold',
        },
        ratingCount: {
            color: theme.colors.background,
            fontFamily: 'Poppins-Bold',
        },
        popularDishInfo: {
            position: 'absolute',
            bottom: 0,
            padding: 16,
            width: '100%',
            backgroundImage: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1))',
        },
    });

    const handlePress = (id: string) => {
        router.push(`/user-portal/popular-dish/${id}`);
    };
    const data: PopularDishData[] = [
        {
            id: '1',
            dish: 'McDonalds',
            rating: 4.5,
            ratingCount: 20,
            restaurant: 'McDonalds',
            uri: require('@/assets/images/home/resturant.png'),
        },
        {
            id: '2',
            dish: 'Burger King',
            rating: 4.2,
            ratingCount: 15,
            restaurant: 'Burger King',
            uri: require('@/assets/images/home/resturant.png'),
        },
        {
            id: '3',
            dish: 'KFC',
            rating: 4.0,
            ratingCount: 25,
            restaurant: 'KFC',
            uri: require('@/assets/images/home/resturant.png'),
        },
        {
            id: '4',
            dish: 'Subway',
            rating: 4.3,
            ratingCount: 30,
            restaurant: 'Subway',
            uri: require('@/assets/images/home/resturant.png'),
        },
    ];

    const renderItem: ListRenderItem<PopularDishData> = ({ item }) => (
        <TouchableOpacity onPress={() => handlePress(item.id)}>
            <View style={styles.imageContainer}>
                <Image source={item.uri} style={styles.image} />
                <View style={styles.popularDishInfo}>
                    <Text style={styles.dish}>{item.dish}</Text>
                    <View style={styles.ratingContainer}>
                        <Ionicons name="star" size={12} color="red" />
                        <Text style={styles.rating}>{item.rating}</Text>
                        <Text style={styles.ratingCount}>
                            ({item.ratingCount} ratings)
                        </Text>
                        <Text style={styles.ratingCount}>
                            {item.restaurant}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Popular Dishes</Text>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                horizontal
                keyExtractor={(item) => item.dish}
                showsHorizontalScrollIndicator={false}
                style={{
                    maxHeight: 145,
                }}
            />
        </View>
    );
};

export default PopularDishes;
