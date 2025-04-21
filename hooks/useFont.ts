import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';

const useFont = () => {
    const [fontLoaded] = useFonts({
        'Poppins-Bold': require('@/assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('@/assets/fonts/Poppins-Medium.ttf'),
        'Poppins-Regular': require('@/assets/fonts/Poppins-Regular.ttf'),
    });

    if (!fontLoaded) SplashScreen.preventAutoHideAsync();
};

export default useFont;
