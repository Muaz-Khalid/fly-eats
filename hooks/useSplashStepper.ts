import { useState } from 'react';
import { useTheme } from 'styled-components';
import useFont from './useFont';

const useSplashStepper = () => {
    const theme = useTheme();
    useFont();
    const [currentStep, setCurrentStep] = useState(0);

    return {
        currentStep,
        setCurrentStep,
        theme,
    };
};

export default useSplashStepper;
