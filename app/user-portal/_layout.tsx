import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
                name="order-detail/[ordernumber]"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="popular-dish/[id]"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="restaurant-detail/[id]"
                options={{ headerShown: false }}
            />
            <Stack.Screen name="cart/index" options={{ headerShown: false }} />
        </Stack>
    );
}
