import { SignUpSchema } from '@/schemas/auth/AuthSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState, useTransition } from 'react';
import useAuth from './useAuth';
import { z } from 'zod';
import { useTheme } from 'styled-components';
import useFont from '../useFont';

const useSignup = () => {
    const { auth } = useAuth();
    const theme = useTheme();
    useFont();
    const [isChecked, setIsChecked] = useState(false);
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof SignUpSchema>>({
        resolver: zodResolver(SignUpSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            agreeToTerms: false,
        },
    });

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = form;

    const onSubmit = async (data: z.infer<typeof SignUpSchema>) => {
        startTransition(() => {
            auth({ action: 'signup', data });
        });
    };

    return {
        control,
        handleSubmit,
        onSubmit,
        errors,
        isPending,
        theme,
        isChecked,
        setIsChecked,
    };
};

export default useSignup;
