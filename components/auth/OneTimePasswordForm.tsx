import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from 'react-native';
import Button from '@/components/ui/Button';
import { SIZES } from '@/constants/Sizes';
import { Link } from 'expo-router';
import useForgetPasswordOtp from '@/hooks/auth/useForgetPasswordOtp';
import Input from '@/components/Input';

const OneTimePasswordForm = () => {
    const { control, errors, theme, handleSubmit, onSubmit } =
        useForgetPasswordOtp();
    const styles = StyleSheet.create({
        mainContainer: {
            flex: 1,
            backgroundColor: theme.colors.background,
            paddingHorizontal: SIZES['3xl'],
        },
        content: {
            flex: 1,
            gap: SIZES.xl,
            paddingVertical: SIZES['4xl'],
        },
        otpInput: {
            textAlign: 'center',
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
                <View style={styles.content}>
                    <Text>
                        We’ve sent a 6-digit OTP to your email. Please enter it
                        below.
                    </Text>
                    <Input
                        inputStyle={styles.otpInput}
                        placeholder="Enter OTP"
                        name="otp"
                        keyboardType="number-pad"
                        length={6}
                        autofocus={true}
                        control={control}
                        error={errors.otp}
                    />
                    <Button
                        title="Verify OTP"
                        onPress={handleSubmit(onSubmit)}
                        varient="primary"
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
                            Didn’t receive the OTP?
                        </Text>
                        <Link
                            href="/auth/resetPassword"
                            onPress={() =>
                                Alert.alert(
                                    'Resend OTP',
                                    'A new OTP has been sent to your email.'
                                )
                            }
                            style={styles.link}
                        >
                            Resend
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default OneTimePasswordForm;
