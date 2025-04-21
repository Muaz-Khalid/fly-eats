import axios from 'axios';
import { useTransition } from 'react';

interface AuthProps {
    action: 'signin' | 'signup';
    data: {
        email: string;
        password: string;
        fullName?: string;
    };
}

interface AuthResponse {
    token: string;
    user: {
        email: string;
        fullName: string;
    };
}

const apiCall = async (route: string, data: AuthProps['data']) => {
    const response = await axios.post(
        `${process.env.BACKEND_API_URL}/api/auth/${route}`,
        data
    );
    return response.data as AuthResponse;
};

/**
 * Custom hook that provides authentication functionality.
 *
 * This hook utilizes a `useTransition` hook to manage asynchronous authentication
 * operations, including signing in and signing up users. It exposes an `auth`
 * function that triggers the authentication process based on the provided action
 * ('signin' or 'signup') and user data.
 *
 * Returns:
 *   - auth: An async function that performs the authentication action.
 *   - isPending: A boolean indicating if the authentication process is in transition.
 */

const useAuth = () => {
    const [isPending, startTransition] = useTransition();

    const auth = async ({ action, data }: AuthProps) => {
        const route = action === 'signin' ? 'signin' : 'signup';

        startTransition(() => {
            apiCall(route, data)
                .then((responseData) => {
                    return responseData;
                })
                .catch((error) => {
                    console.error('Authentication error:', error);
                    throw new Error('Authentication failed. Please try again.');
                });
        });
    };

    return { auth, isPending };
};

export default useAuth;
