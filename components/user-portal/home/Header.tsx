import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { SIZES } from '@/constants/Sizes';
import { useTheme } from 'styled-components';

const Header = () => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            justifyContent: 'space-between',
            alignItems: 'center',
            flexShrink: 1,
            gap: SIZES['6xl'],
        },
        content: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: SIZES['10xl'],
        },
        title: {
            fontSize: SIZES['xl'],
            textAlign: 'center',
            fontFamily: 'Poppins-Bold',
            color: 'white',
        },
        location: {
            fontSize: SIZES['l'],
            textAlign: 'center',
            fontFamily: 'Poppins-Bold',
            color: 'white',
        },
        main: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: SIZES.m,
        },
        textSection: {
            gap: SIZES.s,
            alignItems: 'flex-start',
        },
        image: {
            width: 58,
            height: 58,
            objectFit: 'contain',
        },
        logo: {
            width: 28,
            height: 28,
            objectFit: 'contain',
        },
        cart: {
            width: 58,
            height: 58,
            borderColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 2,
            borderRadius: SIZES['xl'],
        },
        cartText: {
            width: 13,
            height: 13,
            backgroundColor: 'black',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: SIZES.l,
            position: 'absolute',
            top: 6,
            right: 4,
        },
        item: {
            color: 'white',
            fontSize: SIZES['m'],
            fontWeight: 'bold',
        },
    });
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.main}>
                    <Image
                        source={require('@/assets/icons/logo.png')}
                        style={styles.image}
                    />
                    <View style={styles.textSection}>
                        <Text style={styles.title}>Current Location</Text>
                        <Text style={styles.location}>ABC Road, NYC, USA</Text>
                    </View>
                </View>
                <View style={styles.cart}>
                    <Image
                        source={require('@/assets/images/home/cart.png')}
                        style={styles.logo}
                    />
                    <View style={styles.cartText}>
                        <Text style={styles.item}>1</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Header;
