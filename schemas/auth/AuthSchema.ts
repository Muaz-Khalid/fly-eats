import { z } from 'zod';

export const SignInSchema = z.object({
    email: z.string().email().min(1, 'Email is required'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const SignUpSchema = SignInSchema.extend({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    confirmPassword: z
        .string()
        .min(8, 'Password must be at least 8 characters'),
    agreeToTerms: z.boolean({
        errorMap: () => ({
            message: 'You must agree to the terms and conditions',
        }),
    }),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
});

export const ForgetPasswordSchema = z.object({
    email: z.string().email().min(1, 'Email is required'),
});
export const ForgetPasswordOtpSchema = z.object({
    otp: z.string().min(6, 'Minimum 6 digits'),
});
