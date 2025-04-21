import { SIZES } from '@/constants/Sizes';
import React, { useRef, useState } from 'react';
import { View, Image, ScrollView, Dimensions, StyleSheet } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

interface RestaurantSliderProps {
    images: any[]; // You can replace `any` with a more specific type if you know the type of images
}

const Dot = ({ isActive }: { isActive: boolean }) => {
    return (
        <View style={[styles.outerDot, isActive && styles.activeOuterDot]}>
            <View
                style={[styles.innerDot, isActive && styles.activeInnerDot]}
            />
        </View>
    );
};

const RestaurantSlider: React.FC<RestaurantSliderProps> = ({ images }) => {
    const scrollViewRef = useRef<ScrollView>(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleScroll = (event: any) => {
        const index = Math.round(
            event.nativeEvent.contentOffset.x / screenWidth
        );
        setActiveIndex(index);
    };

    return (
        <View>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >
                {images.map((image, index) => (
                    <View style={styles.slide} key={index}>
                        <Image source={image} style={styles.image} />
                    </View>
                ))}
            </ScrollView>
            <View style={styles.paginationContainer}>
                {images.map((_, index) => (
                    <Dot key={index} isActive={activeIndex === index} />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    slide: {
        justifyContent: 'center',
        alignItems: 'center',
        width: screenWidth - 40,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: SIZES['2xl'],
        objectFit: 'cover',
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 8,
    },
    outerDot: {
        width: 14,
        height: 14,
        borderRadius: 999,
        marginHorizontal: 8,
        backgroundColor: 'transparent',
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        transform: [{ translateY: -40 }],
    },
    activeOuterDot: {
        borderWidth: 2,
    },
    activeInnerDot: {
        opacity: 1,
        backgroundColor: 'white',
    },
    innerDot: {
        width: 10,
        height: 10,
        borderRadius: 999,
        backgroundColor: 'white',
        opacity: 0.5,
    },
});

export default RestaurantSlider;
