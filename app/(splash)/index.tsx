import SplashStepper from '@/components/SplashStepper';
import { SIZES } from '@/constants/Sizes';
import { Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components';

/**
 * The screen that is shown when the app is first opened.
 * Shows a full-screen logo and a {@link SplashStepper} below it.
 * @returns The JSX element for the splash screen.
 */
export default function SplashScreen() {
    const theme = useTheme();
    const styles = StyleSheet.create({
        safeAreaView: {
            paddingVertical: SIZES['6xl'],
            paddingHorizontal: SIZES['4xl'],
            flex: 1,
            backgroundColor: theme.colors.background,
            justifyContent: 'space-between',
        },
        icon: {
            width: 80,
            height: 80,
            marginHorizontal: 'auto',
            fontFamily: 'Poppins Bold',
        },
    });
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <Image
                source={require('@/assets/icons/logo.png')}
                style={styles.icon}
            />
            <SplashStepper />
        </SafeAreaView>
    );
}
