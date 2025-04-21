import React from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    StyleSheet,
    TouchableOpacity,
    ListRenderItem,
} from 'react-native';

interface CuisinesData {
    id: string;
    name: string;
    image: any;
    // uri: any;
}

const Cuisines = () => {
    const [showAll, setShowAll] = React.useState(false);

    const data: CuisinesData[] = [
        {
            id: '1',
            name: 'Sushi',
            image: require('@/assets/images/home/cuisines/sushi.png'),
        },
        {
            id: '2',
            name: 'Ramen',
            image: require('@/assets/images/home/cuisines/ramen.png'),
        },
        {
            id: '3',
            name: 'Tempura',
            image: require('@/assets/images/home/cuisines/tempura.png'),
        },
        {
            id: '4',
            name: 'Udon & Soba',
            image: require('@/assets/images/home/cuisines/udon_soba.png'),
        },
        {
            id: '5',
            name: 'Yakitori',
            image: require('@/assets/images/home/cuisines/yakitori.png'),
        },
        {
            id: '6',
            name: 'Tonkatsu',
            image: require('@/assets/images/home/cuisines/tonkatsu.png'),
        },
        {
            id: '7',
            name: 'Okonomiyaki',
            image: require('@/assets/images/home/cuisines/okonomiyaki.png'),
        },
        {
            id: '8',
            name: 'Takoyaki',
            image: require('@/assets/images/home/cuisines/takoyaki.png'),
        },
        {
            id: '9',
            name: 'Sashimi',
            image: require('@/assets/images/home/cuisines/sashimi.png'),
        },
        {
            id: '10',
            name: 'Onigiri',
            image: require('@/assets/images/home/cuisines/onigiri.png'),
        },
        {
            id: '11',
            name: 'Miso Soup',
            image: require('@/assets/images/home/cuisines/miso_soup.png'),
        },
        {
            id: '12',
            name: 'Gyoza',
            image: require('@/assets/images/home/cuisines/gyoza.png'),
        },
    ];
    const renderItem: ListRenderItem<CuisinesData> = ({ item }) => (
        <View style={styles.itemContainer}>
            <View style={styles.items}>
                <Image source={item.image} style={styles.image} />
            </View>
            <Text style={styles.name}>{item.name}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Popular Cuisines</Text>
                <TouchableOpacity onPress={() => setShowAll(!showAll)}>
                    <Text style={styles.viewAll}>
                        {showAll ? 'Show less' : 'View all'}
                    </Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={showAll ? data : data.slice(0, 8)}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={4}
                columnWrapperStyle={styles.row}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    title: {
        fontFamily: 'Poppins-Bold',
        fontSize: 18,
    },
    viewAll: {
        color: 'red',
        fontSize: 14,
    },
    row: {
        justifyContent: 'space-between',
    },
    items: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#ccc',
        borderRadius: 50,
        backgroundColor: '#fff',
        width: 70,
        height: 70,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    itemContainer: {
        alignItems: 'center',
        marginBottom: 16,
        width: '23%',
        gap: 8,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 8,
        resizeMode: 'contain',
    },
    name: {
        fontSize: 12,
        textAlign: 'center',
    },
});

export default Cuisines;
