import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Button from '@/components/ui/Button';
import { SIZES } from '@/constants/Sizes';
import { useTheme } from 'styled-components';
import { SafeAreaView } from 'react-native-safe-area-context';

const AllowLocationScreen = ({}) => {
    const theme = useTheme();

    const router = useRouter();
    const handleNotNow = () => {
        // Handle "Not Now" action
        router.navigate('/'); // Navigate to the home screen or another screen
    };

    const handleAllowAccess = () => {
        // Handle "Allow Access" action
        // You can add logic to request location permissions here
        router.navigate('/'); // Navigate to the home screen or another screen
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingVertical: SIZES['6xl'],
            paddingHorizontal: SIZES['2xl'],
            backgroundColor: theme.colors.background,
            justifyContent: 'center',
        },
        content: {
            alignItems: 'center',
            gap: SIZES['2xl'],
        },
        icon: {
            width: 160,
            height: 160,
            marginBottom: 20,
            marginHorizontal: 'auto',
        },
        title: {
            fontSize: SIZES['3xl'],
            fontWeight: 'bold',
            marginBottom: 10,
            textAlign: 'center',
            paddingHorizontal: SIZES['5xl'],
        },
        subtitle: {
            fontSize: 18,
            color: '#666',
            marginBottom: 20,
            textAlign: 'center',
        },
        description: {
            fontSize: 18,
            color: '#666',
            textAlign: 'center',
            marginBottom: 20,
            paddingHorizontal: 20,
        },
        privacyText: {
            fontSize: SIZES['l'],
            color: theme.colors.red.primary,
            textAlign: 'center',
            marginBottom: 20,
            textDecorationLine: 'underline',
            fontStyle: 'italic',
            paddingHorizontal: 20,
        },
        buttonContainer: {
            flexDirection: 'row',
            gap: 16,
        },
    });

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Image
                    source={require('@/assets/images/location.png')} // Replace with your location icon
                    style={styles.icon}
                />
                <Text style={styles.title}>
                    Enable Location for Nearby Restaurants
                </Text>
                <Text style={styles.description}>
                    Get the best dining options around you. Allow location
                    access to find nearby restaurants and enjoy faster, more
                    personalized service.
                </Text>
                <Text style={styles.privacyText}>
                    We respect your privacy and only use your location to show
                    nearby dining options.
                </Text>
            </View>

            <View style={styles.buttonContainer}>
                <Button
                    title="Not Now"
                    href="/(auth)/signin"
                    // onPress={handleNotNow}
                    routerAction="replace"
                    varient="secondary"
                />
                <Button
                    title="Allow Access"
                    // onPress={handleAllowAccess}
                    onPress={() => router.navigate('/choose-your-role')}
                    varient="primary"
                />
            </View>
        </SafeAreaView>
    );
};

export default AllowLocationScreen;
