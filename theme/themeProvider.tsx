import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { ReactNode } from 'react';

interface Children {
    children: ReactNode;
}

/**
 * ThemeProvider component that wraps styled components ThemeProvider.
 * It provides the theme based on the darkMode state from the store.
 * @param {{ children: ReactNode }} props
 * @returns {JSX.Element}
 */
export const ThemeProvider = ({ children }: Children): JSX.Element => {
    const { darkMode } = useSelector((state: RootState) => state.theme);

    return (
        <SCThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            {children}
        </SCThemeProvider>
    );
};
