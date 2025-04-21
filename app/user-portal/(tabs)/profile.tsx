import { PROFILE_LINKS } from '@/constants/ProfileLinks';
import { SIZES } from '@/constants/Sizes';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components';

const ProfileScreen = () => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        header: {
            backgroundColor: 'red',
            paddingTop: SIZES['2xl'],
            height: 322,
            borderEndEndRadius: 180,
            borderBottomLeftRadius: 180,
            alignItems: 'center',
            gap: SIZES['6xl'],
        },
        title: {
            textAlign: 'center',
            color: theme.colors.background,
            fontFamily: 'Poppins-Bold',
            fontSize: SIZES['3xl'],
        },
        image: {
            width: 120,
            height: 120,
            borderRadius: 999,
        },
        avatarAndInfo: {
            alignItems: 'center',
            gap: SIZES.s,
        },
        name: {
            color: theme.colors.background,
            fontFamily: 'Poppins-Bold',
            fontSize: SIZES.base,
        },
        email: {
            color: theme.colors.background,
            fontFamily: 'Poppins-Regular',
            fontSize: SIZES.l,
        },
        item: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: SIZES.l,
            paddingHorizontal: SIZES['2xl'],
        },
        itemName: {
            color: 'black',
            fontFamily: 'Poppins-Medium',
            fontSize: SIZES.base,
        },
    });
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.title}>Settings</Text>

                <View style={styles.avatarAndInfo}>
                    <Image
                        source={require('@/assets/images/home/cuisines/sushi.png')}
                        style={styles.image}
                    />
                    <Text style={styles.name}>Haruto Tanaka (田中 春人)</Text>
                    <Text style={styles.email}>haruto.tanaka@email.jp</Text>
                </View>
            </View>

            <FlatList
                data={[
                    ...PROFILE_LINKS,
                    {
                        name: 'Logout',
                        icon: <Ionicons name="log-out" size={24} color="red" />,
                    },
                ]}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.item}>
                        <View style={{ flexDirection: 'row', gap: SIZES.xl }}>
                            {item.icon}
                            <Text style={styles.itemName}>{item.name}</Text>
                        </View>
                        {item.name !== 'Logout' && (
                            <Ionicons
                                name="chevron-forward"
                                size={24}
                                color="gray"
                            />
                        )}
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
};

export default ProfileScreen;
