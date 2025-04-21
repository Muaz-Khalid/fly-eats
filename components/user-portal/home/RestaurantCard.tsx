import { SIZES } from '@/constants/Sizes';
import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useTheme } from 'styled-components';

interface RestaurantCardProps {
    image: number | { uri: string };
    restaurant: string;
    rating: number;
    ratingCount: number;
    duration: string;
}

const RestaurantCard = ({
    image,
    restaurant,
    rating,
    ratingCount,
    duration,
}: RestaurantCardProps) => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            gap: SIZES.s,
            flex: 1,
        },
        image: {
            height: 170,
            objectFit: 'fill',
            width: '100%',
            flex: 1,
        },
        restaurant: {
            fontFamily: 'Poppins-Bold',
            fontSize: 16,
        },
        rating: {
            color: theme.colors.red.primary,
            gap: SIZES.l,
            fontFamily: 'Poppins-Bold',
        },
        ratingCount: {
            color: 'gray',
            fontFamily: 'Poppins-Bold',
        },
        duration: {
            color: 'gray',
            fontFamily: 'Poppins-Bold',
        },
        footer: {
            flexDirection: 'row',
            gap: SIZES.s,
        },
    });
    return (
        <View style={styles.container}>
            <Image
                source={typeof image === 'number' ? image : { uri: image.uri }}
                style={styles.image}
            />
            <Text style={styles.restaurant}>{restaurant}</Text>
            <View style={styles.footer}>
                <Text style={styles.rating}>
                    <Ionicons name="star" size={14} color="red" />
                    {rating}
                </Text>
                <Text style={styles.ratingCount}>({ratingCount} ratings)</Text>
                <Text style={styles.duration}>{duration}</Text>
            </View>
        </View>
    );
};

export default RestaurantCard;
