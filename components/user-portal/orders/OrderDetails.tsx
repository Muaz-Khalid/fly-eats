import { SIZES } from '@/constants/Sizes';
import { FontAwesome6 } from '@expo/vector-icons';
import React from 'react';
import { FlatList, View, Text, StyleSheet, Image } from 'react-native';

const orders = [
    {
        image: require('@/assets/images/home/menu_photo.png'), // Adjust the path as necessary
        orderNo: 12345,
        orderDate: '2023-10-01',
        price: 2500,
        dishName: 'Sushi Platter',
    },
];

interface OrderCardProps {
    image: number | { uri: string };
    orderNo?: number;
    orderDate: Date | string;
    price: number;
    dishName: string;
}

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

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            padding: 10,
            backgroundColor: 'white',
            borderRadius: 10,
            marginBottom: 10,
            height: 100,
            paddingVertical: 10,
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
                        {dishName}
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
            </View>
        </View>
    );
};

const steps = [
    {
        id: '1',
        title: 'Order Placed',
        description: 'Received by Sakura Zen at 6:45 PM. ETA: 7:30 PM.',
        icon: 'circle-check',
        completed: true,
    },
    {
        id: '2',
        title: 'Preparing',
        description: 'Your Chicken Katsu Don and Miso Soup are being prepared.',
        icon: 'box-open',
        completed: true,
    },
    {
        id: '3',
        title: 'Ready for Pickup',
        description: 'Order is ready. Driver will pick it up shortly.',
        icon: 'route',
        completed: true,
    },
    {
        id: '4',
        title: 'Out for Delivery',
        description: 'Pending',
        icon: 'truck-fast',
        completed: false,
    },
    {
        id: '5',
        title: 'Order Delivered',
        description: 'Pending',
        icon: 'dolly',
        completed: false,
    },
];

const OrderDetails = () => {
    return (
        <View style={{ flex: 1, gap: SIZES['4xl'] }}>
            <FlatList
                data={orders}
                keyExtractor={(item) => item.orderNo.toString()}
                renderItem={({ item }) => (
                    <View style={{ gap: SIZES['2xl'], paddingVertical: 20 }}>
                        <Text
                            style={{
                                fontSize: 18,
                                fontFamily: 'Poppins-Bold',
                                textAlign: 'center',
                            }}
                        >
                            Order No# {item.orderNo}
                        </Text>
                        <OrderCard
                            image={item.image}
                            orderDate={item.orderDate}
                            price={item.price}
                            dishName={item.dishName}
                        />
                    </View>
                )}
            />
            <FlatList
                data={steps}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => (
                    <View>
                        <View style={styles.stepContainer}>
                            <View style={styles.iconColumn}>
                                <View
                                    style={[
                                        styles.iconContainer,
                                        item.completed
                                            ? styles.iconCompleted
                                            : styles.iconPending,
                                    ]}
                                >
                                    <FontAwesome6
                                        name={item.icon}
                                        size={24}
                                        color={item.completed ? 'red' : 'gray'}
                                    />
                                </View>
                                {index < steps.length - 1 && (
                                    <View style={styles.verticalLine} />
                                )}
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.description}>
                                    {item.description}
                                </Text>
                            </View>
                        </View>
                        {index < steps.length - 1 && (
                            <View style={styles.horizontalLine} />
                        )}
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    stepContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 40,
        marginTop: 5,
    },
    iconColumn: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    iconCompleted: {
        backgroundColor: '#ffcccc',
    },
    iconPending: {
        backgroundColor: '#e0e0e0',
    },
    verticalLine: {
        width: 2,
        flex: 1,
        height: '200%',
        backgroundColor: '#e0e0e0',
        position: 'absolute',
        left: 24,
        zIndex: -1,
        top: 0,
        bottom: 0,
    },
    horizontalLine: {
        height: 2,
        backgroundColor: '#e0e0e0',
        marginLeft: 60,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        color: '#666',
    },
});

export default OrderDetails;
