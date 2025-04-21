import Input from '@/components/Input';
import Button from '@/components/ui/Button';
import { SIZES } from '@/constants/Sizes';
import useSignin from '@/hooks/auth/useSignin';
import {
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    ScrollView,
    View,
    Text,
} from 'react-native';
import { Link } from 'expo-router';

const ResetPasswordForm = () => {
    const { control, errors, theme, handleSubmit, onSubmit } = useSignin();
    const styles = StyleSheet.create({
        mainContainer: {
            flex: 1,
            backgroundColor: theme.colors.background,
            paddingHorizontal: SIZES['3xl'],
        },
        link: {
            color: theme.colors.red.primary,
            textDecorationLine: 'underline',
            fontSize: SIZES.base,
            fontFamily: 'Poppins-Medium',
        },
    });

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.mainContainer}
        >
            <ScrollView
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={{
                        flex: 1,
                        gap: SIZES.xl,
                        paddingVertical: SIZES['4xl'],
                    }}
                >
                    <Input
                        control={control}
                        name="password"
                        label="Password"
                        placeholder="Enter your password"
                        keyboardType="default"
                        autoCapitalize="none"
                        error={errors.email}
                        required
                    />

                    <Input
                        control={control}
                        name="confirmPassword"
                        label="Confirm Password"
                        keyboardType="default"
                        placeholder="••••••••"
                        secureTextEntry
                        error={errors.password}
                        required
                    />

                    <Button
                        title="Reset Password"
                        varient="primary"
                        onPress={handleSubmit(onSubmit)}
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default ResetPasswordForm;
