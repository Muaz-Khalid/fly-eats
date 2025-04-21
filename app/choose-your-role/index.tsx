import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import Button from '@/components/ui/Button';
import { SIZES } from '@/constants/Sizes';
import { useTheme } from 'styled-components';

const ChooseYourPlanScreen = () => {
    const theme = useTheme();
    const router = useRouter();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingVertical: SIZES['6xl'],
            paddingHorizontal: SIZES['4xl'],
            backgroundColor: theme.colors.background,
            justifyContent: 'center',
        },
        content: {
            alignItems: 'center',
            marginTop: 50,
        },
        icon: {
            width: 100,
            height: 120,
        },
        title: {
            fontSize: SIZES['3xl'],
            fontWeight: 'bold',
            marginBottom: 10,
            textAlign: 'center',
            paddingHorizontal: SIZES['5xl'],
        },
        description: {
            fontSize: 18,
            color: '#666',
            textAlign: 'center',
            marginBottom: 20,
            paddingHorizontal: 20,
        },
        card: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 16,
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius: 10,
            backgroundColor: '#fff',
            marginHorizontal: 10,
            marginBottom: 16,
            gap: 16,
        },
        textContainer: {
            flex: 1,
            marginRight: 0,
        },
        cardTitle: {
            fontSize: 16,
            fontWeight: '600',
            marginBottom: 6,
        },
        cardText: {
            fontSize: 14,
            color: '#666',
            marginBottom: 8,
        },
    });

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.content}>
                    <Text style={styles.title}>Choose Your Role</Text>
                    <Text style={styles.description}>
                        Get started by selecting how you’ll use GoEats.
                    </Text>
                </View>
                <View style={styles.card}>
                    <Image
                        source={require('@/assets/choose-plan/choose-plan-buyer.png')}
                        style={styles.icon}
                        resizeMode="contain"
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.cardTitle}>
                            Order from Multiple Restaurants
                        </Text>
                        <Text style={styles.cardText}>
                            Order from multiple restaurants, track in real-time,
                            and enjoy flexible payments.
                        </Text>
                        <Button
                            title="Get Started as a Buyer"
                            onPress={() => router.navigate('/')}
                            varient="primary"
                        />
                    </View>
                </View>
                <View style={styles.card}>
                    <Image
                        source={require('@/assets/choose-plan/choose-plan-rider.png')}
                        style={styles.icon}
                        resizeMode="contain"
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.cardTitle}>
                            Earn on Your Own Schedule
                        </Text>
                        <Text style={styles.cardText}>
                            Deliver with optimized routes, real-time tracking,
                            and flexible schedules.
                        </Text>
                        <Button
                            title="Start Earning as a Rider"
                            onPress={() => router.navigate('/')}
                            varient="primary"
                        />
                    </View>
                </View>
                <View style={styles.card}>
                    <Image
                        source={require('@/assets/choose-plan/choose-plan-seller.png')}
                        style={styles.icon}
                        resizeMode="contain"
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.cardTitle}>
                            Expand Your Reach Effortless
                        </Text>
                        <Text style={styles.cardText}>
                            Manage orders, update your menu, and grow your
                            business with GoEats.
                        </Text>
                        <Button
                            title="Join as a Seller"
                            onPress={() => router.navigate('/')}
                            varient="primary"
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ChooseYourPlanScreen;
