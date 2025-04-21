import { SIZES } from '@/constants/Sizes';
import { Controller, FieldError } from 'react-hook-form';
import {
    KeyboardTypeOptions,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import { useTheme } from 'styled-components';

interface InputProps {
    control: any;
    name: string;
    label?: string;
    placeholder?: string;
    secureTextEntry?: boolean;
    keyboardType?: KeyboardTypeOptions;
    inputStyle?: object;
    containerStyle?: object;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    error?: FieldError;
    required?: boolean;
    length?: number;
    autofocus?: boolean;
}

const Input = ({
    control,
    name,
    label,
    placeholder,
    secureTextEntry,
    keyboardType,
    inputStyle,
    containerStyle,
    autoCapitalize,
    error,
    required,
    length,
    autofocus,
}: InputProps) => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        inputContainer: {
            gap: SIZES.base,
        },
        label: {
            fontSize: SIZES.base,
            fontFamily: 'Poppins-Medium',
        },
        input: {
            borderRadius: 99,
            borderWidth: 1,
            borderColor: error
                ? theme.colors.red.primary
                : theme.colors.gray.box,
            padding: SIZES.l,
            color: theme.colors.text,
        },
        error: {
            color: theme.colors.red.primary,
            fontSize: SIZES.l,
            fontFamily: 'Poppins-Medium',
            paddingHorizontal: SIZES.l,
        },
    });
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { value, onChange, onBlur } }) => (
                <View style={[styles.inputContainer, containerStyle]}>
                    <Text style={styles.label}>
                        {label}{' '}
                        <Text style={{ color: theme.colors.red.primary }}>
                            {required ? '*' : ''}
                        </Text>
                    </Text>
                    <View style={{ gap: SIZES.s }}>
                        <TextInput
                            autoCorrect={false}
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            placeholder={placeholder}
                            secureTextEntry={secureTextEntry}
                            keyboardType={keyboardType}
                            style={[styles.input, inputStyle]}
                            autoCapitalize={autoCapitalize}
                            maxLength={length}
                            autoFocus={autofocus}
                        />
                        {error && (
                            <Text style={styles.error}>{error.message}</Text>
                        )}
                    </View>
                </View>
            )}
        />
    );
};

export default Input;
