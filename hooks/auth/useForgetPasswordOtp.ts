import { ForgetPasswordOtpSchema } from '@/schemas/auth/AuthSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTransition } from 'react';
import { z } from 'zod';
import { useTheme } from 'styled-components';
import useFont from '../useFont';
const useForgetPasswordOtp = () => {
    const theme = useTheme();
    useFont();
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof ForgetPasswordOtpSchema>>({
        resolver: zodResolver(ForgetPasswordOtpSchema),
        defaultValues: {
            otp: '',
        },
    });

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = form;

    const onSubmit = async (data: z.infer<typeof ForgetPasswordOtpSchema>) => {
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
export default useForgetPasswordOtp;
