import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Alert,
} from 'react-native';
import Input from '@/components/Input';
import Button from '@/components/ui/Button';
import { SIZES } from '@/constants/Sizes';
import useSignup from '@/hooks/auth/useSignup';
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const SignUpForm = () => {
    const {
        control,
        errors,
        theme,
        handleSubmit,
        onSubmit,
        isChecked,
        setIsChecked,
    } = useSignup();

    const handleSignUp = () => {
        if (!isChecked) {
            Alert.alert(
                'Terms and Conditions',
                'Please agree to the terms and conditions to proceed.'
            );
            return;
        }
        handleSubmit(onSubmit)();
    };

    const styles = StyleSheet.create({
        mainContainer: {
            flex: 1,
            backgroundColor: theme.colors.background,
            paddingHorizontal: SIZES['3xl'],
        },
        link: {
            color: theme.colors.red.primary,
            textDecorationLine: 'underline',
            fontFamily: 'Poppins-Medium',
        },
        checkboxContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: SIZES.m,
        },
        checkbox: {
            width: 24,
            height: 24,
            borderRadius: 4,
            borderWidth: 2,
            borderColor: theme.colors.gray.box,
            justifyContent: 'center',
            alignItems: 'center',
        },
        checkboxChecked: {
            backgroundColor: theme.colors.red.primary,
            borderColor: theme.colors.red.primary,
        },
        checkboxText: {
            fontSize: SIZES.l,
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
                    <View
                        style={{
                            flexDirection: 'row',
                            gap: SIZES.xl,
                        }}
                    >
                        <Input
                            control={control}
                            name="firstName"
                            label="First Name"
                            placeholder="e.i. Nanashi no"
                            containerStyle={{ flex: 1 }}
                            error={errors.firstName}
                            required
                        />
                        <Input
                            control={control}
                            name="lastName"
                            label="Last Name"
                            placeholder="i.e. Gonbei"
                            keyboardType="default"
                            containerStyle={{ flex: 1 }}
                            error={errors.lastName}
                            required
                        />
                    </View>
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
                        placeholder="Enter your password"
                        secureTextEntry
                        error={errors.password}
                        required
                    />

                    <Input
                        control={control}
                        name="confirmPassword"
                        label="Confirm Password"
                        keyboardType="default"
                        placeholder="Confirm your password"
                        secureTextEntry
                        error={errors.confirmPassword}
                        required
                    />

                    <View style={styles.checkboxContainer}>
                        <TouchableOpacity
                            style={[
                                styles.checkbox,
                                isChecked && styles.checkboxChecked,
                            ]}
                            onPress={() => setIsChecked(!isChecked)}
                        >
                            {isChecked && (
                                <MaterialIcons
                                    name="check"
                                    size={18}
                                    color="white"
                                />
                            )}
                        </TouchableOpacity>
                        <Text style={styles.checkboxText}>
                            I agree to the{' '}
                            <Link style={styles.link} href={'/'}>
                                Terms and Conditions
                            </Link>{' '}
                        </Text>
                    </View>

                    <Button
                        title="Sign Up"
                        varient="primary"
                        onPress={handleSignUp}
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
                            Already have an account?
                        </Text>

                        <Link href={'/allow-location'} style={styles.link}>
                            Login
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default SignUpForm;
