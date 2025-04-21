import { router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface OrderCardProps {
    image: number | { uri: string };
    orderNo: number;
    orderDate: Date | string;
    price: number;
    dishName: string;
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 10,
        height: 130,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.15,
        shadowRadius: 3.34,
        elevation: 5,
    },
    content: {
        flexDirection: 'row',
        gap: 15,
        height: 68,
    },
    image: {
        width: 78,
        height: 78,
        borderRadius: 10,
        objectFit: 'fill',
    },
    button: {
        position: 'absolute',
        bottom: -30,
        right: 10,
    },
});

const OrderCard = ({
    image,
    orderNo,
    orderDate,
    price,
    dishName,
}: OrderCardProps) => {
    // Format the orderDate
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    }).format(new Date(orderDate));

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image
                    source={
                        typeof image === 'number' ? image : { uri: image.uri }
                    }
                    style={styles.image}
                />
                <View style={{ justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Poppins-Bold' }}>
                        Order #{orderNo} | {dishName}
                    </Text>
                    <Text>Placed on {formattedDate}</Text>
                    <Text
                        style={{
                            fontSize: 18,
                            fontFamily: 'Poppins-Bold',
                            color: 'red',
                        }}
                    >
                        ¥{price}
                    </Text>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity
                        onPress={() =>
                            router.push('/user-portal/order-detail/1')
                        }
                        style={{ alignSelf: 'center' }}
                    >
                        <Text style={{ color: 'red', fontWeight: 'bold' }}>
                            Track Order
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default OrderCard;
