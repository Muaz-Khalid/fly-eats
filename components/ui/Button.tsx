import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import type { Router } from 'expo-router';
import useButton from '@/hooks/useButton';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';

interface ButtonProps {
    title: string;
    onPress?: () => void;
    varient: 'primary' | 'secondary';
    href?: string;
    routerAction?: keyof Router;
    icon?: string;
}

/**
 * A button component that can be used to perform a router action or
 * navigate to a given href.
 *
 * @param {string} title - The text to display on the button.
 * @param {() => void} [onPress] - A function to call when the button is pressed.
 * @param {'primary'|'secondary'} varient - The style of the button.
 * @param {string} [href] - The route to navigate to when the button is pressed.
 * @param {'push'|'replace'} [routerAction] - The router action to perform
 * when the button is pressed.
 */
const Button = ({
    title,
    onPress,
    varient,
    href,
    routerAction = 'push',
    icon,
}: ButtonProps) => {
    const router = useRouter();
    const { theme } = useButton();
    const styles = StyleSheet.create({
        button: {
            backgroundColor:
                varient === 'primary' ? theme.colors.text : 'transparent',
            borderColor: theme.colors.text,
            borderWidth: varient === 'primary' ? 0 : 1,
            paddingVertical: 16,
            width: '100%',
            borderRadius: 99,
            alignItems: 'center',
            flexShrink: 1,
            textAlign: 'center',
        },
        text: {
            color:
                varient === 'primary'
                    ? theme.colors.background
                    : theme.colors.text,
            fontFamily: 'Poppins-Medium',
        },
    });

    const handleClick = () => {
        if (href) {
            if (routerAction) {
                router[routerAction](href as any);
            }
        } else {
            onPress?.();
        }
    };
    return (
        <TouchableOpacity style={styles.button} onPress={handleClick}>
            <Text style={styles.text}>
                {icon && <FontAwesome6 name={icon} size={22} />}  {title}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;
