import Orders from '@/components/user-portal/orders/Orders';
import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

const OrderScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={[{ key: 'title' }, { key: 'orders' }]}
                renderItem={({ item }) => {
                    if (item.key === 'title') {
                        return <Text style={styles.title}>My Orders</Text>;
                    } else if (item.key === 'orders') {
                        return <Orders />;
                    }
                    return null;
                }}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    title: {
        fontFamily: 'Poppins-Bold',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 16,
    },
});

export default OrderScreen;
