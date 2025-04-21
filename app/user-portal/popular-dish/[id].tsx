import React, { useRef, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { Text, View, Animated, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Details from '@/components/user-portal/restaurants/restaurant-detail/Details';
import { SIZES } from '@/constants/Sizes';
import { useTheme } from 'styled-components';
import Tags from '@/components/user-portal/popular-dishes/Tags';
import Ingredients from '@/components/user-portal/popular-dishes/Ingredients';
import Sizes from '@/components/user-portal/popular-dishes/Sizes';
import AdvancedTabs from '@/components/user-portal/restaurants/restaurant-detail/AdvancedTabs';
import Button from '@/components/ui/Button';
import AddToCart from '@/components/user-portal/popular-dishes/AddToCart';

const ingredients = [
    {
        id: '1',
        name: 'hoyu',
        price: 5,
    },
    {
        id: '2',
        name: 'miso',
        price: 2,
    },
    {
        id: '3',
        name: 'tonkotsu',
        price: 1,
    },
];

const PopularDishScreen = () => {
    const { id } = useLocalSearchParams();
    const scrollY = useRef(new Animated.Value(0)).current; // Create an animated value for scroll position

    const [liked, setLiked] = useState(false);

    const handleLikeToggle = () => {
        setLiked(!liked);
    };

    const imageHeight = scrollY.interpolate({
        inputRange: [0, 200],
        outputRange: [200, 0],
        extrapolate: 'clamp',
    });
    const theme = useTheme();

    const styles = StyleSheet.create({
        centerHorizontalLine: {
            height: 5,
            backgroundColor: theme.colors.red.primary,
            width: '20%',
            alignSelf: 'center',
            opacity: 0.3,
            borderRadius: 20,
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

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Animated.Image
                source={require('@/assets/images/home/resturant.png')}
                style={{ width: '100%', height: imageHeight }}
            />
            <Animated.ScrollView
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                )}
            >
                <View style={{ padding: 16, gap: SIZES['2xl'] }}>
                    <View style={styles.centerHorizontalLine}></View>
                    <Details
                        title="Sakura Zen"
                        titleJapaese="桜禅"
                        rating={4.5}
                        deliveryFee="Free"
                        deliveryTime="20 min"
                        liked={liked}
                        onLikeToggle={handleLikeToggle}
                    />
                    <Tags tags={['Popular', 'Vip', 'Sushi']} />

                    <View style={styles.horizontalLine}></View>

                    <Text>
                        Welcome to Umi no Hana, or “Ocean Blossom,” where each
                        bowl of ramen is a tribute to the flavors of Japan. Our
                        broths are simmered to perfection, bringing rich, deep
                        flavors that balance the essence of the sea and land.
                        Enjoy hand-pulled noodles with melt-in-your-mouth pork
                        chashu, crisp nori, fresh green onions, and marinated
                        eggs
                    </Text>

                    <Ingredients ingredients={ingredients} />
                    <Sizes size={['S', 'M', 'L']} />
                    <Text
                        style={{
                            fontSize: SIZES.xl,
                            fontFamily: 'Poppins-Bold',
                        }}
                    >
                        Deliver Time
                    </Text>
                    <AdvancedTabs tabNames={['Standard delievery', 'Urgent']} />
                    <Text style={{ fontSize: SIZES.l }}>
                        <Text style={{ color: theme.colors.red.primary }}>
                            *
                        </Text>
                        An additional yen fee will be charged for urgent
                        delivery.
                    </Text>

                    
                </View>
                    <AddToCart price={10} />
            </Animated.ScrollView>
        </SafeAreaView>
    );
};

export default PopularDishScreen;
