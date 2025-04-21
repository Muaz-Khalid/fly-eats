import OrderDetails from '@/components/user-portal/orders/OrderDetails';
import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const OrderDetailScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
    <FlatList
        data={[{ key: 'orders' }]}
        renderItem={({ item }) => {
             if (item.key === 'orders') {
                return <OrderDetails />;
            }
            return null;
        }}
        showsVerticalScrollIndicator={false}
    />
</SafeAreaView>
  )
}

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

export default OrderDetailScreen