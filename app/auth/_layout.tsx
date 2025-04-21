import { SIZES } from '@/constants/Sizes';
import { Stack, usePathname } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components';

export default function AuthLayout() {
    const theme = useTheme();
    const pathname = usePathname();
    const styles = StyleSheet.create({
        safeAreaView: {
            flex: 1,
            backgroundColor: theme.colors.background,
            paddingVertical: SIZES['6xl'],
        },
        logoContainer: {
            gap: SIZES['4xl'],
        },
        logo: {
            width: 80,
            height: 80,
            alignSelf: 'center',
        },
        title: {
            fontSize: SIZES['3xl'],
            fontFamily: 'Poppins-Bold',
            textAlign: 'center',
        },
    });

    const getTitle = () => {
        switch (pathname) {
            case '/auth/signin':
                return 'Sign In to GoEats';
            case '/auth/signup':
                return 'Create your Go Eats Account';
            case '/auth/forgetPassword':
                return 'Forgot Password?';
            case '/auth/forgetPasswordOtp':
                return 'Enter the OTP';
            case '/auth/resetPassword':
                return 'Enter the New Password';
            default:
                return '';
        }
    };

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('@/assets/icons/logo.png')}
                    style={styles.logo}
                />
                <Text style={styles.title}>{getTitle()}</Text>
            </View>
            <Stack>
                <Stack.Screen
                    name="signin"
                    options={{
                        headerShown: false,
                        animationTypeForReplace: 'push',
                        animation: 'fade',
                        animationDuration: 200,
                    }}
                />
                <Stack.Screen
                    name="signup"
                    options={{
                        headerShown: false,
                        animation: 'fade',
                        animationTypeForReplace: 'push',
                        animationDuration: 200,
                    }}
                />
                <Stack.Screen
                    name="forgetPassword"
                    options={{
                        headerShown: false,
                        animation: 'fade',
                        animationTypeForReplace: 'push',
                        animationDuration: 200,
                    }}
                />
                <Stack.Screen
                    name="oneTimePassword"
                    options={{
                        headerShown: false,
                        animation: 'fade',
                        animationTypeForReplace: 'push',
                        animationDuration: 200,
                    }}
                />
                <Stack.Screen
                    name="resetPassword"
                    options={{
                        headerShown: false,
                        animation: 'fade',
                        animationTypeForReplace: 'push',
                        animationDuration: 200,
                    }}
                />
            </Stack>
        </SafeAreaView>
    );
}
