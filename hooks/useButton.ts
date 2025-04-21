import { useTheme } from 'styled-components';
import useFont from './useFont';

const useButton = () => {
    useFont();

    const theme = useTheme();

    return {
        theme,
    };
};

export default useButton;
