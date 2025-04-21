import { Ionicons } from '@expo/vector-icons';

export const PROFILE_LINKS = [
    {
        name: 'About Me',
        href: '/user-portal/profile',
        icon: <Ionicons name="person" size={24} color="red" />,
    },
    {
        name: 'My Orders',
        href: '/user-portal/orders',
        icon: <Ionicons name="cart" size={24} color="red" />,
    },
    {
        name: 'My Favorites',
        href: '/user-portal/favorites',
        icon: <Ionicons name="heart" size={24} color="red" />,
    },
    {
        name: 'My Address',
        href: '/user-portal/address',
        icon: <Ionicons name="location" size={24} color="red" />,
    },
    {
        name: 'Credit Card',
        href: '/user-portal/credit-card',
        icon: <Ionicons name="card" size={24} color="red" />,
    },
    {
        name: 'Transactions',
        href: '/user-portal/transactions',
        icon: <Ionicons name="receipt" size={24} color="red" />,
    },
    {
        name: 'Notifications',
        href: '/user-portal/notifications',
        icon: <Ionicons name="notifications" size={24} color="red" />,
    },
];
