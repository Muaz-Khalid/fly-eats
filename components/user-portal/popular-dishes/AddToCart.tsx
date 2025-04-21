import Button from '@/components/ui/Button';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

interface AddToCartProps {
    price: number;
}

const AddToCart: React.FC<AddToCartProps> = ({ price }) => {
    const router = useRouter();

    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity((prev) => prev + 1);
    };

    const decrement = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    };

    const handleAddToCart = () => {
        // Add your add to cart logic here
        router.push('/user-portal/cart');
        console.log(
            `Added ${quantity} item(s) to cart at ¥${price * quantity}`
        );
    };

    return (
        <View style={{ flex: 1, justifyContent: 'space-between', gap: 20, backgroundColor:'lightgrey', padding: 20, borderRadius: 20 }}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <View style={{ flex: 1, justifyContent: 'space-between' }}>
                    <Text style={{ fontSize:18 }}>Total</Text>
                    <Text style={{ fontSize:20, fontWeight: 'bold' }}>¥{(price * quantity).toFixed(2)}</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: 'black',
                        padding: 10,
                        borderRadius: 999,
                        gap: 20,
                        alignSelf: 'flex-start',
                    }}
                >
                    <TouchableOpacity
                        onPress={decrement}
                        style={{
                            height: 24,
                            width: 24,
                            borderRadius: 999,
                            backgroundColor: 'grey',
                            alignContent: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                color: 'white',
                            }}>-</Text>
                    </TouchableOpacity>
                    <Text style={{ color: 'white' }}>{quantity}</Text>
                    <TouchableOpacity
                        onPress={increment}
                        style={{
                            height: 24,
                            width: 24,
                            borderRadius: 999,
                            backgroundColor: 'grey',
                            alignContent: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Text
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                color: 'white',
                            }}
                        >
                            +
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Button onPress={handleAddToCart} title="Add to cart" varient="primary" icon='bag-shopping' />
        </View>
    );
};

export default AddToCart;
