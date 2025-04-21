import Input from '@/components/Input';
import Button from '@/components/ui/Button';
import { SIZES } from '@/constants/Sizes';
import {
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    ScrollView,
    View,
    Text,
} from 'react-native';
import { Link } from 'expo-router';
import useForgetPassword from '@/hooks/auth/useForgetPassword';

const ForgetPasswordForm = () => {
    const { control, errors, theme, handleSubmit, onSubmit } =
        useForgetPassword();
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
                    <Text>
                        Enter your register email address below to reset your
                        password
                    </Text>
                    <Input
                        control={control}
                        name="email"
                        label="Email Address"
                        placeholder="i.e. gonbei@example.com"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        error={errors.email}
                        required
                    />

                    <Button
                        title="Reset Password"
                        varient="primary"
                        // onPress={handleSubmit(onSubmit)}
                        href="/auth/oneTimePassword"
                    />
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: SIZES.s,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: SIZES.base,
                                fontFamily: 'Poppins-Medium',
                            }}
                        >
                            Remember Password?
                        </Text>
                        <Link href={'/auth/signin'} style={styles.link}>
                            Sign In
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default ForgetPasswordForm;
