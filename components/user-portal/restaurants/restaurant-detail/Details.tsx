import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface DetailsProps {
    title: string;
    titleJapaese: string;
    rating?: number;
    deliveryFee?: string;
    deliveryTime?: string;
}

const Details = ({
    title,
    titleJapaese,
    rating,
    deliveryFee,
    deliveryTime,
    liked,
    onLikeToggle,
}: DetailsProps & { liked: boolean; onLikeToggle: () => void }) => {
    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: 10,
        },
        title: {
            fontSize: 16,
            fontWeight: 'bold',
            fontFamily: 'Poppins-Bold',
        },
        iconBase: {
            width: 38,
            height: 38,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 10,
        },
        ratingContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 10,
            alignItems: 'center',
        },
    });

    const getIconContainerStyle = (iconColor: string, opacity: number) => ({
        ...styles.iconBase,
        backgroundColor:
            iconColor === 'red'
                ? `rgba(255, 0, 0, ${opacity})`
                : `rgba(128, 128, 128, ${opacity})`, // gray color with opacity
    });

    return (
        <View style={styles.container}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <Text style={styles.title}>
                    {title} ({titleJapaese})
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <View style={getIconContainerStyle('red', 0.1)}>
                        <FontAwesome5
                            name="map-marker-alt"
                            size={22}
                            color="red"
                        />
                    </View>
                    <TouchableOpacity onPress={onLikeToggle}>
                        <View
                            style={getIconContainerStyle(
                                liked ? 'red' : 'gray',
                                0.1
                            )}
                        >
                            <FontAwesome5
                                name="heart"
                                size={22}
                                color={liked ? 'red' : 'black'}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    gap: 20,
                    alignItems: 'flex-start',
                }}
            >
                <View style={styles.ratingContainer}>
                    <FontAwesome5 name="star" size={22} color="red" />
                    <Text>{rating}</Text>
                </View>
                <View style={styles.ratingContainer}>
                    <FontAwesome6 name="truck-fast" size={22} color="red" />
                    <Text>{deliveryFee}</Text>
                </View>
                <View style={styles.ratingContainer}>
                    <FontAwesome6 name="clock" size={22} color="red" />
                    <Text>{deliveryTime}</Text>
                </View>
            </View>
        </View>
    );
};

export default Details;
