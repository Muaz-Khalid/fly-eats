import { SignInSchema } from '@/schemas/auth/AuthSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTransition } from 'react';
import useAuth from './useAuth';
import { z } from 'zod';
import { useTheme } from 'styled-components';
import useFont from '../useFont';

const useSignin = () => {
    const { auth } = useAuth();
    const theme = useTheme();
    useFont();
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof SignInSchema>>({
        resolver: zodResolver(SignInSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = form;

    const onSubmit = async (data: z.infer<typeof SignInSchema>) => {
        startTransition(() => {
            auth({ action: 'signin', data });
        });
    };

    return {
        control,
        handleSubmit,
        onSubmit,
        errors,
        isPending,
        theme,
    };
};
export default useSignin;
