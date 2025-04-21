import React from 'react';
import {
    FlatList,
    View,
    Image,
    StyleSheet,
    ListRenderItem,
} from 'react-native';

interface ImageData {
    key: string;
    uri: any;
}

const Slider = () => {
    const data: ImageData[] = [
        { key: '1', uri: require('@/assets/images/home/banner.png') },
        { key: '2', uri: require('@/assets/images/home/banner.png') },
        { key: '3', uri: require('@/assets/images/home/banner.png') },
    ];

    const renderItem: ListRenderItem<ImageData> = ({ item }) => (
        <View style={styles.imageContainer}>
            <Image source={item.uri} style={styles.image} />
        </View>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            horizontal
            keyExtractor={(item) => item.key}
            showsHorizontalScrollIndicator={false}
            style={{
                maxHeight: 145,
            }}
        />
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        marginHorizontal: 4,
    },
    image: {
        width: 300,
        height: 145,
    },
});

export default Slider;
