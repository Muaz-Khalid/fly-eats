import React from 'react'
import { FlatList, View } from 'react-native'
import OrderCard from './OrderCard'

// Dummy data for demonstration
const orders = [
  {
    image: require('@/assets/images/home/menu_photo.png'), // Adjust the path as necessary
    orderNo: 12345,
    orderDate: '2023-10-01',
    price: 2500,
    dishName: 'Sushi Platter'
  },
  {
    image: require('@/assets/images/home/menu_photo.png'), // Adjust the path as necessary
    orderNo: 67890,
    orderDate: '2023-10-02',
    price: 1800,
    dishName: 'Ramen Bowl'
  },
  {
    image: require('@/assets/images/home/menu_photo.png'), // Adjust the path as necessary
    orderNo: 85685,
    orderDate: '2023-10-02',
    price: 1800,
    dishName: 'Ramen Bowl'
  },
  {
    image: require('@/assets/images/home/menu_photo.png'), // Adjust the path as necessary
    orderNo: 58668,
    orderDate: '2023-10-02',
    price: 1800,
    dishName: 'Ramen Bowl'
  },
  {
    image: require('@/assets/images/home/menu_photo.png'), // Adjust the path as necessary
    orderNo: 13588,
    orderDate: '2023-10-02',
    price: 1800,
    dishName: 'Ramen Bowl'
  },
  {
    image: require('@/assets/images/home/menu_photo.png'), // Adjust the path as necessary
    orderNo: 55877,
    orderDate: '2023-10-02',
    price: 1800,
    dishName: 'Ramen Bowl'
  },
  // Add more orders as needed
]

function Orders() {
  return (
    <View>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.orderNo.toString()}
        renderItem={({ item }) => (
          <OrderCard
            image={item.image}
            orderNo={item.orderNo}
            orderDate={item.orderDate}
            price={item.price}
            dishName={item.dishName}
          />
        )}
      />
    </View>
  )
}

export default Orders