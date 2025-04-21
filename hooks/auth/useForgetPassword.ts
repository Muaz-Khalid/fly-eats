import { ForgetPasswordSchema } from '@/schemas/auth/AuthSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTransition } from 'react';
import { z } from 'zod';
import { useTheme } from 'styled-components';
import useFont from '../useFont';
const useForgetPassword = () => {
    const theme = useTheme();
    useFont();
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof ForgetPasswordSchema>>({
        resolver: zodResolver(ForgetPasswordSchema),
        defaultValues: {
            email: '',
        },
    });

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = form;

    const onSubmit = async (data: z.infer<typeof ForgetPasswordSchema>) => {
        startTransition(() => {
            // auth({ action: 'signin', data });
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
export default useForgetPassword;
