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

const SignInForm = () => {
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
                        name="email"
                        label="Email"
                        placeholder="i.e. gonbei@example.com"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        error={errors.email}
                        required
                    />

                    <Input
                        control={control}
                        name="password"
                        label="Password"
                        keyboardType="default"
                        placeholder="••••••••"
                        secureTextEntry
                        error={errors.password}
                        required
                    />
                    <View style={{ gap: SIZES.l, alignItems: 'flex-end' }}>
                        <Link href={'/auth/forgetPassword'}>
                            <Text
                                style={{
                                    color: theme.colors.red.primary,
                                    textDecorationLine: 'underline',
                                }}
                            >
                                {' '}
                                Forgot Password?
                            </Text>
                        </Link>
                    </View>

                    <Button
                        title="Login"
                        varient="primary"
                        onPress={handleSubmit(onSubmit)}
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
                            Don't have an account?
                        </Text>
                        <Link href={'/auth/signup'} style={styles.link}>
                            Sign Up
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default SignInForm;
