import { SIZES } from '@/constants/Sizes';
import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from 'styled-components';
// import starImage from '@/assets/star.png';

interface MenuItemProps {
    title: string;
    titleJp: string;
    category: string;
    price: number;
    image: any;
    discount?: number;
}

const MenuItem = ({
    title,
    titleJp,
    category,
    price,
    image,
    discount,
}: MenuItemProps) => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            padding: SIZES.m,
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.10)',
            elevation: 5,
            alignSelf: 'flex-start',
            borderRadius: SIZES['2xl'],
            position: 'relative',
            height: 150,
            marginTop: SIZES['8xl'],
            width: 160,
        },
        infoContainer: {
            marginTop: SIZES['6xl'],
            justifyContent: 'space-between',
            flex: 1,
        },
        image: {
            width: 132,
            height: 90,
            objectFit: 'fill',
            borderRadius: SIZES['2xl'],
            alignSelf: 'center',
            position: 'absolute',
            top: -40,
        },
        title: {
            fontFamily: 'Poppins-Bold',
            fontSize: SIZES.base,
        },
        category: {
            fontFamily: 'Poppins-Regular',
            fontSize: SIZES.base,
            color: 'gray',
        },
        price: {
            fontFamily: 'Poppins-Bold',
            color: theme.colors.red.primary,
            fontSize: SIZES.xl,
        },
        addButton: {
            backgroundColor: theme.colors.red.primary,
            alignSelf: 'flex-end',
            borderRadius: 999,
        },
        priceContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        discountBadge: {
            position: 'absolute',
            top: -65,
            right: 5,
            backgroundColor: 'transparent',
            padding: 5,
            borderRadius: 5,
            fontSize: SIZES.base,
            alignItems: 'center',
            justifyContent: 'center',
        },
        discountImage: {
            width: 55,
            height: 55,
        },
        discountText: {
            position: 'absolute',
            color: 'white',
            fontSize: SIZES.base,
        },
    });
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            {discount && (
                <View style={styles.discountBadge}>
                    <Image
                        source={require('@/assets/icons/star.png')}
                        style={styles.discountImage}
                    />
                    <Text style={styles.discountText}>-{discount}%</Text>
                </View>
            )}
            <View style={styles.infoContainer}>
                <View>
                    <Text style={styles.title}>
                        {title} ({titleJp})
                    </Text>
                    <Text style={styles.category}>{category}</Text>
                </View>

                <View style={styles.priceContainer}>
                    <Text style={styles.price}>¥ {price.toFixed(2)}</Text>
                    <TouchableOpacity style={styles.addButton}>
                        <Ionicons name="add" size={30} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default MenuItem;
