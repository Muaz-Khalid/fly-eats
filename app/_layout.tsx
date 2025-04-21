import useFont from '@/hooks/useFont';
import { store } from '@/store';
import { ThemeProvider } from '@/theme/themeProvider';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';

export default function RootLayout() {
    useFont();
    return (
        <Provider store={store}>
            <ThemeProvider>
                <Stack>
                    <Stack.Screen
                        name="(splash)"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="auth"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="choose-your-role/index"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="user-portal"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="allow-location/index"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name="+not-found" />
                </Stack>
                <StatusBar style="dark" />
            </ThemeProvider>
        </Provider>
    );
}
